require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const package = require('./src/routes/packageHandle');
app.use(express.json());
app.use(package);

app.listen(PORT, () => {
    console.log(`server listen on ${PORT}`);
})