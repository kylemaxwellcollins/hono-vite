import Page from "../classes/Page";

class About extends Page {
  constructor() {
    super({
      id: "about",
      element: ".about",
      elements: {
        title: ".about__title",
        description: ".about__description",
      },
    });
  }
}

export default About;
