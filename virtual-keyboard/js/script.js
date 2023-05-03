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
  let lang = JSON.parse(localStorage.getItem("language")) || false;
  if (event.code === "ShiftLeft") {
    keyboard.shiftLeftPress(event, "active");
  }
  if (event.getModifierState("CapsLock")) {
    keyboard.switchCaps(true, lang);
  } 
  keyboard.shortcutPress(event);
  keyboard.hangClass(event);
  keyboard.displayText(event);
});
document.addEventListener("keyup", (event) => {
  if (event.code === "ShiftLeft") {
    keyboard.shiftLeftUnpress(event.code);
  }
  if(!event.getModifierState("CapsLock")) {
    keyboard.switchCaps(false);
  }
  keyboard.removeClass(event.code);
});

document.addEventListener("mousedown", (event) => {
  let lang = JSON.parse(localStorage.getItem("language")) || false;
  if (event.target.dataset.eventCode === "CapsLock" && event.target.classList.contains("active")) {
    event.target.classList.remove("active");
    keyboard.switchCaps(false, lang);
  } else if (event.target.dataset.eventCode === "CapsLock" && !event.target.classList.contains("active")) {
    keyboard.switchCaps(true, lang);
    event.target.classList.add("active");
  } else {
    event.target.classList.add("active");
  }

  if (event.target.dataset.eventCode === "ShiftLeft") {
    keyboard.shiftLeftPress(event, "active");
  }

});
document.addEventListener("mouseup", (event) => {
  if (event.target.dataset.eventCode === "CapsLock") return;
  event.target.classList.remove("active");
  if (event.target.dataset.eventCode === "ShiftLeft") {
    keyboard.shiftLeftUnpress(event.target.dataset.eventCode);
  }
});