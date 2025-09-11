const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.json({ message: 'Hello from Node.js DevOps demo!' });
});


app.get('/health', (req, res) => res.status(200).send('OK'));


function start() {
    return app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}


module.exports = { app, start };