var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET additional_routes page. */
router.get('/additional_routes', function(req, res, next) {
  res.render('additional_routes');
});

/* GET collect_data page. */
router.get('/collect_data', function(req, res, next) {
  res.render('collect_data');
});


/* POST route for collect_data */
router.post('/collect_data', function(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var subject = req.body.subject;
  var telephone = req.body.telephone;
  var msg = req.body.msg;

  console.log('Name: ' + name + ' \n' + 'email: ' + email + ' \n' + 'Subject: ' + subject + ' \n' + 'Tel: ' + telephone + ' \n' + 'Message: ' + msg);
  res.redirect('/collect_data');
});
/***************************************/

/* GET request_response page. */
router.get('/request_response', function(req, res, next) {
  res.render('request_response');
});

/* GET update_delete page. */
router.get('/update_delete', function(req, res, next) {
  res.render('update_delete');
});

/* GET about_me page. */
router.get('/about_me', function(req, res, next) {
  res.render('about_me');
});


module.exports = router;
