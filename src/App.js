import React from 'react'
import "./app.css"
import NavBar from './Components/Navbar.js'
import Mainbody from './Components/Mainbody.js'

function App() {
  return (
  
    <div className = "pageContainer">
       <NavBar/>
       <Mainbody/>
    </div>
  );
}

export default App;
