import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

interface Page {
  initialize(): any;
  id: string;
  parent: string;
  children: { [key: string]: string };

  show(): Promise<void>;
  hide(): Promise<void>;
}

class App {
  pages!: Pages;
  template?: string;
  content!: any;
  page!: Page;
  url!: string | null;

  constructor() {
    this.getTemplate();
    this.createPages();

    this.addEventListeners();
    this.addLinkListeners();
  }

  getTemplate() {
    // get the parent element of the current page
    this.content = document.querySelector(".content") as HTMLElement;
    this.template = (
      document.querySelector(".content") as HTMLElement
    )?.dataset.template;
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
    this.page.show();
  }

  addLinkListeners() {
    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      const isLocal = link.href.includes(window.location.origin);

      if (isLocal) {
        link.onclick = (e) => {
          const { href } = link;

          e.preventDefault();
          this.onChange({ url: href });
        };
      }
    });
  }

  onPopState() {
    this.onChange({
      url: window.location.pathname,
      push: false,
    });
  }

  async onChange({ url, push = true }: { url: string; push?: boolean }) {
    await this.page.hide();

    const res = await window.fetch(url);

    if (res.status === 200) {
      const html = await res.text();
      const div = document.createElement("div");

      if (push) {
        window.history.pushState({}, "", url);
      }

      div.innerHTML = html;

      const divContent = div.querySelector(".content");

      this.template = divContent?.getAttribute("data-template") || "";

      this.content.setAttribute("data-template", this.template);
      this.content.innerHTML = divContent?.innerHTML || "";

      this.page = this.pages[this.template as keyof Pages]; // Add 'as keyof Pages' to fix the type error
      this.page.initialize();

      this.page.show();

      this.addLinkListeners();
    } else {
      console.error(`response status: ${res.status}`);
    }
  }

  addEventListeners() {
    // Listen for the back and forward buttons
    window.addEventListener("popstate", this.onPopState.bind(this));
  }
}

export default new App();
