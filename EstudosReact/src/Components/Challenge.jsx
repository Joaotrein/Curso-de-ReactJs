const Challenge = () => {
    const num1 = 20
    const num2 = 30

    return (
        <div>
            <button onClick={() => console.log(num1 + num2)}>CLIQUE EM MIM</button>
            <p>{num1}</p>
            <p>{num2}</p>
        </div>
    )

}

export default Challenge