import React from 'react'
import Router from '../router/Router'
import { BrowserRouter } from 'react-router-dom'
import { Header, Footer } from './'

import '../styles/App.scss'

function App () {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="page_container">
          <Router />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
