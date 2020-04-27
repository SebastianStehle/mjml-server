const express = require('express');
const mjml2html = require('mjml');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json())

app.post('/', (req, res) => {
    const params = req.body;

    const result = mjml2html(params.mjml || '');

    res.json(result);
});

app.listen(8080, () => {
    console.log(`Listening to 8080`);
});