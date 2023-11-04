import React from 'react'

import { Main } from './Main'
import { Footer } from './Footer'
import { Header } from './Header'

const App = () => {
  return (
    <div className="main-container">
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default App