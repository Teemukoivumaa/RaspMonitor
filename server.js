const express = require('express'); 
const app = express();              
const port = 5000;

var getDevices = require('./routes/getDevices');
app.use('/api/getDevices', getDevices);

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

app.get('/api', (req, res) =>
    res.send
        (
        ` </br> </br>
        <h2>Welcome to the API</h2> </br>
        This API has these functions: </br>
        `
        )
);

app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});