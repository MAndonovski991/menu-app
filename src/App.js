import './App.css';
import Home from './components/Home/Home';

import React,{useEffect} from 'react'

function App() {

  useEffect(() => {
    const meta = document.createElement("meta")

    meta.setAttribute("http-equiv", "Content-Security-Policy")
    meta.setAttribute("content", "upgrade-insecure-requests")

    document.head.appendChild(meta)
  }, [])

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
