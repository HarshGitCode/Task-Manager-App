const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
    },
    name: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true
    },
    tasks:[{
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Task"
        //reuired: true (it's give me eorrr when i create user without fill that field)
    }]

 
});

const User = mongoose.model('User', userSchema);

module.exports = User;
