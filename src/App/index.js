import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { dataRetrieved } from './actions'
import './index.css'
import AdCard from '../AdCard'
import Ads from './data'

class App extends Component {
  componentDidMount() {
    const { dataRetrieved } = this.props
    Ads().then(ads => dataRetrieved(ads))
  }

  render() {
    console.log(this.props)
    const { ads } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">McMakler - frontend code test</h1>
        </header>
        <main>{ads.map((ad, index) => <AdCard key={index} ad={ad} />)}</main>
      </div>
    )
  }
}

const mapStateToProps = state => ({ ads: state.ads })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ dataRetrieved }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
