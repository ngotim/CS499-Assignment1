var express = require('express')
var app = express()

app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  res.render('./index.html');
});

/*app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});*/
app.use(express.static('public'));
app.listen(process.env.PORT);