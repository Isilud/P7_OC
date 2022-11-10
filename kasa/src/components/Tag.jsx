import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Tag.scss'

function Tag ({ tagname }) {
  return <div className="tag">{tagname}</div>
}

Tag.propTypes = {
  tagname: PropTypes.string
}

export { Tag }
