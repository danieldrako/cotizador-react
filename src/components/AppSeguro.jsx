import React from 'react'
import Formulario from './Formulario'

const AppSeguro = () => {
  return (
    <>
        <header className='my-10'>
            <h1 className='text-white text-center text-4xl font-black'>Cotizador de Seguros de Auto</h1>
        </header>

        <main className='bg-white md:w-2/3 lg:w-2/4 mx-auto shadow-xl rounded-lg p-10 opacity-80'>
            <Formulario/>

        </main>
    </>
  )
}

export default AppSeguro