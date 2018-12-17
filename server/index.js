const express = require('express'),
      app = express(),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      port = process.env.PORT || 3001,
      ctrl = require('./controller.js');
const { getCharacters, getFavorites, addChar, deleteChar, updateName, getSingle } = require('./controller')

app.use(cors());
app.use(bodyParser.json());


app.get('/api/chars/:id', getSingle);
app.get('/api/chars', getCharacters);
app.get('/api/people', getFavorites);
app.post('/api/people', addChar);
app.delete('/api/people/:id', deleteChar);
app.put('/api/people/:id', updateName);


app.listen(port, ()=> console.log(`Listening on port ${port}`));