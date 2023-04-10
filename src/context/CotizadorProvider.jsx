import { createContext, useState } from "react";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => { //*provider=fuente de los datos
    //? Espacio para funciones y hooks
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })
    
    const handleChangeDatos = e =>{
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    return(
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
 }

 export {
    CotizadorProvider
 }
 export default CotizadorContext


