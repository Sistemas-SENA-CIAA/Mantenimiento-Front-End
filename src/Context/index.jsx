import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const TurisContext = createContext();

export function TurisContextProvider({ children }) {
    const [inputs, setInputs] = useState({});
    const [loader, setLoader] = useState(true);
    const [admin, setAdmin] = useState(false)
    const [tokenSession, setTokenSession] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get('http://localhost:8000/api/imagen')
                // const data = await response.data
                // console.log(data);
                setLoader(false)
            } catch (error) {
                console.log(`oh no hermano, algo salio mal: ${error}`);
                setLoader(false)
            }
        }
        fetchData()
    }, []) 


    return (
        <TurisContext.Provider
            value={{
                inputs,
                setInputs,
                loader,
                setLoader,
                admin,
                setAdmin,
                tokenSession,
                setTokenSession,
            }}
        >
            {children}
        </TurisContext.Provider>
    )
}
