import useCotizador from "../hooks/useCotizador"

const Error = () => {
    const {error} = useCotizador()
  return (
    <div className="border text-center border-red-500 bg-orange-300 text-red-800 p-3">{error}</div>
  )
}

export default Error