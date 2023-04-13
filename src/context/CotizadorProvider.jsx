import { createContext, useState } from "react";
import { calcularMarca, calcularPlan, formatearDinero, obtenerDiferenciaYear } from "../helpers";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => { //*provider=fuente de los datos
    //? Espacio para funciones y hooks
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })
    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)
    
    const handleChangeDatos = e =>{
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = () => { 
        //*base
        let resultado = 2000

        //*obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year)

        //*Hay que restar el 3% por cada año
        resultado -=((diferencia)*.03)*resultado

        //*Americano15%
        //*Europeo35%
        //*Asiatico10%
        resultado*= calcularMarca(datos.marca)

        //*Báisoc20%
        //*Acompleto50%
        resultado *= calcularPlan(datos.plan)

        //*Formatear Cantidad 
        resultado = formatearDinero(resultado)

        setCargando(true)

        setTimeout(() => { 
            setResultado(resultado)
            setCargando(false)
         },3000)
     }

    return(
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error, 
                setError,
                cotizarSeguro,
                resultado,
                cargando
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


