var Brackets = require('express')();

var brackets = function (res, n) {
  var brackets = '';
  for (var i = 0; i < n; i++)
    brackets += '[]'[Math.floor(Math.random() * 2)];

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.send(brackets);
};

Brackets.get('/brackets', function (req, res) {
  brackets(res, 100);
});

Brackets.get('/brackets/:n', function (req, res) {
	brackets(res, parseInt(req.params.n));
});

Brackets.listen(process.env.PORT || 3000);