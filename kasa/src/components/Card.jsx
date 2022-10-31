import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Card.scss'
import { Link } from 'react-router-dom'

function Card ({ text = 'Titre de la location', backgroundUrl, logementId }) {
  return (
    <Link
      className="card"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
      to={`/FicheLogement/${logementId}`}
    >
      <div className="card_text">{text}</div>
    </Link>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  backgroundUrl: PropTypes.string,
  logementId: PropTypes.string.isRequired
}

export { Card }
