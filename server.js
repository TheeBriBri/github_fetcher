const express = require('express');
const app = express();
const port = 3005;
const router = express.Router
const fetch   = require('node-fetch');
const cors = require('cors')

app.use(cors())


app.get('/users', async (req, res) => {
    var apiUrl = 'https://api.github.com/users';
    await fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        console.log({data})
        res.send({ data });
    })
    .catch(err => {
        res.send(err);
    });
});

// const getRepo = () => {
//     let user = {username: this.state.owner.login}
//     let searchInfo = {username: params}

//     fetch('http://localhost:3005/users/:username/repo', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(user)
//     })
// }


app.listen(port, ()=>{
    console.log('listening here in Express')
})