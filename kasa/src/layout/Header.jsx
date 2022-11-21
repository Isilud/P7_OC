import React from 'react'
import { Logo, Navigation } from '../components'
import { useNavigate } from 'react-router-dom'

import '../styles/Header.scss'
import variables from '../styles/utils/colors.scss'

function Header () {
  const navigate = useNavigate()

  return (
    <div className="header">
      <div
        className="header_logo"
        onClick={() => {
          navigate('/')
        }}
      >
        <Logo color={variables.primary} />
      </div>
      <Navigation />
    </div>
  )
}

export { Header }
