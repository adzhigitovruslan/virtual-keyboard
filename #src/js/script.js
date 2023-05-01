import { Keyboard } from "./modules/keyboard.js";
import { Textarea } from "./modules/textarea.js";

const keyboard = new Keyboard({
  mainClass: "main",
  wrapperClass: "keyboard",
});

const textarea = new Textarea({
  className: "textarea"
});

keyboard.createKeyboard();
keyboard.displayKeyboard();
textarea.displayTextarea();

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  keyboard.shiftLeftPress(event.code);
  keyboard.shortcutPress(event);
  keyboard.hangClass(event.code);
  keyboard.displayText(event);
});
document.addEventListener("keyup", (event) => {
  keyboard.shiftLeftUnpress(event.code);
  keyboard.removeClass(event.code);
});