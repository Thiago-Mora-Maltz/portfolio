import React from 'react'
import { Fragment } from 'react'
import './proyectos.css'
import gifs from '../images/gifsImage.png'
import noticias from '../images/noticiasImage.png'
import cadejo from '../images/cadejo_foto.png'
function Proyectos() {
  return (
    <Fragment>
      <h1>Proyectos</h1>
      <div className='row sectionProyectos'>
        <div className='col-proyecto'>
          <div className='div-descripcion'>
            <h2>Front-end</h2>
            <h1>Cadejo Vermú Ecommerce</h1>
            <p>
              Proyecto final para Coderhouse. Ecommerce de Cadejo Vermú y Sol
              negro tacos, dos emprendimientos gastronómicos emergentes que van
              muy bien de la mano.
            </p>
            <div className='div-buttons'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/Thiago-Mora-Maltz'
              >
                <button className='button-proyecto'>Ver código</button>
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://cadejovermu.netlify.app/'
              >
                <button className='button-proyecto blue'>Ver página</button>
              </a>
            </div>
          </div>
          <img src={cadejo} alt='proyecto' />
        </div>
        <div className='col-proyecto'>
          <div className='div-descripcion'>
            <h2>Front-end</h2>
            <h1>Gifs!</h1>
            <p>
              Primer proyecto en React, basado en la API que provee GIPHY.
              Consiste en un buscador de gifs y en una columna para ver los gifs
              más buscados. Se está trabajando en agregar una sección para
              guardar todos los gifs favoritos en un perfil de usuario.
            </p>
            <div className='div-buttons'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/Thiago-Mora-Maltz'
              >
                <button className='button-proyecto'>Ver código</button>
              </a>
              <a target='_blank' rel='noreferrer' href=''></a>
            </div>
          </div>
          <img src={gifs} alt='proyecto' />
        </div>
        <div className='col-proyecto'>
          <img src={noticias} alt='proyecto' />
          <div className='div-descripcion'>
            <h2>Front-end + Back-End</h2>
            <h1>Proyecto Noticias</h1>
            <p>
              Portal desarrollado en Angular + Nodejs + Express + MySQL para
              leer noticias/ensayos. Cuenta con una vista individual y de todas
              las noticias, asi como un sistema de registro e inicio de sesión
              que permite comentarlas. Se esta trabajando en un panel exclusivo
              para la administración de noticias (agregar, eliminar, editar).
            </p>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/Thiago-Mora-Maltz'
            >
              <button className='button-proyecto'>Ver código</button>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Proyectos
