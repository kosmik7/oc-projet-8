import React from 'react'
import { useParams } from 'react-router-dom'
import { Slideshow } from '../../components'
import data from '../../assets/logements.json'

export default function Logement() {
    const { id } = useParams()
    const logement = data.find((item) => item.id === id)

    return (
        <div>
            <Slideshow pictures={logement.pictures} />
        </div>
    )
}
