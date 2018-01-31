const express = require('express');
//comment out the below for local
const path = require('path');
//comment out the below for local
const router = new express.Router();
//for local use this instead of the above new express.Router..
//const router = require("express").Router();

let apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes);

//for local comment out from here to 
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
//here (see above comment)

module.exports = router;
