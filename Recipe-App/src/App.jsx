import { useState } from 'react'
import './App.css'
import Pages from "./pages/Pages"
import Nav from './components/Nav';
function App() {

  return (
    <>
      <div className="App">
        <Nav/>
        <Pages/>
      </div>
    </>
  )
}

export default App
