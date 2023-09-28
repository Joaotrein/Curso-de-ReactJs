import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["João", "Pedro", "Gustavo"])


    return (
        <div>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </div>
    )
}

export default ListRender