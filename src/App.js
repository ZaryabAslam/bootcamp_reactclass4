import React, {useState} from 'react';
import './App.css';

export default function App() {
  let [isLight, setLight] = useState(false);
  let [Year, setYear] = useState(2019)
  return (
    <div className={`room ${isLight ? "lights" : "nolight"}`}>
     <h1> Lights are = {isLight ? "on" : "off"}</h1>
      <button onClick={() => setLight(!isLight)}> Toggle the lights</button>
      <br />
      <br />

      <h1>You want to go to year : {Year}</h1>
      <br />
      <button onClick={() => setYear(Year + 1)}>Increase year</button>


    </div>
  );
}

