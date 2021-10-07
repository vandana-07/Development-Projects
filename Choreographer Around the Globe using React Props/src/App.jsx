import React from "react";
// import ReactDOM from "react-dom";
import "./App.css";
import Card from "./components/Card"
import Form from './components/Form.jsx'

function App()
{
    return(

        <div className="App">
   <h1 className="heading">
           Choreographers Around the Globe
        </h1>
      <div className="container" >
        
        <Card />
        </div>
        </div>
       
    );
}

export default App;