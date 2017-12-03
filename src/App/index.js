import React, { Component } from 'react'
import './index.css'
import AdCard from '../AdCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">McMakler - frontend code test</h1>
        </header>
        <main>
          <AdCard />
          <AdCard />
          <AdCard />
          <AdCard />
          <AdCard />
          <AdCard />
          <AdCard />
          <AdCard />
          <AdCard />
          <AdCard />
        </main>
      </div>
    )
  }
}

export default App
