var examples = require('express').Router();
var MongoClient = require('mongodb').MongoClient;

var user = process.env.MDB;
var pw = process.env.MDBPW;
var url = 'mongodb://' + user + ':' + pw + '@ds029745.mlab.com:29745/heroku_8xrhcd53';
examples.get('/all', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) {
      db.close();
    } else {
      getAll(db, function(results) {
        db.close();
        res.status(200).send(results);
      });
    }
  });
});

examples.get('/:exampleId', function(req, res) {
  var id = req.params.exampleId;
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

function getAll(db, callback) {
  var collection = db.collection('examples');
  collection.find({}).toArray(function(err, docs) {
    callback(docs);
  });
}

function getById(id, db, callback) {
  var collection = db.collection('examples');
  collection.find({name: id}).toArray(function(err, doc) {
    callback(doc);
  });
}

module.exports = examples;
