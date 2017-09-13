var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let userSchema = new Schema({
	firstName: {
    type: String,
    maxLength: 35,
    required: true,
    match: [/^[a-zA-Z\u00C0-\u017F' -]+$/, 'Please enter valid name characters.']
  },
  lastName: {
    type: String,
    maxLength: 35,
    required: true,
    match: [/^[a-zA-Z\u00C0-\u017F' -]+$/, 'Please enter valid name characters.']
  },
  studentId: {
    type: Number,
    required: true,
    match: [/^\d{7}$/, 'Please enter valid Student ID.']
  },
  dateOfBirth: {
  	type: String,
  	required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[\w.+-]*\w+@[\w-]+(\.[\w-]+)+$/, 'Please enter a valid email.']
  },
  github: {
    type: String,
    maxLength: 35,
    match: [/^[a-zA-Z0-9-]+$/, 'Please enter valid username characters.']
  },
  description: {
    type: Schema.ObjectId,
    ref: 'Survey'
  },
  submittedSurvey: Boolean
});

module.exports = mongoose.model('User', userSchema);