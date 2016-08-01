var problems = require('express').Router();

problems.get('/all', function(req, res) {
  res.send('all');
});

problems.get('/:problemId', function(req, res) {
  res.send('problemID');
});

module.exports = problems;
