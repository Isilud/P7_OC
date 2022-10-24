import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Card.scss'

function Card ({ text = 'Titre de la location', backgroundUrl }) {
  return (
    <div className="card" style={ { backgroundImage: `url(${backgroundUrl})` } }>
      <div className="card_text">{text}</div>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  backgroundUrl: PropTypes.string
}

export { Card }
