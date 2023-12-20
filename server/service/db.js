const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/img', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Image = mongoose.model('Image', {
  id:Number,
  img: String,
  name: String,
});

const Reg = mongoose.model('Reg', {
  name: String,
  email: String,
  password:String,
});

module.exports = {
  Image,
  Reg,
};
