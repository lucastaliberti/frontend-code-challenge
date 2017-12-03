import React, { Component } from 'react'
import './index.css'
import AdCard from '../AdCard'
import Ads from './data'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ads: []
    }
  }

  componentDidMount() {
    Ads().then(ads => {
      this.setState({
        ads: ads
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">McMakler - frontend code test</h1>
        </header>
        <main>
          {this.state.ads.map((ad, index) => <AdCard key={index} ad={ad} />)}
        </main>
      </div>
    )
  }
}

export default App
