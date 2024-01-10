import { Hono } from "hono";
import About from "../../www/views/About/About";
import { client } from "../prismic/client";

const app = new Hono();

app.get("/", async (c) => {
  const document = await client.getSingle("about");

  return c.html(
    <About
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
