import React, { useState, useEffect } from 'react'
import { Banner, Card } from '../components'

import '../styles/Home.scss'

function Home () {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    fetch('../data_back/logements.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => setLogements(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="home">
      <Banner backgroundUrl={`${require('../assets/Banner.png')}`}>
        <div>Chez vous, partout et ailleurs</div>
      </Banner>
      {logements && (
        <article className="home_gallery">
          {logements.map((logement, index) => {
            return (
              <div className="home_gallery_container" key={logement.id}>
                <Card
                  text={logement.title}
                  backgroundUrl={logement.cover}
                  logementId={logement.id}
                />
              </div>
            )
          })}
        </article>
      )}
    </div>
  )
}

export { Home }
