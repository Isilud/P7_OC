import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Dropdown, Slideshow } from '../components'
import { Host } from '../components/Host'
import { Score } from '../components/Score'
import { Tag } from '../components/Tag'

import '../styles/FicheLogement.scss'

function FicheLogement () {
  const { logementId } = useParams()
  const navigate = useNavigate()

  const [logement, setLogement] = useState(null)

  useEffect(() => {
    fetch('../data_back/logements.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        const logement = data.find((el) => el.id === logementId)
        if (!logement) {
          navigate('unknown')
        }
        setLogement(logement)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    logement && (
      <div className="logement">
        <Slideshow pictures={logement.pictures}></Slideshow>
        <div className="logement_row">
          <div className="logement_left">
            <div>
              <p className="logement_title">{logement.title}</p>
              <p className="logement_location">{logement.location}</p>
            </div>
            <div className="logement_tags">
              {logement.tags.map((el, index) => (
                <Tag key={index} tagname={el} />
              ))}
            </div>
          </div>
          <div className="logement_right">
            <div className="logement_host">
              <Host host={logement.host} />
            </div>
            <div className="logement_note">
              <Score note={parseInt(logement.rating)} />
            </div>
          </div>
        </div>
        <div className="logement_row">
          <div className="logement_dropdown">
            <Dropdown title="Description">{logement.description}</Dropdown>
          </div>
          <div className="logement_dropdown">
            <Dropdown title="Equipement">
              <ul className="logement_dropdown_list">
                {logement.equipments.map((el, index) => (
                  <li key={index}>{el}</li>
                ))}
              </ul>
            </Dropdown>
          </div>
        </div>
      </div>
    )
  )
}

export { FicheLogement }
