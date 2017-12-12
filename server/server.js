const path = require('path');
const express = require('express');
const app = express();


const distPath = path.join(__dirname, "..", "dist/");
const port = process.env.PORT || 3000;

app.use(express.static(distPath));

app.all('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
})

app.listen( port, (req, res) => {
    console.log('Server up at port ' + port)
})