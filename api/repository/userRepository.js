const User = require('../models/User');
const bcrypt = require('bcrypt');

class UserRepository {
  async create(userData) {
    const { name, email, password } = userData;

   
    const hashedPassword = await bcrypt.hash(password, 10); 

  
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword 
    });

    
    await newUser.save();
    return newUser;
  }
 
  async findAll(){
    return User.find();
  }
  async findById(id){
    return User.findById(id);
  }
  async updateById(id, userData){
    return User.findByIdAndUpdate(id, userData, {new: true});
  }
  async deleteById(id){
    return User.findByIdAndDelete(id);
  }
}

module.exports = new UserRepository();