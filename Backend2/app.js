require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;
const router = require("./routes/index")
const cors = require("cors");

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cros
app.use(cors());

//db connect
const DB_URI = process.env.DB_URI;
mongoose.connect(DB_URI);
mongoose.connection.on("connected", () => console.log("MongoDB Connected"));
mongoose.connection.on("error", (err) => console.log("MongoDB Error", err));


//api routes
app.use(router);

//check api
app.get('/',(req,res)=>{
    res.json({
        message:"server up",
        status: true
    })
})

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);