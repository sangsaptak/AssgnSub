const express = require('express')
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://jarvisultronkgf2now:Wpiao2Dcj13Fr293NwVbdFmlWvm4pQ7X4vK2FiKS67D4oEGrZKcIGk650Rc1xe55D4ScOIFqoSjuZCa3Ud62kw==@jarvisultronkgf2now.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@jarvisultronkgf2now@';


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    var db = client.db('fumludb');
    
    app.get('/', (req, res) => {
        db.collection('fumlu').find({"lastName" : "adheera"} ).toArray(function(err, doc) {
            assert.equal(err, null);
            if (err) throw err;
            res.send(doc);
        });
    })

    app.get('/fumlu', (req, res) => {
        db.collection('fumlu').find({} ).toArray(function(err, doc) {
            assert.equal(err, null);
            if (err) throw err;
            res.send(doc);
        });
    })

    app.get('/fumlu/:inputa/:inputb', (req, res) => {
        var inputa = req.params.inputa
        var inputb = req.params.inputb
        db.collection("fumlu").insertOne(
            {
              firstName: inputa,
              lastName: inputb,
            });
        res.send("Inserted Successfully");
    })

    app.get('/fumlus/:inputa/:inputb', (req, res) => {
        var inputa = req.params.inputa
        var inputb = req.params.inputb
        var query = {$or: [{firstName :{$regex : inputa}},{lastName :{$regex : inputb}}]}
        db.collection('fumlu').find(query).toArray(function(err, doc) {
            assert.equal(err, null);
            if (err) throw err;
            res.send(doc);
        });
    })
    
    app.listen(port, () => {
        console.log('Server is up on port '+ port);
    })

});