var app = require('express')();
var Readable = require('stream').Readable;

var brackets = function (n) {

  var stream = Readable();

  stream._read = function() {
    var chunk = '';
    var count = 0;

    for (var i = 0; i < Math.min(n, 4096); i++) {
      var c = '[ ]'[Math.floor(3 * Math.random())];

      if (c != ' ')
        count++;

      chunk += c;
    }

    stream.push(chunk);
    n -= count;

    if (n == 0)
      stream.push(null);
  };

  return stream;
};

app.get('/brackets', function (req, res) {
  brackets(100).pipe(res);
});

app.get('/brackets/:n', function (req, res) {
  var count = Math.min(parseInt(req.params.n), 524288);
  brackets(count).pipe(res);
});

app.listen(process.env.PORT || 3000);