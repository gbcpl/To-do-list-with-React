import { useState } from 'react';
import './App.css';


const App = () => {
  const arrItems = ["Faire les courses", "Faire la vaisselle", "Passer l'aspirateur"]

  return (
    <div className="App">
      <h2>Hello world!</h2>
      <input placeholder='Ajouter un item' type='text'></input>
      <button type="submit">Ajouter</button>
      <ul>
        {arrItems.map(e => {
          return <li>{e}<button>X</button></li>
        })}
      </ul>
    </div>
  );
}

export default App;
