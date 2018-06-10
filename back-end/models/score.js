var mongoose = require('mongoose');
var score = require('../models/user');

// Score Schema
var scoreSchema = mongoose.Schema(
    {
    role: {
        type: String
    },
    writing :{
        type: String
    },
    listening : {
        type: String
    },
    reading :{
        type: String
    },
    speaking :{
        type: String
    },
    date: {
        type: Date
    }
});

var Score = module.exports = mongoose.model('Score',scoreSchema);

// Get Score
module.exports.getScore = function(callback, limit){
    Score.find(callback).limit(limit);
}

// Get Score
module.exports.getScore = function(callback, limit){
    Score.find(callback).limit(limit);
}

// Add score
module.exports.addScore = function(score, callback){
    Score.create(score, callback);
}

// Update score
module.exports.updateScore = function(id , score, options, callback){
    var query = {_id : id};
    var update = {
        role: score.role,
        writing : score.writing,
        listening : score.listening,
        reading : score.reading,
        speaking : score.speaking,
        date: score.date
    }
    Score.findOneAndUpdate(query, update, options, callback);
}

// Delete Score
module.exports.deleteScore = function(score,callback){
    var query = {_id :id};
    Score.remove(query, callback);
}