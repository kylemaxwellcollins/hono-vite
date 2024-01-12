interface Animation {
  element: HTMLElement;
  observer: IntersectionObserver;
  options: IntersectionObserverInit;
  callback: IntersectionObserverCallback;
}

class Animation {
  constructor(element: HTMLElement) {
    this.element = element;
  }

  createObserver() {
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("animatein");
        } else {
          console.log("animateout");
        }
      });
    });

    this.observer.observe(this.element);
  }
}

export default Animation;
