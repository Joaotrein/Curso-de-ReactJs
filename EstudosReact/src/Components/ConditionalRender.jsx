import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true)

    const [name] = useState("João")

    return (
        <div>
            {x && <p>Se x for true, sim!!</p>}
            {name === "João" ? (
                <div>O Nome é João</div>
            ) : (
                <div>O Nome não é João</div>
            )}
        </div>
    )
}

export default ConditionalRender