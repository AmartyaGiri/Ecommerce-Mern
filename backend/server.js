// const app = require("./app");
// const dotenv = require("dotenv");
// const cloudinary = require("cloudinary");
// const connectDatabase = require("./config/database");

// // Handling uncaught exception
// process.on("uncaughtException", (err)=>{
//     console.log(`Error: ${err.message}`);
//     console.log(`shutting down the server due to uncaught exception`);
//     process.exit(1);
// });


// //config
// dotenv.config({path:"backend/config/config.env"});


// //connect to database
//  connectDatabase();
 

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUD_API_KEY,
//     api_secret: process.env.CLOUD_API_SECRET
// });


// const server = app.listen(process.env.PORT, ()=>{
//     console.log(`server is working on http://localhost:${process.env.PORT}`)
// })


// //unhandeled promise rejection -- not working
// process.on("unhandledRejection", (err)=>{
//     console.log(`Error: ${err.message}`);
//     console.log(`shutting down the server due to unhandeled Promise rejection`);

//     server.close(()=>{
//         process.exit(1);
//     });
// });
