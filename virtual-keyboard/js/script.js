import { Keyboard } from "./modules/keyboard.js";
import { Textarea } from "./modules/textarea.js";

let localLanguage;
if (localStorage.getItem("language")) {
  localLanguage = JSON.parse(localStorage.getItem("language"));
} else {
  localStorage.setItem("language", true);
}

const keyboard = new Keyboard({
  mainClass: "main",
  wrapperClass: "keyboard",
  language: localLanguage,
});

const textarea = new Textarea({
  className: "textarea"
});

keyboard.createKeyboard();
keyboard.displayKeyboard();
textarea.displayTextarea();

document.addEventListener("keydown", (event) => {
  keyboard.shiftLeftPress(event.code);
  keyboard.shortcutPress(event);
  keyboard.hangClass(event.code);
  keyboard.displayText(event);
});
document.addEventListener("keyup", (event) => {
  keyboard.shiftLeftUnpress(event.code);
  keyboard.removeClass(event.code);
});
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("row__key")) {
    event.target.classList.add("active");
    setTimeout(() => {
      event.target.classList.remove("active");
    }, 500);
  }
});