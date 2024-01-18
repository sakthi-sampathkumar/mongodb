const express=require ('express');
const parser= require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 4002;

app.use(cors())
app.use(bodyParser.json())
mongoose.connect('mongodb://localhost:27017/taskone');
