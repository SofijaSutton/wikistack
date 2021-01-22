const express = require('express');
const morgan = require('morgan');
const app = express();

//coonect morgan 
app.use(morgan('dev'));

//static middleware 
app.use(express.static(__dirname + '/public'));

//body parsing 
app.use(express.json()); // converts JSON data
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
   res.send("hello world");
})
//come back to this code 

const port= 3000;

app.listen(port, () => {
    console.log("helloworld2");
});

// const Sequelize = require('sequelize');
// const db = new Sequelize()

