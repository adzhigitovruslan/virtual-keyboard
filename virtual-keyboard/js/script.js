import { Keyboard } from "./modules/keyboard.js";
import { Textarea } from "./modules/textarea.js";

let keyPressed = {};
let language = localStorage.getItem("lang") ? localStorage.getItem("lang") : "eng";

const keyboard = new Keyboard({
  mainClass: "main",
  wrapperClass: "keyboard",
});

const textarea = new Textarea({
  className: "textarea"
});

keyboard.createKeyboard();
keyboard.displayKeyboard(language);
textarea.displayTextarea();
keyboard.shiftLetters(language);

function keydownFunc(event) {
  keyPressed[event.code] = true;
  if (keyPressed["ShiftLeft"] && keyPressed["AltLeft"]) {
    language = language === "eng" ? "ru" : "eng";
    localStorage.setItem("lang", language);
    keyboard.toClearScreen();
    keyboard.displayKeyboard(language);
  }
}

const keyupFunc = (event) => {
  delete keyPressed[event.code];
};

document.addEventListener("keydown", keydownFunc);
document.addEventListener("keyup", keyupFunc);

window.removeEventListener("beforeunload", keydownFunc);
window.removeEventListener("beforeunload", keyupFunc);