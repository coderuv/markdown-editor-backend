const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { marked } = require('marked');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/markdown', (req, res) => {
    const { markdown } = req.body;
    const html = marked(markdown);
    res.send({ html });
});

app.listen(process.env.PORT||port, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
