var Brackets = require('express')();

var brackets = function (n) {
  var brackets = '';
  for (var i = 0; i < n; i++)
    brackets += '[]'[Math.floor(Math.random() * 2)];
  return brackets;
};

Brackets.get('/brackets', function (req, res) {
  res.send(brackets(100));
});

Brackets.get('/brackets/:n', function (req, res) {
  res.send(brackets(parseInt(req.params.n)));
});

Brackets.listen(process.env.PORT || 3000);