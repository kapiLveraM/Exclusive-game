import React from 'react'
import CommonButtonLiner from './common/button/CommonButtonLiner'

const Hero = () => {
  return (
    <div className=' min-h-screen flex items-center'>
      <div className="container xl:max-w-[1140px] mx-auto px-3">
        <div className="flex flex-col items-center">
          <h1 className=" text-5xl md:text-xxl  sm:leading-[110%] text-white font-Anton max-w-lg mx-auto text-center">Exclusive Games. Pasión por ganar</h1>
          <p className='text-center font-medium text-xs sm:text-sm font-Inter text-white max-w-[727px] mx-auto opacity-80 mt-4'>En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</p>
          <div className=" mt-10">
            <CommonButtonLiner type="submit" content="Empezar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero