import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FourOhFour from "./pages/404";

class App {
  pages!: Pages;
  template?: string;
  content!: HTMLElement;
  page!: Page;
  url!: string | null;

  constructor() {
    this.getTemplate();
    this.createPages();

    this.addEventListeners();
    this.addLinkListeners();
  }

  getTemplate() {
    // get the element element of the current page
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
      fourOhFour: new FourOhFour(),
    };

    this.page = this.pages[this.template as keyof Pages] as Page;

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
    if (this.url === url) return; // If the url is the same, don't do anything
    this.url = url;

    await this.page.hide(); // Hide the current page, since this returns a promise, we need to await it

    const res = await window.fetch(url); // Fetch the new page

    if (res.status === 200) {
      const html = await res.text(); // Get the HTML from the response
      const div = document.createElement("div"); // Create a new div

      if (push) {
        window.history.pushState({}, "", url); // Push the new url to the history
      }

      div.innerHTML = html; // Set the innerHTML of the div to the HTML we got from the response

      const divContent = div.querySelector(".content"); // Get the content div from the new page

      this.template = divContent?.getAttribute("data-template") || ""; // Get the template name from the data-template attribute

      this.content.setAttribute("data-template", this.template); // Update the data-template attribute of the content div
      this.content.innerHTML = divContent?.innerHTML || ""; // Update the content div with the new content

      this.page = this.pages[this.template as keyof Pages] as Page; // Get the new page from the pages object
      this.page.initialize(); // Initialize the new page

      this.page.show(); // Show the new page

      this.addLinkListeners(); // Add the event listeners to the new page
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
