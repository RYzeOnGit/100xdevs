const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json()); // without this req.body will be undefined

app.use(cors()); // for Cross-Origin Resource Sharing

app.post("/sum", function(req, res) {
    const a  = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    console.log(a+b);
    res.json({
        result: a + b
    });
})

app.listen(3000);