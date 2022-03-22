const { response } = require('express');
const express = require('express'); 
const path = require('path')
const app = express();

app.use(express.static('./public'));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname,('./public/index.html')));
})

const port = 3000;
app.listen(port);

