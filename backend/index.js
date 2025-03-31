const express = require('express');
// import database from './database';
// const database = require('./database');
const mongoose = require('mongoose');


const database = () => {
  mongoose.connect('mongodb+srv://Hauwah:KUD917aPCc3i0OPD@mongodemo.8oanb.mongodb.net/?retryWrites=true&w=majority&appName=MongoDemo', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
}
database();

const app = express();
// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

// Post: Create User
app.post('/users', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email
  });

  try{
      await user.save();
      // res.send(user);
      res.status(201).json(user); 
  } catch (err) {
    res.status(500).json(err);
  }
  console.log(user, 'User created');
});

// Get: Get all users
app.get('/users', async (req, res) => {
  try{
  const users = await User.find();
  // res.send(users);
  res.json(users); 

  } catch (err) {
    res.status(500).json(err);
  }
});

// Put: Update user
app.put('/users/:id', async (req, res) => {
  try{
     const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
     if (!user) {
      res.status(404).json({ message: "User not found" });
    }
     res.send(user);   
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete: Delete user
app.delete('/users/:id', async (req, res) => {
  try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        res.status(400).json("No user found");
      }  
  res.send({ message: 'User deleted' });

  } catch (err) {
    res.status(500).json(err)
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

