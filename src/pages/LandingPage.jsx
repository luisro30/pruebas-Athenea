import React from 'react'
import ImagenPrincipal from '../Assets/images/landing.svg'

const LandingPage = () => {
    return (
        <div className='font-bold text-lg'>
            <img className='flex justify-center' src={ImagenPrincipal}/>


            <div className='grid justify-center'>
            <h1>Hola, ¿Qué tal?</h1>
            <h5>Bienvenido docente a Atenea, su nueva herramienta de apoyo académico</h5>
            </div>

            <div className='grid justify-center justify-items-start w-full'>
            <button className='rounded-full text-center w-full bg-[#7064FF]'>Ingresar</button>
            <button className='rounded-full text-center w-full bg-[#7064FF]'>Registrarse</button>
            </div>
        </div>
    )
}

export { LandingPage }  