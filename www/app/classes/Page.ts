import gsap from "gsap";

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
    parent,
    children,
  }: {
    id: string;
    parent?: any;
    children?: any;
  }) {
    this.id = id;
    this.selector = {
      parent,
      children: { ...children },
    };
  }

  initialize() {
    this.parent = document.querySelector(this.selector.parent);
    this.children = {};

    for (const key in this.selector.children) {
      if (
        this.selector.children[key] instanceof HTMLElement ||
        this.selector.children[key] instanceof NodeList ||
        Array.isArray(this.selector.children[key])
      ) {
        this.children[key] = this.selector.children[key];
      } else {
        // First check if there are multiple elements
        this.children[key] = document.querySelectorAll(
          this.selector.children[key]
        );

        // Check if there are no elements or only one element
        if (this.children[key].length === 0) {
          // if there are no elements, set it to null
          this.children[key] = null;
        } else if (this.children[key].length === 1) {
          // if there is only one element, don't make it a node list
          this.children[key] = document.querySelector(
            this.selector.children[key]
          );
        }
      }
    }
  }

  show() {
    return new Promise((resolve) => {
      gsap.from(this.parent, {
        autoAlpha: 0,
        duration: 0.4,
        onComplete: resolve,
      });
    });
  }

  hide() {
    return new Promise((resolve) => {
      gsap.to(this.parent, {
        autoAlpha: 0,
        duration: 0.4,
        onComplete: resolve,
      });
    });
  }
}

export default Page;
