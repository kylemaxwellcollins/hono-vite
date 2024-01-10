import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

declare global {
  interface Pages {
    home: Home;
    about: About;
    contact: Contact;
  }
}
