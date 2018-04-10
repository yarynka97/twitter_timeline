const express = require('express');
const app = require('./app');

const port = process.env.PORT || 8080;

const server = app.listen(port, function () {
    console.log(`Server is up and running on port ${port}`);
});  
