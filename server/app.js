const express = require("express");
const cors =require("cors");
const app = express();
const contactRoutes = require("./routes/contact")
const connectDB=require("./conn/conn");
connectDB();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
}));

app.use("/api/v1",contactRoutes);
app.listen("1000", ()=>{
    console.log("server started at port 1000");
});