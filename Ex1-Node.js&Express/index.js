const express = require('express');
const { logWriter, returnLogs } = require('./logs.js');
const app = express();
app.use(express.json());
const { putHandler, postHandler, deleteHandler , idGetHandler} = require('./handler.js');
const userData = require('./data/users.json');
const port = process.env.PORT || 8080;


app.get('/', (req , res) => {
    res.send('Hello From Homepage');
    logWriter('Entering to defualt page');
})

app.get('/users', (req , res) => {
    if(Object.keys(req.query).length != 0){
        const country = req.query.country;
        const usersCountry = userData.filter((user) => user.country == country);
        res.send(usersCountry);
    }
    else {
        res.send(userData);
        logWriter('Asked for GET request for all users');
    }
})

app.get('/users/:id', (req, res) => {
    idGetHandler(req, res, userData);
})

app.delete('/users/:id' ,(req, res) => {
    deleteHandler(req, res ,userData);
})

app.post('/users', (req , res) => {
    postHandler(req,res,userData);
})


app.put('/users/:id', (req , res) => {
    putHandler(req,res, userData);
})

app.get('/logs', (req,res) => {
    res.send(returnLogs());
});
app.all('/*', (req,res) => res.status(404).send('The path is incorect'));

app.listen(port, () => console.log(`Server is up, enjoy the stay on port - ${port}`));