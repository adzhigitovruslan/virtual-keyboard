import { Keyboard } from "./modules/keyboard.js";
import { Textarea } from "./modules/textarea.js";

localStorage.setItem("lang", true);

let language = JSON.parse(localStorage.getItem("lang"));

const keyboard = new Keyboard({
  mainClass: "main",
  wrapperClass: "keyboard",
  language,
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