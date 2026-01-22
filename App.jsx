import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Opiskelijatiedot from '../Opiskelijatiedot'


function Tervehdys(props) {
  return <h1>Hei, {props.nimi}!</h1>;
}

function App() {
  const opiskelija = { nimi: "Matti Meikäläinen", ika: 16, kurssi: "Reactin perusteet"}
  return (
    <div>
      <Tervehdys nimi="Jasper" />
      <Opiskelijatiedot opiskelija={opiskelija} />
    </div>
  );
}



export default App
