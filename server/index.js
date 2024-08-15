const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/crud")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get('/getUser/:id',(req,res)=>{
  const id = req.params.id;
  UserModel.findById({ _id:id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));

})

app.put('/updateUser/:id', (req,res)=>{

  const id = req.params.id;
UserModel.findByIdAndUpdate({_id:id},

   {
  name:req.body.name,
   email:req.body.email,
    age:req.body.age
  
  })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));


})

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users)) //  users collection name
    .catch((err) => res.json(err));
});


app.delete('/deleteUser/:id', (req,res)=>{

    const id = req.params.id;
UserModel.findByIdAndDelete({ _id: id })
  .then((res) => res.json(res)) //  users collection name
  .catch((err) => res.json(err));

})
// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
