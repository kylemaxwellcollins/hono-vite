import Page from "../classes/Page";

class Contact extends Page {
  constructor() {
    super({
      id: "contact",
      element: ".contact",
      elements: {
        title: ".contact__title",
        description: ".contact__description",
      },
    });
  }
}
export default Contact;
