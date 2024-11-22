import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"; 

function App() {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
      setJoke(`${response.data.setup} - ${response.data.punchline}`);
    } catch (error) {
      console.log("Error Fetching the Joke", error);
      setJoke("Failed to fetch a joke, please try again!");
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">😂 Random Jokes Generator</h1>
      <div className="joke-box">
        <p className="joke">{joke}</p>
      </div>
      <button className="joke-button" onClick={fetchJoke}>
        Get Another Joke
      </button>
    </div>
  );
}

export default App;
