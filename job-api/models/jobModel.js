const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: 
  {
    type: String,
    required: true
  },
  company:
   {
    type: String,
    required: true
  },
  description: String,
  location: String,
  salary: Number,
}, 
{
  timestamps: true
});

module.exports = mongoose.model('Job', jobSchema);
