import React from 'react'

export const UserDetail = () => {
    const pessoas = [
        { nome: "João", idade: 20, profissao: "Arquiteto" },
        { nome: "Jorge", idade: 12, profissao: "Programador" },
        { nome: "Roberto", idade: 25, profissao: "Engenheiro" }
    ]

    return (
        <div>
            {pessoas.map((pessoas) => (
                <p>Seu nome é {pessoas.nome}, tem {pessoas.idade} anos e é {pessoas.profissao}.
                    {pessoas.idade >= 18 ? "Pode tirar carteira" : "Não pode tirar carteira"}
                </p>
            ))}

        </div>
    )
}
