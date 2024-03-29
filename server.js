// server.js

const express = require('express'); //framework
const bodyParser = require('body-parser'); //used for post method
const cors = require('cors'); //used for check port and to run without error
const mongoose = require('mongoose'); //db

const app = express(); //initialize
const port = 5001;

// Middleware
app.use(cors()); //initialize
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/exdb',);

// we can use then function for console
const db = mongoose.connection;
db.on('error', console.error.bind(console,'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

// Define a simple mongoose model
const Item = mongoose.model('Item', { name: String });
//databse folder name item , schema name:string

// Express route
app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
  
// Express route for handling POST requests
app.post('/item', async (req, res) => {

    try {
      // const newItem = new Item({  });
      console.log(req.body.name);
      const savedItem = await Item.create({
        name: req.body.name
      });
      res.json(savedItem);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
