const express = require('express');

const app = express();

app.get('/sum', function(req, res,){
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        result: parseInt(a) + parseInt(b)
    })
})

app.get('/multiply', function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        result: parseInt(a) * parseInt(b)
    })
})
app.listen(3000);