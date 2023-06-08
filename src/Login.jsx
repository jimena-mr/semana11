import React, { useEffect } from 'react'
import './App.css';
import { useState } from 'react';
import { Stack, TextField,Button } from '@mui/material';

const Login = () => {
  //let username;
  const [username,setUsername]= useState("");
  const [password,setPassword]= useState("");

  useEffect( () => { //sirve para validacion 
    async function hacerConsultaHTTP(params){
        await fetch("www.google.com")
    }
  }

  )

  function usernameHandler(event){
    console.log(event.target.value)
    setUsername(event.target.value) 
  }
  function passwordHandler(event){
    setPassword(event.target.value)
  }
  return (   
    
    <div className='App'>
      <Stack spacing={4}>
      <h1>login</h1>
      <h3>usuario:{username}</h3>
      <h3>password:{password}</h3>
      <TextField type="text" placeholder="usuario" variant="outlined" onChange={usernameHandler}/>
      <TextField type="text" placeholder="password" variant="outlined" onChange={passwordHandler}/>
      <Button variant="contained">login</Button>
      </Stack>
    </div>
  );
}

export default Login;
