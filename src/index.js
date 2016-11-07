import express from 'express'

const app = express();
app.get('/', function (req, res) {
  console.log(req.query);
  console.log(parseInt(req.query.a) + parseInt(req.query.b));
  const c = (parseInt(req.query.a) + parseInt(req.query.b));
  // res.json({
  //   a: req.query.a,
  //   b: req.query.b,
  //   c,
  // })
  res.send('a + b = ' + c)

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

