// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, db) => {
    if (err) {
      return console.log(`Unable to connect to MongoDB server`);
    }
    console.log(`Connected to MongoDB server`);


    


    db.collection('Todos')
      .findOneAndUpdate(
        { _id: new ObjectID('58c90355c59f4b4a10b07400') },
        { $set: { completed: true } },
        { returnOriginal: false }
      )
      .then((results) => {
        console.log(results);
      });

    db.collection('Users')
      .findOneAndUpdate(
        { _id: new ObjectID('58c8dc5abb300116a0036507') },
        {
          $set: { name: 'S1n' },
          $inc: { age: 1 }
        },
        { returnOriginal: false }
      ).then((results) => {
        console.log(results);
      });


    //db.close();
  });
