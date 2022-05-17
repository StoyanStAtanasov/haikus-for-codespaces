let express = require('express');
let app = express();
const haikus = require('./haikus.json');
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log('GET /')
  res.render('index', {haikus: haikus});
});

app.listen(port);