import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Gif from "./Gif";

import "./styles.css";

// https://justpaste.it/zap001

function App() {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("pajaros");

  const API_URL =
    "https://api.giphy.com/v1/gifs/search?api_key=roQggbHZ1RYUvsRbiPT9vVF5I87dmaDg&q=" +
    search +
    "&limit=25&offset=0&rating=G&lang=en";

  async function getApi() {
    setLoading(true);
    const response = await fetch(API_URL);
    const json = await response.json();
    setGifs(json.data);
    setLoading(false);
  }

  if (loading) {
    return "Cargando gifs...";
  }

  return (
    <div className="App">
      <input value={search} onChange={event => setSearch(event.target.value)} />
      <button onClick={getApi}>Buscar</button>
      <div className="gifs-list">
        {!gifs.length && <span>No hay gifs</span>}
        {gifs.map(gif => {
          return <Gif data={gif} />;
        })}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
