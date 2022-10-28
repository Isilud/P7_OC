import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Banner.scss'

function Banner ({
  backgroundUrl,
  backgroundMobileUrl,
  large = false,
  children
}) {
  if (!backgroundMobileUrl) {
    backgroundMobileUrl = backgroundUrl
  }

  return (
    <div className={`banner ${large ? 'banner-large' : 'banner-small'}`}>
      <div
        className={'banner_image nodisplay'}
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      >
        <div className="banner_container">{children}</div>
      </div>
      <div
        className="banner_mImage"
        style={{
          backgroundImage: `url(${backgroundMobileUrl})`
        }}
      >
        <div className="banner_container">{children}</div>
      </div>
    </div>
  )
}

Banner.propTypes = {
  backgroundUrl: PropTypes.string.isRequired,
  backgroundMobileUrl: PropTypes.string,
  large: PropTypes.bool.isRequired,
  children: PropTypes.any
}

export { Banner }
