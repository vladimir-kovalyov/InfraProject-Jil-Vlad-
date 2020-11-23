const express = require('express');
const router = express.Router();
const fs = require('fs');
const fetch = require('node-fetch');

router.get('/', function(res, next) {
  res.render('main', {layout: 'main'});
});

fetch('https://academy-project-blogs.s3-eu-west-1.amazonaws.com/milestones.txt')
    .then(res => {
      const dest = fs.createWriteStream('./public/milestones.txt');
      res.body.pipe(dest);
    });

fetch('https://academy-project-blogs.s3-eu-west-1.amazonaws.com/teaching_code.doc')
    .then(res => {
      const dest = fs.createWriteStream('./public/teaching.txt');
      res.body.pipe(dest);
    });

fetch('https://academy-project-blogs.s3-eu-west-1.amazonaws.com/IDC.md')
    .then(res => {
      const dest = fs.createWriteStream('./public/idc.txt');
      res.body.pipe(dest);
    });

module.exports = router;
