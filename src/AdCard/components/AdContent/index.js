import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const AdContent = ({ description, location, price, rooms, measure }) => (
  <div className="AdContent">
    <div className="description">{description}</div>
    <div className="location">{location}</div>
    <div className="info">
      <div className="price">{price}</div>
      <div className="rooms">{rooms}</div>
      <div className="measure">{measure}</div>
    </div>
  </div>
)

AdContent.propTypes = {}

export default AdContent
