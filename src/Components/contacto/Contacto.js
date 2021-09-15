import React, { Fragment } from 'react'
import './contacto.css'
import { useState } from 'react'
import axios from 'axios'

function Contacto() {
  const baseUrl = 'http://localhost:3000/'
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    celular: '',
    mensaje: '',
  })

  const handleChange = (event) => {
    const name = event.target.name
    setForm({ ...form, [name]: event.target.value })
  }

  const enviarMail = async (event) => {
    event.preventDefault()
    console.log(form)
    await axios
      .post(baseUrl, {
        nombre: form.nombre,
        email: form.email,
        celular: form.celular,
        mensaje: form.mensaje,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <Fragment>
      <div className='contacto'>
        <h1>Contactame!</h1>
        <form onSubmit={(event) => enviarMail(event)}>
          <div className='formItem'>
            <label htmlFor='nombre'>Nombre</label>
            <input
              type='text'
              name='nombre'
              id='nombre'
              value={form.nombre}
              onChange={handleChange}
            />
          </div>
          <div className='formItem'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className='formItem'>
            <label htmlFor='celular'>Celular</label>
            <input
              type='text'
              name='celular'
              id='celular'
              value={form.celular}
              onChange={handleChange}
            />
          </div>
          <div className='formItem'>
            <label htmlFor='mensaje'>Mensaje</label>
            <textarea
              name='mensaje'
              id='mensaje'
              value={form.mensaje}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>Enviar</button>
        </form>
      </div>
    </Fragment>
  )
}

export default Contacto
