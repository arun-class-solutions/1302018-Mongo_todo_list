const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const url = "mongodb://localhost:27017/todo_db";

MongoClient.connect(url, (err, db) => {

  db.collection("todos").find({
    userId: ObjectId("5a7074db086de0bdacde1113")
  }).toArray((err, todos) => {
    console.log(todos);
    db.close();
  });

});
