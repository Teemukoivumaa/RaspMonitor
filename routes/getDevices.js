var express = require('express'),
    router = express.Router();
    
var config = require('../config');
// --
var MongoClient = require('mongodb').MongoClient;
const uri = config.mongo.uri
// --

router
    .get('/', function (req, res) {
        MongoClient.connect(uri, function (err, db) {
            if (err) throw err;
            var dbo = db.db(config.mongo.db);

            dbo.collection(config.mongo.collection).find({}).toArray(function (err, result) {
                if (err) throw err;
                //console.log(result[0]['Device name']);
                res.send(result[0]['Device name']);
                db.close();
            });
        });
    })

module.exports = router;