// const mongoose = require('mongoose'),
//     { Schema } = mongoose;

// const userSchema = new Schema({
//     googleId: String,
//     name: { type: String, default:"" },
//     score: { type: Number, default: 0 }
// });


// const userModel = mongoose.model('users' , userSchema);

// module.exports = userModel;

const mongoose = require('mongoose'),
    { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    name: { type: String},
    score: { type: Number}
});


const userModel = mongoose.model('users' , userSchema);

module.exports = userModel;

