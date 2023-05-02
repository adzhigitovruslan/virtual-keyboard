export class Textarea {

  constructor(options) {
    this.className = options.className;
  }

  displayTextarea() {
    const main = document.querySelector("main");
    const p = document.createElement("p");
    p.classList.add("system-description");
    p.innerText = "You are using keyboard based on mac operating systems";
    const textarea = document.createElement("textarea");
    textarea.classList.add(this.className);
    main.prepend(p, textarea);
  }
}