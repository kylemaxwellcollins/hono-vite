import gsap from "gsap";

class Page {
  id: string;
  selector: {
    element?: any;
    elements?: any;
  };

  element?: any;
  elements?: any;

  constructor({ id, element, elements }: PageArgs) {
    this.id = id;
    this.selector = {
      element,
      elements: { ...elements },
    };
  }

  initialize() {
    this.element = document.querySelector(this.selector.element);
    this.elements = {};

    for (const key in this.selector.elements) {
      if (
        this.selector.elements[key] instanceof HTMLElement ||
        this.selector.elements[key] instanceof NodeList ||
        Array.isArray(this.selector.elements[key])
      ) {
        this.elements[key] = this.selector.elements[key];
      } else {
        // First check if there are multiple elements
        this.elements[key] = document.querySelectorAll(
          this.selector.elements[key]
        );

        // Check if there are no elements or only one element
        if (this.elements[key].length === 0) {
          // if there are no elements, set it to null
          this.elements[key] = null;
        } else if (this.elements[key].length === 1) {
          // if there is only one element, don't make it a node list
          this.elements[key] = document.querySelector(
            this.selector.elements[key]
          );
        }
      }
    }
  }

  show() {
    return new Promise((resolve) => {
      gsap.from(this.element, {
        autoAlpha: 0,
        duration: 0.4,
        onComplete: resolve,
      });
    });
  }

  hide() {
    return new Promise((resolve) => {
      gsap.to(this.element, {
        autoAlpha: 0,
        duration: 0.4,
        onComplete: resolve,
      });
    });
  }
}

export default Page;
