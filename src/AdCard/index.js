import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

import TypeButton from './components/TypeButton'
import AdContent from './components/AdContent'

const AdCard = ({ ad }) => {
  return (
    <div className="AdCard">
      <TypeButton type={ad.type} />
      <img alt="img" src={ad.image} />
      <AdContent
        description={ad.description}
        location={ad.location}
        price={ad.price}
        rooms={ad.rooms}
        measure={ad.measure}
      />
    </div>
  )
}

AdCard.propTypes = {
  ad: PropTypes.object.isRequired
}

export default AdCard
