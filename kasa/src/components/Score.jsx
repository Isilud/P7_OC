import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as SVGStar } from '../assets/Star.svg'

import variables from '../styles/utils/colors.scss'
import '../styles/Score.scss'

function Score ({ note = 0 }) {
  const stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(i < note)
  }

  return (
    <div className="score">
      {stars.map((el, index) => {
        return (
          <SVGStar
            key={index}
            fill={el ? variables.primary : variables.color_lightgray}
          />
        )
      })}
    </div>
  )
}

Score.propTypes = {
  note: PropTypes.number
}

export { Score }
