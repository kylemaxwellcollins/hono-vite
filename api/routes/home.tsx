import { Hono } from "hono";
import Home from "../../www/views/Home/Home";
import { client } from "../prismic/client";

const app = new Hono();

app.get("/", async (c) => {
  const document = await client.getSingle("homepage");

  return c.html(
    <Home
      metadata={{
        title: document.data.meta_title,
        description: document.data.meta_description,
      }}
      content={{
        copy: document.data.meta_description,
      }}
    />
  );
});

export default app;
