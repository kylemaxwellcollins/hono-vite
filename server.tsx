import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import home from "./api/routes/home";
import about from "./api/routes/about";
import contact from "./api/routes/contact";
import FourOhFour from "./www/views/404/404";
const isProd = process.env["NODE_ENV"] === "production";

// create Hono app
const app = new Hono();

// deliver static assets from /assets route
app.use("/assets/*", serveStatic({ root: isProd ? "build/" : "./" }));

// custom 404 page
app.notFound((c) => {
  return c.html(<FourOhFour />, 404);
});

// routes
app.route("/", home);
app.route("/about", about);
app.route("/contact", contact);

export default app;

// start production server
if (isProd) {
  serve({ ...app, port: 4000 }, (info) => {
    console.log(`Listening on http://localhost:${info.port}`);
  });
}
