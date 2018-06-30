
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// File Schema
var fileSchema = mongoose.Schema({
    file :{
        type: file
    }
});

var File = module.exports = mongoose.model('File',fileSchema);

// Get files
module.exports.getFile = function(callback, limit){
    File.find(callback).limit(limit);
}

// Add files
module.exports.addFile = function(file, callback){
    File.create(file, callback);
}

/*
//Applied role
module.exports.updateRole = function(id, user, options, callback) {
    var query = {_id: id};
    var update = {
        role: user.role = teacher
    }
    User,findOneAndUpdate(query, update, options, callback);
}
*/

// Update file
module.exports.updateFile = function(id , file, options, callback){
    var query = {_id : id};
    var update = {
        file: file.file
    }
    File.findOneAndUpdate(query, update, options, callback);
}

// Delete file
module.exports.deleteFile = function(file, callback){
    var query = {_id :id};
    File.remove(query, callback);
}