import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_dzYCknxO2mZb_HBxugk1wWVRg_eh-y4",
    authDomain: "miniblog-bc130.firebaseapp.com",
    projectId: "miniblog-bc130",
    storageBucket: "miniblog-bc130.appspot.com",
    messagingSenderId: "676814495694",
    appId: "1:676814495694:web:131fa28ce67f2b97ae959f",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
