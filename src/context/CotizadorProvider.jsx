import { createContext, useState } from "react";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => { //*provider=fuente de los datos
    //? Espacio para funciones y hooks
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })
    const [error, setError] = useState('')
    
    const handleChangeDatos = e =>{
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = () => { 
        //*base

        //*obtener diferencia de años

        //*Hay que restar el 3% por cada año

        //*Americano15%
        //*Europeo35%
        //*Asiatico10%

        //*Báisoc20%
        //*Acompleto50%
     }

    return(
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error, 
                setError,
                cotizarSeguro
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


