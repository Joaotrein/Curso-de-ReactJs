import "./App.css";
import { useState, useEffect } from "react";

// 4 - Custom hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
    const [products, setProducts] = useState([]);

    // 4 - Custom hook

    const { data: items, httpConfig, loading, error } = useFetch(url);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    // 1 - Resgatando dados (aula 88)

    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await fetch(url);
    //         const data = await res.json();

    //         setProducts(data);
    //     }

    //     fetchData();
    // }, []);

    // 2 - Add de produtos (aula 89)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const product = {
            name,
            price,
        };

        // const res = await fetch(url, {
        //     method: "POST",
        //     headers: {
        //         "Content-type": "application/json",
        //     },

        //     body: JSON.stringify(product),
        // });

        // // 3 - Carregamento dinâmico
        // const addedProduct = await res.json();

        // setProducts((prevProducts) => [...prevProducts, addedProduct]);

        // 5 - Refatorando post
        httpConfig(product, "POST");
        setName("");
        setPrice("");
    };

    return (
        <>
            <div className="App">
                <h1>Lista de Produtos</h1>
                {/* 6 - Loading */}

                {loading && <p>Carregando dados...</p>}

                {error && <p>{error}</p>}
                {!error && (
                    <ul>
                        {items &&
                            items.map((products) => (
                                <li key={products.id}>
                                    {products.name}- R$: {products.price}
                                </li>
                            ))}
                    </ul>
                )}
                <div className="add-product">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Nome:
                            <input
                                type="text"
                                value={name}
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </label>
                        <label>
                            Preço:
                            <input
                                type="number"
                                value={price}
                                name="price"
                                onChange={(e) => setPrice(e.target.value)}
                            ></input>
                        </label>
                        {/* 7 - State de loading no post */}
                        {loading && (
                            <input
                                type="submit"
                                disabled
                                value="Aguarde"
                            ></input>
                        )}
                        {!loading && (
                            <input type="submit" value="Criar"></input>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
}

export default App;
