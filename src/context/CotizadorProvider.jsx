import { createContext } from "react";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => { //*provider=fuente de los datos
    //? Espacio para funciones y hooks
    const hola = 'hola mundo'

    return(
        <CotizadorContext.Provider
            value={{
                hola: hola
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


