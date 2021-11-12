import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { ListItem } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function GitList (props) {
  const [repoOpen, setRepoOpen] = React.useState(false);
  const [orgOpen, setOrgOpen] = React.useState(false);
  const [gistOpen, setGistOpen] = React.useState(false);
  const [repos, setRepos] = React.useState([])
  const [orgs, setOrgs] = React.useState([])
  const [gists, setGists] = React.useState([])

  const [forRendering, setForRendering] = React.useState('')



  const repoHandleClick = () => {
    setRepoOpen(!repoOpen);
  };
  const orgHandleClick = () => {
    setOrgOpen(!orgOpen);
  };
  const gistHandleClick = () => {
    setGistOpen(!gistOpen);
  };
  const repoAPI = 'https://api.github.com/users/'+ props.name + '/repos'
  const orgsAPI = 'https://api.github.com/users/'+ props.name + '/orgs'
  const gistsAPI = 'https://api.github.com/users/'+ props.name + '/gists'



  useEffect(() => {
    async function getRepoData() {
      await fetch(repoAPI)
         .then((res) => res.json())
         .then((data) => {
           setRepos(data)
          console.log(data)
          console.log(repos)
          });
   }
   getRepoData();
  },[])

   useEffect(()=>{
     async function getOrgData() {
      await fetch(orgsAPI)
         .then((res) => res.json())
         .then((data) => {
           setOrgs(data)
          console.log(data)
          console.log(orgs)
          });
   }
   getOrgData();

   }, [])

   useEffect(()=>{
     async function getGistData() {
      await fetch(gistsAPI)
         .then((res) => res.json())
         .then((data) => {
           setGists(data)
          console.log(data)
          console.log(gists)
          });
    }
    getGistData();


   }, [])

  

const useRepoData = repos.map((single)=>{
  return <ListItemText key={single.id} name={single.name}>{single.name}</ListItemText>
})
const useGistData = gists.map((single)=>{
  // let keys = Object.keys(single.files)
  return <ListItemText key={single.id} name={single.owner.login}>need to work on</ListItemText>
})
const useOrgData = orgs.map((single)=>{
  return <ListItemText key={single.id} name={single.login}>{single.login}</ListItemText>
})

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {props.name} User Details
        </ListSubheader>
      }
    >
      
      <ListItemButton onClick={repoHandleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Repos" />
        {repoOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={repoOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {useRepoData}
        </List>
      </Collapse>

      <ListItemButton onClick={orgHandleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Organizations" />
        {orgOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={orgOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {useOrgData}
        </List>
      </Collapse>

      <ListItemButton onClick={gistHandleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Gists" />
        {gistOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={gistOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {useGistData}
        </List>
      </Collapse>
    </List>
  );
}

