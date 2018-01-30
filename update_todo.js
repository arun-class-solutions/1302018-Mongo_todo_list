const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const url = "mongodb://localhost:27017/todo_db";

MongoClient.connect(url, (err, db) => {

  db.collection("todos").update({
    _id: ObjectId("5a707795567299bfb671d5a0")
  }, {
    $set: {
      todoText: "Updated todo"
    }
  }, (err, updatedTodo) => {
    db.close();
  });

});
