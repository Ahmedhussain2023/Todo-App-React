import React from 'react'
import { TextField, Button, Box, CircularProgress } from '@mui/material'
import { useState, useRef } from "react";

const register = () => {

  //use state
   const [loading , setLoading] = useState(false);
  
  //form value
  const email = useRef()
  const password = useRef()
  
  //login
   const register = (event) => {
    event.preventDefault();
    console.log('register clicked');
    console.log(email.current.value);
    console.log(password.current.value);

  } 

  return (
    <Box sx={{height: '80vh'}} className='d-flex justify-content-center align-item-center'>
      <form onSubmit={register} className='d-flex justify-content-center flex-column w-25 gap-5'> 
      <TextField type="email" id="outlined-basic" label="Email" variant="outlined" inputRef={email} required />
      <TextField type="password" id="outlined-basic" label="Password" variant="outlined" inputRef={password} required/>
      <Button type='submit' variant="contained">{false ? <CircularProgress sx={{color: 'white'}}  size={20} /> : 'Register'}</Button>
      </form>
    </Box>
  )
}
export default register