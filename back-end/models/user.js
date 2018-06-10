var mongoose = require('mongoose');

// User Schema
var userSchema = mongoose.Schema({
    firstName :{
        type: String
    },
    lastName : {
        type: String
    },
    birthday :{
        type: String
    },
    Phone :{
        type: String
    } ,
    email :{
        type: String
    },
    username :{
        type: String
    } ,
    password :{
        type: String
    } ,
    address :{
        type:String
    },
    role :{
        type: String
    },
    identity : {
        type: String
    },

    googleId: {
        type: String
    },

    facebookId:{
        type: String
    }

});

var User = module.exports = mongoose.model('User',userSchema);

// Get users
module.exports.getUsers = function(callback, limit){
    User.find(callback).limit(limit);
}

// Add users
module.exports.addUser = function(user, callback){
    User.create(user, callback);
}

//Applied role
module.exports.updateRole = function(id, user, options, callback) {
    var query = {_id: id};
    var update = {
        role: user.role = teacher
    }
    User,findOneAndUpdate(query, update, options, callback);
}

// Update users
module.exports.updateUser = function(id , user, options, callback){
    var query = {_id : id};
    var update = {
        firstName : user.firstName,
        lastName : user.lastName,
        birthday : user.birthday,
        Phone : user.Phone,
        email : user.email,
        username : user.username,
        password : user.password,
        address : user.address,
        role: user.role,
        identity : user.identity
    }
    User.findOneAndUpdate(query, update, options, callback);
}

// Delete User
module.exports.deleteUser = function(user,callback){
    var query = {_id :id};
    User.remove(query, callback);
}