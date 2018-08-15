const express = require('express'),
      app = express(),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      port = process.env.PORT || 3001,
      ctrl = require('./controller.js');

app.use(cors());
app.use(bodyParser.json());


app.get('/api/people', ctrl.getFavorites);
app.post('/api/people', ctrl.addChar);
app.delete('/api/people/:id', ctrl.deleteChar);
app.put('/api/people/:id', ctrl.updateName);


app.listen(port, ()=> console.log(`Listening on port ${port}`));