import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import Login from "./Login"
import Home from "./Home"

function App() {
  //let username;
  const [username,setUsername]= useState("");
  const [password,setPassword]= useState("");
  function usernameHandler(event){
    console.log(event.target.value)
    setUsername(event.target.value) 
  }
  function passwordHandler(event){
    setPassword(event.target.value)
  }
  return (   
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
