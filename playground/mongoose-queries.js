const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '58ca656e8b00d006d49d5fe41';
//
// if (!ObjectID.isValid(id)){
//   console.log(`ID not valid`);
// }
//http://mongoosejs.com/docs/queries.html
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id)
//   .then((todo) => {
//     if (!todo) {
//       return console.log(`ID not found.`);
//     }
//     console.log(`Todo by Id: `, todo);
//   }).catch((e) => console.log(e));



User.findById('58ca0b4c258dde08dc9ce189')
  .then((user) => {
    if (!user) {
      return console.log(`User ID not found.`);
    }
    console.log(`User ID: `, user);
  }).catch((e) => console.log(e));
