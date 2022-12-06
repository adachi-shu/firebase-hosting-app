import React from 'react'
import Header from './Header'

const App = ({ children }) => (
  <main>
    <Header />
    {children}
    <p>auto deploy</p>
  </main>
)

export default App
