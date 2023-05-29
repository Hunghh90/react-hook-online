import { useState } from 'react';
import './App.css';
import Nav from './component/Nav';

const App = () => {
  const [name, setName] = useState('')
  const [todos, setTodos] = useState([])

  const handleEvenClick = (event) => {
    if (!name) {
      alert("Input empry");
      return;
    }
    setTodos([...todos, name])
    setName("")
  }
  const handleOnChange = (event) => {
    setName(event.target.value)
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <h1>Hello World!!!</h1>
        <input type="text" value={name} onChange={handleOnChange} />
        <button type="button" onClick={handleEvenClick}>Click me</button>
        {
          todos && todos.length > 0 &&
          todos.map((item, index) => {
            return (
              <div key={index}>{item}</div>
            )
          })

        }
      </header>
    </div>
  );
}

export default App;
