export class Textarea {

  constructor(options) {
    this.className = options.className;
  }

  displayTextarea() {
    const main = document.querySelector("main");
    const p = document.createElement("p");
    p.classList.add("system-description");
    p.innerText = "You are using keyboard based on mac operating systems \n Use ctrl + alt (⌃ + ⌥) combination to change language";
    const textarea = document.createElement("textarea");
    textarea.classList.add(this.className);
    textarea.setAttribute("rows", 10);
    textarea.setAttribute("cols", 30);
    main.prepend(p, textarea);
  }
}