const express = require('express');

const router = express.Router();

//addblog
router.get('/addblog',(req, res) => {
    res.send('Response from addblog');
});
//getbyid
router.get('/getbyid',(req, res) => {
    res.send('Response from getbyid');
});
//getall
router.get('/getall',(req, res) => {
    res.send('Response from getall');
});

module.exports = router;