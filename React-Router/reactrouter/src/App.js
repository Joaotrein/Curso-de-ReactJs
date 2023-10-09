import "./App.css";

// 1 - Configurando o React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";

// Componentes
import Navbar from "./components/navbar";
import Info from "./pages/Info";
import Notfound from "./pages/Notfound";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";

function App() {
    return (
        <>
            <div className="App">
                <h1>React Router</h1>
                <BrowserRouter>
                    <Navbar />
                    {/* 9 - Search Hook */}
                    <SearchForm />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/products/:id" element={<Product />} />
                        {/* 6 - Nested Route */}
                        <Route path="/products/:id/info" element={<Info />} />
                        {/* 9 - Página de busca */}
                        <Route path="/search" element={<Search />} />
                        {/* 10 - Redirect */}
                        <Route path="/company" element={<Navigate to="/about"/>}/>
                        {/* 7 - No match route */}
                        <Route path="*" element={<Notfound />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
