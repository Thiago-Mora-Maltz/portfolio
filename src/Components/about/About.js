import React from 'react'
import './about.css'
import image from '../images/foto-recortada.jpg'
function About() {
  return (
    <div className='row row-about'>
      <div className='col col-photo'>
        <img src={image} alt='foto mia' />
      </div>
      <div className='col about'>
        <div>
          <h1>About Me</h1>
          <p>
            Hola! Soy Thiago, ex estudiante de filosofía (UBA) y actualmente
            programador full-stack junior certificado por la Universidad
            Tecnológica Nacional (UTN). Me encanta la música y la programación,
            por eso estoy buscando un ambiente que me permita profundizar mis
            conocimientos en el desarrollo de software. Me caracterizo por mi
            simpatía, mi curiosidad por aprender y por mi afán de resolver
            problemas de la mejor manera posible.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
