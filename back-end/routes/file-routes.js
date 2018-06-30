var express = require('express');
var router = express.Router();

router.get('/api/getFileList', function(req,res){
    File.getFile(function(err, File){
        if (err){
            throw err;
        }
        res.json(File);
    });
});

router.post('/api/addFile', function(req,res){
    var file = req.body;
    File.addFile(file, function(err, file){
        if (err){
            throw err;
        }
        res.json(file);
    });
});

router.put('/api/updateFile/:id', function(req,res){
    var id = req.params._id
    var file = req.body;
    File.updateFile(id, file, {}, function(err, file){
        if (err){
            throw err;
        }
        res.json(file);
    });
});

router.delete('/api/deleteFile/:id', function (req, res) {
    var id=req.params._id;
    File.deleteFile(id,function (err,file) {
        if(err){
            throw err;
        }
        res.json(file);
    });
});

module.exports = router;
