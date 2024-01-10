import Page from "../classes/Page";

class Home extends Page {
  constructor() {
    super({
      id: "home",
      element: ".home",
      elements: {
        title: ".home__title",
        description: ".home__description",
      },
    });
  }
}
export default Home;
