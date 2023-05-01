class ButtonOptions {
  constructor(options) {
    this.className = options.className;
    this.eventCode = options.eventCode;
    this.innerText = options.innerText;
  }

  makeButtons() {
    const button = document.createElement("button");
    button.classList.add(this.className);
    button.dataset.eventCode = this.eventCode;
    button.innerText = this.innerText;
    return button;
  }
}

export class Button extends ButtonOptions {
  constructor(options) {
    super(options);
  }
}