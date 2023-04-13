import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from "../constants"

const Resultado = () => {
    const {resultado, datos} = useCotizador()
    const {marca, plan, year} = datos

    const [ nombreMarca ] = MARCAS.filter(m=>m.id === Number(marca) )

    if(resultado === 0) return null

  return (
    <div className="bg-yellow-300">
        <h2 className="text-gray-700">
            Resumen
        </h2>

        <p>
            <span>Marca: </span>
            {nombreMarca.nombre}
        </p>
    </div>
  )
}

export default Resultado