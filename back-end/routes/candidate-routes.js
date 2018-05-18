var express = require('express');
var router = express.Router();

router.get('/api/getCandidateList', function(req,res){
    User.getUsers(function(err, User){
        if (err){
            throw err;
        }
        res.json(User);
    });
});

router.post('/api/addCandidate', function(req,res){
    var user = req.body;
    User.addUser(user, function(err, user){
        if (err){
            throw err;
        }
        res.json(user);
    });
});

router.put('/api/updateCandidate/:id', function(req,res){
    var id = req.params._id
    var user = req.body;
    User.updateUser(id, user, {}, function(err, user){
        if (err){
            throw err;
        }
        res.json(user);
    });
});

router.delete('/api/deleteCandidate/:id', function (req, res) {
    var id=req.params._id;
    User.deleteUser(id,function (err,user) {
        if(err){
            throw err;
        }
        res.json(user);
    });
});
