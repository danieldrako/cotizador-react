import { Fragment, useContext } from "react"
import { MARCAS, PLANES, YEARS } from "../constants"
import CotizadorContext from "../context/CotizadorProvider"

const Formulario = () => {

    const {hola} = useContext(CotizadorContext)

    console.log(hola)
    

  return (
    <>
    
        <form action="">
            <div className="block mb-3 font-bold ">
                <label htmlFor="" className="text-stone-500 uppercase">
                    Marca
                </label>
                <select 
                    name="name" id=""
                    className="w-full p-3 border bg-slate-300 border-stone-600"
                
                >
                    <option value="">*** Seleciona Marca ***</option>

                    {MARCAS.map(marca => (
                        <option 
                            key={marca.id}
                            value={marca.nombre}
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
                    name="name" id=""
                    className="w-full p-3 border bg-slate-300 border-stone-600"
                
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
                <div className="flex gap-3 items-center">
                    {PLANES.map(plan=>(
                        <Fragment key= {plan.id}>
                            <label htmlFor="">
                                {plan.nombre}
                            </label>
                            <input 
                                type="radio"
                                name="plan"
                                value={plan.id}
                             />
                        </Fragment>
                    ))}
                </div>

                <input 
                    type="submit" 
                    className="w-full bg-amber-700 hover:bg-orange-600 transition-colors text-lime-600 hover:text-lime-400 cursor-pointer p-3 uppercase font-bold"
                    value="Cotizar"
                />

            </div>
        </form>
    </>
  )
}

export default Formulario