const express = require('express');

const app = express();

let request_count = 0;

function requests(req, res, next){
    request_count++;
    req.name = "Ryan";
    console.log(req.name);
    console.log(request_count);
    next();
}
function sumhandler(req, res){
    const a = req.params.a;
    const b = req.params.b;
    res.json({
        result: parseInt(a) + parseInt(b)
    })
}
function multiplyhandler(req, res){
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        result: parseInt(a) * parseInt(b)
    })
}
app.get('/sum/:a/:b', requests, sumhandler);

app.get('/multiply', requests, multiplyhandler); 

app.listen(3000);