import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp, doc } from "firebase/firestore";

const initialstate = {
    loading: null,
    error: null,
};

const insertReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { loading: true, error: null };
        case "INSERT_DOC":
            return { loading: false, error: null };
        case "ERROR":
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const useInsertDocument = (docCollection) => {
    const [response, dispatch] = useReducer(insertReducer, initialstate);

    // Deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    const checkCancelBeforeDispatch = (action) => {
        if (!cancelled) {
            dispatch(action);
        }
    };

    const insertDocument = async (document) => {
        checkCancelBeforeDispatch({
            Type: "LOADING",
        });
        try {
            const newDocument = { ...document, createdAt: Timestamp.now() };

            const insertedDocument = await addDoc(
                collection(db, docCollection),
                newDocument
            );

            checkCancelBeforeDispatch({
                Type: "INSERTED_DOC",
                payload: insertedDocument,
            });
        } catch (error) {
            checkCancelBeforeDispatch({
                Type: "ERROR",
                payload: error.message,
            });
        }
    };


    useEffect (() => {
        return () => setCancelled(true)
    }, [])
    return { insertDocument, response };
};
