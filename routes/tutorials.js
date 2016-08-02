var tutorials = require('express').Router();
var MongoClient = require('mongodb').MongoClient;

var user = process.env.MDB;
var pw = process.env.MDBPW;
var url = 'mongodb://' + user + ':' + pw + '@ds029745.mlab.com:29745/heroku_8xrhcd53';

tutorials.get('/:tutorialId', function(req, res) {
  var id = req.params.tutorialId;
  console.log(id);
  MongoClient.connect(url, function(err, db) {
    if (err) {
      db.close();
    } else {
      getById(id, db, function(result) {
        db.close();
        res.status(200).send(result);
      });
    }
  });
});

function getById(id, db, callback) {
  var collection = db.collection('tutorials');
  collection.find({name: id}).toArray(function(err, doc) {
    callback(doc);
  });
}

module.exports = tutorials;
