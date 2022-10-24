import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Banner.scss'

function Banner ({ backgroundUrl, children }) {
  return (
    <div className="banner">
      <div
        className="banner_image"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      >
        <div className="banner_container">{children}</div>
      </div>
    </div>
  )
}

Banner.propTypes = {
  children: PropTypes.any,
  backgroundUrl: PropTypes.string.isRequired
}

export { Banner }
