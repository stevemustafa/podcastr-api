
// required modules

var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    models = require('./model');


//create DB connection
var mongoConnectionString = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/podcasts';
mongoose.connect(mongoConnectionString);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
/*db.once('open', function() {

  var podcastSchema = models.podcastSchema();
});*/





var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/*************************************************************************/
/* some serious work now */
/*************************************************************************/

//common middleware
var router = express.Router();

router.use(function(req, ers, next){
  console.log('Incoming request: ' + req.body);
  next();
});

//define base route
app.use('/api/v1/', router);

//sanity check route
router.get('/api/v1/', function(req, res) {
  res.json({message: 'Welcome to the Podcastr API v1.0'});
  //TODO: alter message to have API definition
});

//define routes
/*router.route('/podcast')
  .post
*/



/*
// "<url>/"
app.get('/v1/get/podcast:podcastName', function(req, res) {
  res.render('index',
  { title: 'Home' }
);
});*/


/*************************************************************************/
//get port from the environment
/*************************************************************************/
var port = process.env.PORT || 7331;

app.listen(port);
console.log('listening on port:' + port);
