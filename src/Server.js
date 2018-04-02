const express = require('express');

var app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

app.listen(PORT, function(){
    console.log("express server is up on port "+PORT);
});