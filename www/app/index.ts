import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

interface Page {
  initialize(): any;
  id: string;
}

class App {
  pages!: Pages;
  template?: string;
  page!: Page;

  constructor() {
    this.getTemplate();
    this.createPages();
  }

  getTemplate() {
    this.template = document.querySelector("body")?.dataset.template;
  }

  createPages() {
    this.pages = {
      home: new Home(),
      about: new About(),
      contact: new Contact(),
    };

    this.page = this.pages[this.template as keyof Pages];

    // Initialize the current page
    this.page.initialize();
  }
}

export default new App();
