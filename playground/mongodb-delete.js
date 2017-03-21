// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, db) => {
    if (err) {
      return console.log(`Unable to connect to MongoDB server`);
      
    }
    console.log(`Connected to MongoDB server`);

    //deleteMany
    // db.collection('Todos')
    //   .deleteMany({text: 'Eat Dinner'})
    //   .then((result) => {
    //     console.log(result);
    //   });

    //deleteOne, just delete the first result and ignore others
    // db.collection('Todos')
    //   .deleteOne({text: 'Eat Lunch'})
    //   .then((result) => {
    //     console.log(result);
    //   });

    //findOneAndDelete, get the document back and delete it
    // db.collection('Todos')
    //   .findOneAndDelete({completed: true})
    //   .then((result) => {
    //     console.log(result);
    //   });

    db.collection('Users')
      .deleteMany({name: 'xxx'})
      .then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
      });

    db.collection('Users')
      .findOneAndDelete({_id: new ObjectID('58c8dd519c17e416dcbc2f06')})
      .then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
      });

    //db.close();
  });
