import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as ArrowLogo } from '../assets/Arrow.svg'

import '../styles/Dropdown.scss'

function Dropdown ({ title, children }) {
  const [isClose, setIsClose] = useState(true)

  const toogle = () => {
    setIsClose(!isClose)
  }

  return (
    <div className="dropdown">
      <div className="dropdown_label" onClick={() => toogle()}>
        {title}
        <ArrowLogo
          className="dropdown_arrow"
          transform={isClose ? 'scale(1,1)' : 'scale(1,-1)'}
        />
      </div>
      <div
        className={`dropdown_content dropdown_content${
          isClose ? '-closed' : '-open'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}

export { Dropdown }
