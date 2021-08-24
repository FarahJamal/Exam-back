'use strict '

const express = require('express');

const cors = require('cors');

const axios = require('axios');

require('dotenv').config();

const server = express();

server.use(cors());

server.use(express.json());

async function getData(req, res) {
    axios
    .get(`https://flowers-api-13.herokuapp.com/getFlowers`)
    .then(results=>{
        console.log(results.data.flowerslist)
        res.send(Data(results.data.flowerslist))
    })
    .catch(err=>{
        console.log(err)
    })
    const Data=(dataObj)=>{
        const dataArr=[];
        dataObj.map((e)=>{
            const name=e.name;
            const instructions=e.instructions;
            const photo=e.photo;
            dataArr.push(new FlowersData(name,instructions,photo))
        })
        return dataArr
    }
class FlowersData{
    constructor(name,instructions,photo){
        this.name=name,
        this.instructions=instructions,
        this.photo=photo
        
    }
}
    
    
}

module.exports =getData



