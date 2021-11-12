import React from 'react';
import { ImageListItem, ImageListItemBar} from '@mui/material';

import { useState } from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import { Routes } from 'react-router-dom'
import { GitList } from '../GitList/GitList';
import axios from 'axios';


export function GitUser (props) {
  const [username, setUsername] = useState(props.name)
//  const [repos, setRepos] = useState([])
 
//  function handleClick (event){
//    event.preventDefault();
//    console.log(event)
//    searchRepos(username);
//  }

//  function searchRepos(){
//    axios({
//      method: 'get',
//      url: 'https://api.github.com/users/'+ username + '/repos',
//    }).then(res=>{
//      setRepos(res.data)
//      console.log(repos)
//    })
//  }

//  const useData = repos.map((single)=>{
//   return <GitUser key={single.id} image={single.avatar_url} name={single.login}/>
// })


    return (
      <Router>
        <Link to='/details' >
          <ImageListItem pkey={props.key} >
            <img
              src={`${props.image}?w=248&fit=crop&auto=format`}
              srcSet={`${props.image}?w=248&fit=crop&auto=format&dpr=2 3x`}
              alt={props.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={props.name}
              subtitle=' subtitle'
            />
          </ImageListItem>
        </Link>
        <Routes>
          <Route path="/details" element={<GitList name={props.name}/>}>
          </Route>
        </Routes>
      </Router>

    )
}
