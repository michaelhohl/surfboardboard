var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String,
        profileUrl: String,
        picture: String
    },
    admin: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', userSchema);