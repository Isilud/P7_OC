import React, { useState } from 'react'
import { ReactComponent as ArrowLogo } from '../assets/VArrow.svg'

import PropTypes from 'prop-types'

import '../styles/Slideshow.scss'

function Slideshow ({ pictures }) {
  const [index, setIndex] = useState(0)

  const previous = () => {
    switch (index) {
      case 0:
        setIndex(pictures.length - 1)
        break
      default:
        setIndex(index - 1)
    }
  }
  const next = () => {
    switch (index) {
      case pictures.length - 1:
        setIndex(0)
        break
      default:
        setIndex(index + 1)
    }
  }

  return (
    <div
      className="slideshow"
      style={{ backgroundImage: `url(${pictures[index]})` }}
    >
      <div className="slideshow_button" onClick={previous}>
        <ArrowLogo className="slideshow_arrow" transform={'scale(-1,1)'} />
      </div>
      <div className="slideshow_display">
        <div className="slideshow_counter">
          {index + 1}/{pictures.length}
        </div>
      </div>
      <div className="slideshow_button" onClick={next}>
        <ArrowLogo className="slideshow_arrow" />
      </div>
    </div>
  )
}

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired
}

export { Slideshow }
