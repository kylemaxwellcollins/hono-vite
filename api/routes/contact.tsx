import { Hono } from "hono";
import Contact from "../../www/views/Contact/Contact";
import { client } from "../prismic/client";

const app = new Hono();

app.get("/", async (c) => {
  const document = await client.getSingle("contact");

  return c.html(
    <Contact
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
