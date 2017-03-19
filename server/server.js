const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

//https://httpstatuses.com

app.post('/todos', (req, res) => {
  var newObjectID = new ObjectID();
  var todo = new Todo({
    _id: newObjectID,
    text: req.body.text
  });
  todo.save()
    .then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
  Todo.find()
    .then((todos) => {
      res.send({todos});
    }, (e) => {
      res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(404).send();
  });

});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then((result) => {
    if (result) {
      res.status(200).send(JSON.stringify(result, undefined, 2));
    } else {
      res.status(404).send(`document not found`);
    }
  }, (e) => {
    res.status(400).send('error in retrieval of record');
  });
});


app.listen(port, () => {
  console.log(`Started on port ${port}.`);
});

module.exports = { app };