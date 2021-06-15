import React, { createContext, useState } from 'react'

export const Context = createContext();

export function GlobalContext({ children }) {
    const [isChecked, setIsChecked] = useState(false);
    const [valor, setValor] = useState("");
    
    function adicionarValor(novoValor) {
        setValor(novoValor)
    }
    
    function adicionarIsChecked(novoIsChecked) {
        setIsChecked(novoIsChecked);
    }
    return (
        <Context.Provider value={{ dados, valor, isChecked, adicionarDados, adicionarValor, adicionarIsChecked }}>
            {children}
        </Context.Provider>
    )

}