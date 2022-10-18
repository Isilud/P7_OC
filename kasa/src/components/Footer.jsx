import React from 'react'

import '../styles/Footer.scss'
import variables from '../styles/utils/colors.scss'

import { Logo } from './Logo'

function Footer () {
  return (
    <div className="footer">
      <div className="footer_logo">
      <Logo color={variables.color_white} />
      </div>
      <div className="footer_text">
        © 2020 Kasa. All rights reserved
      </div>
    </div>
  )
}

export { Footer }
