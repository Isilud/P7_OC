import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Navigation.scss'

function Navigation () {
  return (
    <nav className="navigation">
        <Link className='navigation_link' to="/">Accueil</Link>
        <Link className='navigation_link' to="/APropos">A Propos</Link>
    </nav>
  )
}

export { Navigation }
