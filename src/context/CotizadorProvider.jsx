import { createContext } from "react";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => { //*provider=fuente de los datos

    return(
        <CotizadorContext.Provider
            value={{
                
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


