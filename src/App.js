import { useState } from 'react';
import './App.css';

const App = () => {
  const [items, setItems] = useState(["Faire les courses", "Faire la vaisselle", "Passer l'aspirateur"]);

  const [inputValue, setInputValue] = useState('');

  const handleAddButtonClick = () => {
    const newItem = inputValue;
  
    const newItems = [...items, newItem];
  
    setItems(newItems);
    setInputValue('');
  };
  
  return (
    <div className="App">
      <h2>To-do-list</h2>
      <input value={inputValue} placeholder='Ajouter un item' type='text' onChange={(event) => setInputValue(event.target.value)}></input>
      <button type="submit" onClick={handleAddButtonClick}>Ajouter</button>
      <ul>
        {items.map(e => <li>{e}<button>X</button></li>)}
      </ul>
    </div>
  );
}

export default App;
