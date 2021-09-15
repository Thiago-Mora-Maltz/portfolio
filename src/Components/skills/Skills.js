import React from 'react'
import './skills.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faAngular,
//   faReact,
//   faHtml5,
//   faNodeJs,
//   faCss3Alt,
// } from '@fortawesome/free-brands-svg-icons'
import mongo from '../images/skills/mongodb.png'
import redux from '../images/skills/redux.png'
import auth0 from '../images/skills/auth0.png'
import firebase from '../images/skills/firebase.png'
import bootstrap from '../images/skills/bootstrap.png'
import mysql from '../images/skills/mysql.png'
import git from '../images/skills/git.png'
import react from '../images/skills/react.png'
import css from '../images/skills/css.png'
import html from '../images/skills/html.png'
import angular from '../images/skills/angular.png'
import nodejs from '../images/skills/nodejs.png'
function Skills() {
  return (
    <>
      <h1 className='skills'>Tecnologías</h1>
      <div className='row row-skills'>
        <div className='col col-skills'>
          <div className='card'>
            <img alt='html' src={html} />
          </div>
        </div>
        <div className='col col-skills'>
          <div className='card'>
            <img alt='css' src={css} />
          </div>
        </div>
        <div className='col col-skills'>
          <div className='card'>
            <img alt='nodejs' src={nodejs} />
          </div>
        </div>
        <div className='col col-skills'>
          <div className='card'>
            <img alt='angular' src={angular} />
          </div>
        </div>
        <div className='col col-skills'>
          <div className='card'>
            <img alt='react' src={react} />
          </div>
        </div>
        <div className='col col-skills'>
          <div className='card'>
            <img alt='redux' src={redux} />
          </div>
        </div>
        <div className='col col-skills'>
          <div className='card'>
            <img alt='git' src={git} />
          </div>
        </div>
        <div className='col col-skills'>
          <div className='card'>
            <img alt='mysql' src={mysql} />
          </div>
        </div>
        <div className='col col-skills'>
          <div className='card'>
            <img alt='mongo' src={mongo} />
          </div>
        </div>

        <div className='col col-skills'>
          <div className='card'>
            <img alt='firebase' src={firebase} />
          </div>
        </div>

        <div className='col col-skills'>
          <div className='card'>
            <img alt='auth0' src={auth0} />
          </div>
        </div>

        <div className='col col-skills'>
          <div className='card'>
            <img alt='bootstrap' src={bootstrap} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
