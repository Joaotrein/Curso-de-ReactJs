import { useState } from "react"

const HookUseState = () => {
    const [number, setNumber ] = useState(15)
    return (
        <div>
            <p>Valor atual: {number}</p>
            <button onClick={() => {setNumber(25)}}>Clique aqui para mudar o valor</button>
        </div>
    )
}

export default HookUseState