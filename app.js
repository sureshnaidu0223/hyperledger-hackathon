var express = require('express');
var blockchain = require('./blockchain/blockchain');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// initialize blockchain
blockchain.init();

app.get('/', function (req, res) {
  res.send('Hello Hackathon!');
});




app.get('/query/ING', function (req, res) {
 blockchain.query('query','appr2',['a','ING'],function(e,o){
        if (!o) {
          console.log('user not found');
        } else {
            console.log('success= '+ o[0].PaymentId);
            var result = 'Details= '+o[0].PaymentId;
              res.send(JSON.stringify(o) );
        }
  });

});
app.get('/query/ALL', function (req, res) {
 blockchain.query('query','appr2',['a','ALL'],function(e,o){
        if (!o) {
          console.log('user not found');
        } else {
            console.log('success= '+ o[0].PaymentId);
            var result = 'Details= '+o[0].PaymentId;
              res.send(JSON.stringify(o) );
        }
  });

});
app.get('/query/ABN-AMRO', function (req, res) {
 blockchain.query('query','appr2',['a','ABN-AMRO'],function(e,o){
        if (!o) {
          console.log('user not found');
        } else {
            console.log('success= '+ o[0].PaymentId);
            var result = 'Details= '+o[0].PaymentId;
              res.send(JSON.stringify(o) );
        }
  });

});

app.get('/invoke', function (req, res) {
  var result = blockchain.invoke('invoke','emma1',['a','b','100'],function(e,o){
        if (!o) {
          console.log('user not found');
        } else {
            console.log('success= ' + o);
            res.send(o);
        }

  });

});

app.listen(3000, function () {
  console.log('Boilerplate app listening on port 3000');
});
