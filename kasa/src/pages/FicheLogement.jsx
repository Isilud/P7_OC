import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/FicheLogement.scss'

// Should be deleted when API available
import logementList from '../data_back/logements.json'
import { Slideshow } from '../components'

function FicheLogement () {
  const { logementId } = useParams()
  const [logement, setLogement] = useState(null)

  useEffect(() => {
    // Should be replaced with a fetch when API available.
    setLogement(logementList.find((el) => el.id === logementId))
    console.log(logement)
  }, [])

  return (
    logement && (
      <>
        <Slideshow pictures={logement.pictures}></Slideshow>
      </>
    )
  )
}

export { FicheLogement }
