import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Infolista = ({ taulukko }) => {
  return (
    <ul>
      {taulukko.map((asia, index) => (
        <li key={index}>{asia}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const tiedot = ["React", "JavaScript", "CSS"];

  return (
    <div>
      <h1>Infolista</h1>
      <Infolista taulukko={tiedot} />
    </div>
  );
};

export default App;
