import { Fragment } from "react"
import { MARCAS, PLANES, YEARS } from "../constants"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"

const Formulario = () => {

    const {datos, handleChangeDatos,setError, error, cotizarSeguro} = useCotizador()

    const handleSubmit = (e) => { 
        e.preventDefault()

        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios')
            return 
        }

        setError('')

        cotizarSeguro()

     }

  return (
    <>
        {error&&<Error/>}
        <form action=""
            onSubmit={handleSubmit}
        >
            <div className="block mb-3 font-bold ">
                <label htmlFor="" className="text-stone-500 uppercase">
                    Marca
                </label>
                <select 
                    name="marca" id=""
                    className="w-full p-3 border bg-slate-300 border-stone-600"
                    onChange={e => handleChangeDatos(e)}
                    value={datos.marca}
                >
                    <option value="">*** Seleciona Marca ***</option>

                    {MARCAS.map(marca => (
                        <option 
                            key={marca.id}
                            value={marca.id}
                        >
                            {marca.nombre}
                        </option>
                    ))}
                </select>
            </div>

            <div className="block mb-3 font-bold ">
                <label htmlFor="" className="text-stone-500 uppercase">
                    Año
                </label>
                <select 
                    name="year" id=""
                    className="w-full p-3 border bg-slate-300 border-stone-600"
                    onChange={e => handleChangeDatos(e)}
                    value={datos.year}
                >
                    <option value="">*** Seleciona el Año ***</option>

                    {YEARS.map(year => (
                        <option 
                            key={year}
                            value={year}
                        >
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className="block mb-3 font-bold ">
                <label htmlFor="" className="text-stone-500 uppercase">
                    Planes
                </label>
                <div className="flex gap-3 items-center mb-4">
                    {PLANES.map(plan=>(
                        <Fragment key= {plan.id}>
                            <label htmlFor="">
                                {plan.nombre}
                            </label>
                            <input 
                                type="radio"
                                name="plan"
                                value={plan.id}
                                onChange={e => handleChangeDatos(e)}
                             />
                        </Fragment>
                    ))}
                </div>

                <input 
                    type="submit" 
                    className="w-full bg-amber-600 hover:bg-orange-500 transition-colors text-lime-500 hover:text-lime-300 cursor-pointer p-3 uppercase font-bold"
                    value="Cotizar"
                />

            </div>
        </form>
    </>
  )
}

export default Formulario