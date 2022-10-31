/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import '../styles/NotFound.scss'

function NotFound () {
  return (
    <div className="notfound">
      <div>404</div>
      <div>Oups! La page que vous demandez n'existe pas.</div>
      <div>Retourner sur la page d’accueil</div>
    </div>
  )
}

export { NotFound }
