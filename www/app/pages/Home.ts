import Page from "../classes/Page";

interface Elements {
  nav: HTMLElement;
  title: HTMLElement;
  description: HTMLElement;
}

class Home extends Page {
  elements!: Elements;
  constructor() {
    super({
      id: "home",
      parent: ".home",
      children: {
        nav: ".nav",
        title: ".home__title",
        description: ".home__description",
      },
    });
  }

  initialize() {
    // Call the initialize method of the parent class
    super.initialize();
  }
}
export default Home;
