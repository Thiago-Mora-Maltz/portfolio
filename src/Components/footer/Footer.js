import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='container space-between'>
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
        <div className='media'>
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

export default Footer
