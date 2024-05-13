const express = require("express");
const mongoConnectionString = require("./connection")



const app = express();
const PORT = 5001;


mongoConnectionString("mongodb://localhost:27017/carwebsite")



app.get("/", async (req, res) => {
    return res.status(200).json({
        msg: "Welcome to Nodejs"
    })
})




app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})