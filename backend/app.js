// const cookieParser = require("cookie-parser");
// const express = require("express");
// const path = require("path");
// const app = express();

// const bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload");

// const errorMiddleware = require("./middleware/error");


// app.use(express.json())
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload());


// //Route imports
// const product = require("./routes/productRoute");
// const user =  require("./routes/userRoute");
// const order = require("./routes/orderRoute");
// const payment = require("./routes/paymentRouter");


// app.use("/api/v1",product);
// app.use("/api/v1",user);
// app.use("/api/v1", order);
// app.use("/api/v1", payment);


// app.use(Express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

// //Middleware for errors
// app.use(errorMiddleware);


module.exports = app