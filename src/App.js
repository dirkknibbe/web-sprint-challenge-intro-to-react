import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
// import Character from './components/Character';




const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterList, setCharacterList] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect(() => { 
    const fetchCharacters = () => {
      axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        console.log(res.data)
        setCharacterList(res.data)
      })
      .catch(err => {
        console.log('OH NOO, OUR GET RESPONSE, IT"S BROKEN')
      })
    }
     fetchCharacters();
      }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characterList.map((char, id) => {
        return <h1> {`${char.name}`}_________Birth Year: {`${char.birth_year}`}</h1>
      })}
      
    </div>
  );
}

export default App;
