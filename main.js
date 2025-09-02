require('moment-timezone');

var express = require('express');
var app = express();

var mongoose = require("mongoose");
const qzdb = require('./module/schema/qz_timetable');
mongoose.Promise = global.Promise;

const DB_SETTINGS = require('./db_settings.json').url;

mongoose.connect(DB_SETTINGS, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("Success] Connected to MongoDB");
  })
  .catch((err) => {
    console.log(`Error] Failed while connecting to MongoDB (${err})`);
  });

app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

// Quickzoom2
var quickzoom2 = require('./routes/quickzoom2'); 
app.use('/', quickzoom2);

// 404
app.get('/404', function(req,res){
  res.status(404).render('404.html');
})
app.use(function(req, res, next){
  res.redirect('/404');
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Success] Server opened on port: ${PORT}`)
})