import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import {GitUser} from './components/GitUser/GitUser'
import {Box, Container} from '@material-ui/core';
import { ImageList, TextField} from '@mui/material';



function App  () {
  const [userInput, setUserInput] = useState('')
  const [githubUser, setGithubUser] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);

  
  const searchUser = (input)=>{
    setUserInput(input)
    if(userInput !== '') {
      const filtered = githubUser.filter((item)=>{
        return Object.values(item).join('').toLowerCase().includes(userInput.toLowerCase())
      })
      setFilteredResults(filtered)
    } else {
      setFilteredResults(githubUser)
    }
  }

  const getData = async () =>{
    fetch('http://localhost:3005/users').then(res => res.json()).then(data => setGithubUser(data.data))
  }
  useEffect(()=>{
    getData();
    // return ()=>{}
  }, [])

  
  const useData = filteredResults.map((single)=>{
    return <GitUser key={single.id} image={single.avatar_url} name={single.login}/>
  })



  return (
    // <React.Fragment>
    //   <CssBaseline />
      <Container maxWidth="md" display='flex'>
        <Box display='flex' flexDirection='column' sx={{ bgcolor: '#8D5FD2', height: '100vh', maxWidth: '100%' }} >
          <TextField fullWidth value={userInput} onChange={(event)=>{
            searchUser(event.target.value)
          }}>
          </TextField>
          <ImageList width='auto'  cols={3} rowHeight={164}>{useData}</ImageList>
        </Box>
      </Container>
    // </React.Fragment>
    
    )}
    
    export default App;
    
 
