import express from "express";
import compression from "compression";  // compresses requests
import session from "express-session";
import bodyParser from "body-parser";
import lusca from "lusca";
import dotenv from "dotenv";
import mongo from "connect-mongo";
import path from "path";
import mongoose from "mongoose";
import passport from "passport";
import expressValidator from "express-validator";
import bluebird from "bluebird";
import { MONGODB_URI, SESSION_SECRET } from "./utils/env";


// controllers
import * as TestController from "./controllers/test.controller";
import * as UserController from "./controllers/user.controller";



const MongoStore = mongo(session);

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env.dev" });

// Create Express server
const app = express();

// Connect to MongoDB
const mongoUrl = MONGODB_URI;
(< any>mongoose).Promise = bluebird;
mongoose.connect(mongoUrl, {useMongoClient: true}).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
  console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
  // process.exit();
});

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
// app.use(session({
//   resave: true,
//   saveUninitialized: true,
//   secret: SESSION_SECRET,
//   store: new MongoStore({
//     url: mongoUrl,
//     autoReconnect: true
//   })
// }));
app.use(passport.initialize());
app.use(passport.session());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});


app.get("/test", TestController.test);
app.get("/userList", UserController.userList);


export default app;