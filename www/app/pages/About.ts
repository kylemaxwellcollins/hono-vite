import Page from "../classes/Page";

class About extends Page {
  constructor() {
    super({
      id: "about",
      parent: ".about",
      children: {
        title: ".about__title",
        description: ".about__description",
      },
    });
  }

  initialize() {
    // Call the initialize method of the parent class
    super.initialize();
  }
}

export default About;
