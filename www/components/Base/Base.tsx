import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const isProd = process.env["NODE_ENV"] === "production";

interface Props {
  title: string;
  description?: string;
  children: any;
  template: string;
}

const Base = (props: Props) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/assets/images/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{props.title}</title>
        <meta name="description" content={props.description} />

        {isProd ? (
          <link rel="stylesheet" href="assets/styles.css" />
        ) : (
          <script type="module" src="/@vite/client"></script>
        )}
      </head>
      <body>
        {<Header />}
        <main class="content" data-template={props.template}>
          {props.children}
        </main>
        {<Footer />}

        {isProd ? (
          <script type="module" src="assets/scripts.js"></script>
        ) : (
          <script type="module" src="client.ts"></script>
        )}
      </body>
    </html>
  );
};

export default Base;
