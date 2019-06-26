import compression from "koa-compress";  // compresses requests
import session from "koa-session";
import helmet from "koa-helmet";
import dotenv from "dotenv";
import mongo from "connect-mongo";
import mongoose from "mongoose";
import passport from "koa-passport";
import { MONGODB_URI, SESSION_SECRET } from "./utils/env";
import Koa from "koa";
import bodyParser from "koa-bodyparser";


// const MongoStore = mongo(session);

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env.dev" });

// Create Express server
// const app = express();
const app = new Koa();

// Connect to MongoDB
const mongoUrl = MONGODB_URI;
mongoose.connect(mongoUrl).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
  console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
  // process.exit();
});

// Express configuration
app.use(compression());
app.use(bodyParser());
// app.use(expressValidator());
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
app.use(helmet());
// app.use((req, res, next) => {
//   res.locals.user = req.user;
//   next();
// });


export default app;