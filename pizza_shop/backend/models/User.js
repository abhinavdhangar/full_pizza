const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');


const cartSchema=new mongoose.Schema({
  name:String,
  Rating:Number,
  category:String,
  price:Number,
  image:String,
  tag:Object
})

const orderSchema = new mongoose.Schema({
  name:String,
  price:Number,
  image:String,
  category:String,
  tag:Object,
  customer_name:String,
  customer_address:Object,
  customer_phone:Number,
  status:String,
  delivery_date:Date

})

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
  },
  first_name:{
    type:String,
    required:[true,'please enter your first name !'],

  },
  last_name:{
    type:String,
    required:[true,'please enter your first name !'],

  },
 age:{type:Date,
  required:[true]
},
  member_since:{
    type:Date,
    default:Date.now()
    ,immutable:true
  }
  ,your_cart:[cartSchema],
  your_orders:[orderSchema]
  ,
  phone:{ type:Number,
  required:[true]}
  
});


// fire a function before doc saved to db
userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// static method to login user
userSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

const User = mongoose.model('user', userSchema);

module.exports = User;