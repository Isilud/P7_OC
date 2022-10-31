/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NotFound.scss'

function NotFound () {
  return (
    <div className="notfound">
      <div className="notfound_code">404</div>
      <div className="notfound_text">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <Link className="notfound_link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}

export { NotFound }
