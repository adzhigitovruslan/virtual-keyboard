import { Keyboard } from "./modules/keyboard.js";
import { Textarea } from "./modules/textarea.js";

let language;
let isCapsOn;

if (localStorage.getItem("language")) {
  language = JSON.parse(localStorage.getItem("language"));
} else {
  localStorage.setItem("language", true);
}

if (localStorage.getItem("capslock")) {
  isCapsOn = JSON.parse(localStorage.getItem("capslock"));
} else {
  localStorage.setItem("capslock", false);
}

const keyboard = new Keyboard({
  mainClass: "main",
  wrapperClass: "keyboard",
  language,
  isCapsOn,
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
  if (event.target.dataset.eventCode === "CapsLock") {
    keyboard.switchCaps();
  }
});
document.addEventListener("keyup", (event) => {
  keyboard.shiftLeftUnpress(event.code);
  keyboard.removeClass(event.code);
  // if(event.target.dataset.eventCode === "CapsLock") {
  //   keyboard.switchCaps();
  // }
});

document.addEventListener("mousedown", (event) => {
  keyboard.displayText(event);
  console.log(event.target.dataset.eventCode);
  if (event.target.classList.contains("row__key")) {
    event.target.classList.add("active");
  }

  keyboard.shiftLeftPress(event.target.dataset.eventCode);
});
document.addEventListener("mouseup", (event) => {
  if (event.target.classList.contains("row__key")) {
    event.target.classList.remove("active");
  }

  keyboard.shiftLeftUnpress(event.target.dataset.eventCode);
});