
const { request , response } = require("express");

const { zapatillas } = require("../zapatillas");

const getZapatillas = ( req = request , res = response )=> {

    return res.json({
        ok:true,
        zapatillas
    });
}

module.exports = {
    getZapatillas
}