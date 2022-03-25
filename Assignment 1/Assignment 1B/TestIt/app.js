const express = require("express");
const bodyParser = require("body-parser")

// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
	extended:true
}));

app.get("/", function(req, res) {
res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    var inpu = req.body.statu;
    var nenp = inpu.replace('?', '.');
    var arr1 = nenp.split(".");
    var fng = "<H3>Question Paper</H3><br>"+inpu+"<br>";
    var txt = "";
    arr1.forEach(myFunction);
    function myFunction(value, index, array) {
        txt += value + ", "; 
    }
    fng = fng+"<H3>Sentence Segmentation</H3><br>"+txt+"<br>"+"<H3>Word Segmentation</H3><br>";

    var nenp = inpu.replace('?', '');
    var nenp = nenp.replace('.', '');
    var arr1 = nenp.split(" ");
    var txt = "";
    arr1.forEach(myFunction);
    function myFunction(value, index, array) {
        txt += value + ", "; 
    }

    fng = fng + txt + "<br><H3>Stop Word Removal</H3><br>";

    jkl = require('stopwords').english;

    arr1 = arr1.filter( ( el ) => !jkl.includes( el ) );

    var txt = "";
    arr1.forEach(myFunction);
    function myFunction(value, index, array) {
        txt += value + ", "; 
    }

    fng = fng + txt + "<br><H3>Repeated Removed</H3><br>";
    
    var arr1 = nenp.split(" ");
    var setu = [...new Set(arr1)];
    var txt = "";

    setu.forEach(myFunction);
    function myFunction(value, index, array) {
        txt += value + " "; 
    }

    fng = fng + txt + "<br><H3>Each Word Reversed</H3><br>";

    var txt = "";

    function reverseString(str) {
        let newString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }

    var arr1 = nenp.split(" ");
    var txt = nenp.split("").reverse().join("").split(" ").reverse().join(" ");
    
    fng = fng + txt + "<br><H3>Numbers Extracted From String</H3><br>";

    var arr1 = nenp.match(/\d+/g);

    var txt = "";
    arr1.forEach(myFunction);
    function myFunction(value, index, array) {
        txt += value + ", "; 
    }

    fng = fng + txt;

    res.send(fng);
});

app.listen(8080, function(){
console.log("server is running on port 3000");
})
