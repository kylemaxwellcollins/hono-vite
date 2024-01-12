import Page from "../classes/Page";

class Contact extends Page {
  constructor() {
    super({
      id: "contact",
      parent: ".contact",
      children: {
        title: ".contact__title",
        description: ".contact__description",
      },
    });
  }

  initialize() {
    // Call the initialize method of the parent class
    super.initialize();
  }
}
export default Contact;
