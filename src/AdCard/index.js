import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

import TypeButton from './components/TypeButton'
import AdContent from './components/AdContent'

const AdCard = props => {
  console.log(props)
  return (
    <div className="AdCard">
      <TypeButton type="Mieten" />
      <img
        alt="img"
        src="http://www.schaefer-fleisbach.de/assets/rollladen2.jpg"
      />
      <AdContent
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        location="35764 Sinn / Fleisbach"
        price="1.000 €"
        rooms="3 Zimmer"
        measure="ab 35m&sup2;"
      />
    </div>
  )
}

AdCard.propTypes = {}

export default AdCard
