const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/todo_db";

MongoClient.connect(url, (err, db) => {
  // We are connected, and can use "db" to process queries

  db.collection("users").insert({
    firstName: "Arun",
    lastName: "Sood"
  }, (err, savedUser) => {
    // Show the newly-created user in the console
    console.log(savedUser);
    // Close the database connection to Mongo
    db.close();
  });

});
