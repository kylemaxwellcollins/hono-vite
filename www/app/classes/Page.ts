interface Page {
  id: string;
  selector: {
    parent?: any;
    children?: any;
  };

  parent?: any;
  children?: any;
}

class Page {
  constructor({
    id,
    element,
    elements,
  }: {
    id: string;
    element?: any;
    elements?: any;
  }) {
    this.id = id;
    this.selector = {
      parent: element,
      children: { ...elements },
    };
  }

  initialize() {
    this.parent = document.querySelector(this.selector.parent);
    this.children = {};

    for (const key in this.selector.children) {
      this.children[key] = document.querySelector(this.selector.children[key]);
    }
  }
}

export default Page;
