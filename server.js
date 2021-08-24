'use strict'

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const server = express();
server.use(cors());
server.use(express.json());
const PORT=3001;


const APIData= require('./Modules/GetFromAPI');
const DBSchema=require('./Modules/DataBaseSchema');
const getFav=require('./Modules/getFav');
const DeleteFav=require('./Modules/DeleteFav');
const updateFav=require('./Modules/updateFav');
const addFav=require('./Modules/AddToFav');


server.get('/getAll',APIData); 
server.get('/getFav',getFav);
server.post('/addFav',addFav);
server.delete('/deleteFav/:index',DeleteFav);
server.put('update/:index',updateFav);


server.listen(PORT,()=>console.log(`listen on port ${PORT}`));

