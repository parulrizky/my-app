import { useState, useContext, createContext } from "react";

const TokenContext = createContext({})

export const TokenProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    return (
        <TokenContext.Provider value={{ user, setUser }}>
            {children}
        </TokenContext.Provider>
    )
}

export const useTokenContext = () => {
    const context = useContext(TokenContext)
    return context
}