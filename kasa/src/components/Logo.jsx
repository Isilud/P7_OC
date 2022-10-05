import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as SVGLogo } from '../assets/LOGO.svg'

import '../styles/Logo.scss'

function Logo (props) {
  const { color } = props

  return (
    <>
      <div className="logo">
        <SVGLogo fill={color} />
      </div>
    </>
  )
}

Logo.propTypes = {
  color: PropTypes.string.isRequired
}

export { Logo }
