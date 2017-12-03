import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { dataRequest } from './actions'
import './index.css'
import AdCard from '../AdCard'

export class App extends Component {
  componentDidMount() {
    const { dataRequest } = this.props
    dataRequest()
  }

  render() {
    const { ads } = this.props
    const items = ads.map((ad, index) => <AdCard key={index} ad={ad} />)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">McMakler - frontend code test</h1>
        </header>
        <main>
          <ReactCSSTransitionGroup
            transitionName="AdCard"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {items}
          </ReactCSSTransitionGroup>
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => ({ ads: state.ads })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ dataRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
