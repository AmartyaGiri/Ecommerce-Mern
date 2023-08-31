const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const errorMiddleware = require("./middleware/error");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());


//Route imports
const product = require("./routes/productRoute");
const user =  require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRouter");


app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1", order);
app.use("/api/v1", payment);


app.use(Express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

//Middleware for errors
app.use(errorMiddleware);


// Handling uncaught exception
process.on("uncaughtException", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to uncaught exception`);
    process.exit(1);
});


//config
dotenv.config({path:"./config/config.env"});


//connect to database
 connectDatabase();
 

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});


const server = app.listen(process.env.PORT, ()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})


//unhandeled promise rejection -- not working
process.on("unhandledRejection", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to unhandeled Promise rejection`);

    server.close(()=>{
        process.exit(1);
    });
});
