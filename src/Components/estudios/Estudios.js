import React from 'react'
import p5 from '../images/p5.png'
import coderhouse from '../images/coderhouse.png'
import utn from '../images/utn_logo.png'
import './estudios.css'

function Estudios() {
  return (
    <>
      <h1 className='estudios'>Estudios en programación</h1>
      <div className='row'>
        <div className='col col-estudios'>
          <img src={p5} alt='logo empresa' className='image-estudios' />
          <div className='div-texto'>
            <h2 className='h2-estudios'>Plataforma 5</h2>
            <p>
              Curso Introducción a la programación (HTML - CSS - Javascript)
            </p>
          </div>
        </div>
        <div className='col col-estudios'>
          <img src={utn} alt='logo empresa' className='image-estudios' />
          <div className='div-texto'>
            <h2 className='h2-estudios'>
              Universidad tecnológica nacional (UTN)
            </h2>
            <p>Curso Programador FullStack avanzado</p>
          </div>
        </div>
        <div className='col col-estudios'>
          <img src={coderhouse} alt='logo empresa' className='image-estudios' />
          <div className='div-texto'>
            <h2 className='h2-estudios'>Coderhouse</h2>
            <p>Curso FrontEnd ReactJs</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Estudios
