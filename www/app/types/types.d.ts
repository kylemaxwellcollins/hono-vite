declare global {
  interface Pages {
    home: Home;
    about: About;
    contact: Contact;
    fourOhFour: FourOhFour;
  }

  interface Page {
    initialize(): void;
    id: string;
    element: string;
    elements: { [key: string]: string };

    show(): Promise<void>;
    hide(): Promise<void>;
  }

  interface PageArgs {
    id: string;
    element: string;
    elements: { [key: string]: string };
  }
}

export { Pages, Page, PageArgs };
