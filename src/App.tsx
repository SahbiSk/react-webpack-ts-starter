import React from 'react'
import './styles.css'
import img from './react-logo.png'
import kiwi from './kiwi.svg'
import ClickCounter from './components/ClickCounter'

const App = () => {
  const aa = 'hrhj36erh'
  return (
    <div>
      <h1>Hola hola!! !zzs</h1>
      <h2>env {process.env.NODE_ENV} </h2>
      <h2>boom {process.env.REACT_APP_SUPER} </h2>
      <img src={img} alt="react-logo" />
      <img src={kiwi} alt="kiwi" />
      <ClickCounter />
    </div>
  )
}

export default App
