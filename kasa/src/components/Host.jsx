import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Host.scss'

function Host ({ host }) {
  const { name, picture } = host

  return (
    <div className="host">
      <div className="host_name">{name}</div>
      <img
        className="host_image"
        src={picture ?? ''}
        alt={`Photo de profil ${name}`}
      />
    </div>
  )
}

Host.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string
  })
}

export { Host }
