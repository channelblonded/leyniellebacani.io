var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*GET about page, */
app.get('/about', (req, res) => {
  res.render('about');
});
/*GET projects page, */
app.get('/projects', (req, res) => {
  res.render('projects');
});
/*GET services page, */
app.get('/services', (req, res) => {
  res.render('services');
});
/*GET contact page, */
app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = router;
