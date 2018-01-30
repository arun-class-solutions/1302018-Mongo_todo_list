const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const url = "mongodb://localhost:27017/todo_db";

MongoClient.connect(url, (err, db) => {

  db.collection("todos").insert({
    todoText: "Clean the house",
    userId: ObjectId("5a7074db086de0bdacde1113")
  }, (err, newTodo) => {
    console.log(newTodo);
    db.close();
  });

});
