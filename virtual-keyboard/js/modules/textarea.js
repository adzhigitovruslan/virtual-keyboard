export class Textarea {
  
  constructor(options) {
    this.className = options.className;
  }

  displayTextarea() {
    const main = document.querySelector("main");
    const textarea = document.createElement("textarea");
    textarea.classList.add(this.className);
    main.prepend(textarea);
  }

}