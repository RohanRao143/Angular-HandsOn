var express = require('express');
var router = express.Router();

const Posts = require('../models/Posts');

/* GET home page. */
router.get('/posts', function(req, res, next) {
  //method to retrieve all created posts.
  Posts.find({},(err, posts)=>{
    if(err){
      res.send(500).json({err});
    }
    res.json({posts});
  })
});

router.post('/post', function(req, res, next) {
  //method to add a post along with its date.
  var post = new Posts({
    post: req.body.post
  });
  post.save((err, result)=>{
    if(err){
      res.send(500).json({error:err});
    }
    res.json({result: result});
  })
});

module.exports = router;
