import React from 'react'
import '../styles/Header.scss'
import variables from '../styles/utils/colors.scss'

import { Logo, Navigation } from './'

function Header () {
  return (
    <div className="header">
      <Logo color={variables.primary}/>
      <Navigation />
    </div>
  )
}

export { Header }
