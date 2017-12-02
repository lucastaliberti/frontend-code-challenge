import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const TypeButton = ({ type }) => <div className="TypeButton">{type}</div>

TypeButton.propTypes = {
  type: PropTypes.string.isRequired
}

export default TypeButton
