import React from 'react'
import './infoContacto.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function InfoContacto() {
  return (
    <div className='row row-info infoContacto'>
      <h1 style={{ marginBottom: '10px' }}>Contacto</h1>
      <p>
        Si querés comunicarte conmigo o te quedó alguna duda, acá te dejo mis
        redes para que me contactes!
      </p>
      <div className='info-contacto'>
        <div className='info'>
          <p>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ marginRight: '10px' }}
            />
            thiagovaldemarm@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
            (+54 11) 41578988
          </p>
        </div>
        <div className='info-icons'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/thiago-mora-maltz-9b9517212/'
          >
            <FontAwesomeIcon className='linkedin' icon={faLinkedinIn} />
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/Thiago-Mora-Maltz'
          >
            <FontAwesomeIcon className='gitHub' icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default InfoContacto
