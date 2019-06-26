import error from "koa-json-error";
import "reflect-metadata";
import { useKoaServer } from "routing-controllers";
import app from "./app";
import api from "./api";

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(error());

/**
 * Start Express server.
 */
export const server = useKoaServer(app, {
  controllers: api,
  routePrefix: "/api"
});

app.listen(process.env.PORT || 3000);
