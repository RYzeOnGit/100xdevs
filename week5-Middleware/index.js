const express = require('express');

const app = express();

app.get('/sum/:a/:b', function(req, res,){
    const a = req.params.firstArg;
    const b = req.params.secondArg;
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