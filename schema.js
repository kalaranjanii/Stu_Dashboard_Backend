// models/Employee.js
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  // Define your schema fields here
  firstname: String,
  lastname: String,
  fathername: String,
  mothername: String,
  email: String,
  address: String,
  dob: String,
  contact: String,
  fathernumber: String,
  maritalstatus: String,
  gender: String,
  Qualification: String,
  hscMarks: String,
  hscSchoolName: String,
  hscPassedYear: String,
  hscPercentage: String,
  diplomaMarks: String,
  diplomaCollegeName: String,
  diplomaPassedYear: String,
  diplomaSpecialization: String,
  diplomaPercentage: String,
  diplomaClass: String,
  degree: String,
  cgpa: String,
  passedout: String,
  photo: String,
  totalAmount: String,
  paidAmount: String,
  remainingAmount: String,

  // Other fields
});

module.exports = mongoose.model("Employee", employeeSchema);
