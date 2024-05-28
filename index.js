const express = require("express");
const cors = require('cors');
const app = express();

const puerto = 3000;


const { getZapatillas } = require("./controllers/zapatillas.controllers");

//Con esto deshablito el cors
app.use(cors());

app.get("/", getZapatillas);


app.listen( puerto , ()=> {
    console.log(`Conectado en el puerto ${puerto}`);
} )