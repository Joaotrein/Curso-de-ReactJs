import "./App.css";
import MyForm from "./components/MyForm";

function App() {
    return <>
        <MyForm user={{name: "Josias", email:"josias@gmail.com", bio:"Eu sou um advogado", role:"admin"}}> </MyForm>
    
    </>;
}

export default App;
