const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  prjectName: {
    type: String,
    required: true,
  },
  createdAt:{
    type: String,
    required: true
  },
  subTask: [{
    type:  mongoose.Schema.Types.ObjectId,
    ref: "SubTask"
    //reuired: true (it's give me eorrr when i create user without fill that field)
  }]
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
