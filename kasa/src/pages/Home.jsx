import React, { useState, useEffect } from 'react'
import { Banner, Card } from '../components'

import '../styles/Home.scss'

// Should be deleted when API available
import logementList from '../data_back/logements.json'

function Home () {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    // Should be replaced with a fetch when API available.
    // fetch('../../public/data_back/logements.json', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json'
    //   }
    // })
    //   .then((res) => {
    //     console.log(res)
    //     res.json()
    //   })
    //   .then((data) => setLogements(data))
    //   .catch((err) => console.log(err))
    setLogements(logementList)
  }, [])

  return (
    <div className="home">
      <Banner backgroundUrl={`${require('../assets/Banner.png')}`}>
        <div>Chez vous, partout et ailleurs</div>
      </Banner>
      <article className="home_gallery">
        {logements.map((logement, index) => {
          return (
            <div className="home_gallery_container" key={logement.id}>
              <Card text={logement.title} backgroundUrl={logement.cover} />
            </div>
          )
        })}
      </article>
    </div>
  )
}

export { Home }
