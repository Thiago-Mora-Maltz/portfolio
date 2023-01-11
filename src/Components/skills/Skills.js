import React from 'react'
import './skills.css'
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
            <p>HTML</p>
          </div>
        </div>
        <div className='col col-skills'>
          <div className='card'>
            <img alt='css' src={css} />
            <p>CSS</p>
          </div>
        </div>
        <div className='col col-skills'>
          <div className='card'>
            <img className='icon' alt='nodejs' src={nodejs} />
            <p>NodeJs</p>
          </div>
        </div>
        <div className='col col-skills'>
          <div className='card'>
            <img alt='angular' src={angular} />
            <p>Angular</p>
          </div>
        </div>
        <div className='col col-skills'>
          <div className='card'>
            <img alt='react' src={react} />
            <p>ReactJs</p>
          </div>
        </div>
        <div className='col col-skills'>
          <div className='card'>
            <img alt='redux' src={redux} />
            <p>Redux</p>
          </div>
        </div>
        <div className='col col-skills'>
          <div className='card'>
            <img alt='git' src={git} />
            <p>Git</p>
          </div>
        </div>
        <div className='col col-skills'>
          <div className='card'>
            <img alt='mysql' src={mysql} />
            <p>MySQL</p>
          </div>
        </div>
        <div className='col col-skills'>
          <div className='card'>
            <img alt='mongo' src={mongo} />
            <p>MongoDB</p>
          </div>
        </div>
        <div className='col col-skills'>
          <div className='card'>
            <img alt='firebase' src={firebase} />
            <p>Firebase</p>
          </div>
        </div>

        <div className='col col-skills'>
          <div className='card'>
            <img alt='auth0' src={auth0} />
            <p>Auth0</p>
          </div>
        </div>

        <div className='col col-skills'>
          <div className='card'>
            <img alt='bootstrap' src={bootstrap} />
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
