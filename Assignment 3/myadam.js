const express = require('express')
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://jarvisultronrrr:LAwT0wC161oGoHlOvcSWci4I81ZC7C8rSo70MruCrgWhgzmwSiDSG6gHTlMuP6SeDoOGh1EZZsKIderTDUj9rg==@jarvisultronrrr.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@jarvisultronrrr@';


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

    app.get('/fumlu/:input', (req, res) => {
        var input = req.params.input
        db.collection('fumlu').find({"firstName" : input} ).toArray(function(err, doc) {
            assert.equal(err, null);
            if (err) throw err;
            res.send(doc);
        });
    })
    
    app.listen(port, () => {
        console.log('Server is up on port '+ port);
    })

});