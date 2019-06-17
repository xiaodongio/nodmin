import errorHandler from "errorhandler";
import "reflect-metadata";
import {useExpressServer} from "routing-controllers";
import app from "./app";
import api from "./api";

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
// export const server = app.listen(app.get("port"), () => {
//   console.log(
//     "  App is running at http://localhost:%d in %s mode",
//     app.get("port"),
//     app.get("env")
//   );
//   console.log("  Press CTRL-C to stop\n");
// });
export const server = useExpressServer(app, {
  controllers: api,
  routePrefix: "/api"
});

app.listen(process.env.PORT || 3000);
