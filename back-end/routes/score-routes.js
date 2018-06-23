var express = require('express');
var router = express.Router();

router.get('/api/getScoreList', function(req,res){
    Score.getScore(function(err, Score){
        if (err){
            throw err;
        }
        res.json(Score);
    });
});

router.post('/api/addScore', function(req,res){
    var score = req.body;
    Score.addScore(score, function(err, score){
        if (err){
            throw err;
        }
        res.json(score);
    });
});

router.put('/api/updatescore/:id', function(req,res){
    var id = req.params._id
    var score = req.body;
    Score.updateScore(id, score, {}, function(err, score){
        if (err){
            throw err;
        }
        res.json(score);
    });
});

router.delete('/api/deleteScore/:id', function (req, res) {
    var id=req.params._id;
    Score.deleteScore(id,function (err,score) {
        if(err){
            throw err;
        }
        res.json(score);
    });
});

module.exports = router;

