import { useState,useEffect } from 'react';
import './App.css';
import Templates from './components/Template';
import Meme from './components/Meme';


function App() {

   const [temp,setTemp]=useState([]);
   const[meme,setMeme]=useState(null);

   useEffect(()=>{
     fetch('https://api.imgflip.com/get_memes')
     .then((res) => res.json())
     .then((data) => {
       setTemp(data.data.memes);
     });
   },[]);

  return (
    <div className="App">
    <h1>Meme Generator</h1>

    {meme===null? <Templates temp={temp} setMeme={setMeme} />: <Meme meme={meme} setMeme={setMeme} />}
   
  

    </div>
  );
}

export default App;
