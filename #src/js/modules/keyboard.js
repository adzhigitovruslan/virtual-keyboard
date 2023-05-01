import { Button } from "./button.js";

const eventCodeEng = {
  "Backquote": { "§": "±" },
  "Digit1": { 1: "!" },
  "Digit2": { 2: "@" },
  "Digit3": { 3: "#" },
  "Digit4": { 4: "$" },
  "Digit5": { 5: "%" },
  "Digit6": { 6: "^" },
  "Digit7": { 7: "&" },
  "Digit8": { 8: "*" },
  "Digit9": { 9: "(" },
  "Digit0": { 0: ")" },
  "Minus": { "-": "_" },
  "Equal": { "=": "+" },
  "Backspace": "⌫",
  "Tab": "⇥",
  "KeyQ": { "q": "Q" },
  "KeyW": { "w": "W" },
  "KeyE": { "e": "E" },
  "KeyR": { "r": "R" },
  "KeyT": { "t": "T" },
  "KeyY": { "y": "Y" },
  "KeyU": { "u": "U" },
  "KeyI": { "i": "I" },
  "KeyO": { "o": "O" },
  "KeyP": { "p": "P" },
  "BracketLeft": { "[": "{" },
  "BracketRight": { "]": "}" },
  "Delete": "Del",
  "CapsLock": "⇪",
  "KeyA": { "a": "A" },
  "KeyS": { "s": "S" },
  "KeyD": { "d": "D" },
  "KeyF": { "f": "F" },
  "KeyG": { "g": "G" },
  "KeyH": { "h": "H" },
  "KeyJ": { "j": "J" },
  "KeyK": { "k": "K" },
  "KeyL": { "l": "L" },
  "Semicolon": { ";": ":" },
  "Quote": { "'": "\"" },
  "Backslash": { "\\": "|" },
  "Enter": "↩",
  "ShiftLeft": "⇧",
  "KeyZ": { "z": "Z" },
  "KeyX": { "x": "X" },
  "KeyC": { "c": "C" },
  "KeyV": { "v": "V" },
  "KeyB": { "b": "B" },
  "KeyN": { "n": "N" },
  "KeyM": { "m": "M" },
  "Comma": { ",": "<" },
  "Period": { ".": ">" },
  "Slash": { "/": "?" },
  "ArrowUp": "",
  "ShiftRight": "⇧",
  "ControlLeft": "⌃",
  "AltLeft": "⌥",
  "MetaLeft": "⌘",
  "Space": "",
  "MetaRight": "⌘",
  "AltRight": "⌥",
  "ArrowLeft": "",
  "ArrowDown": "",
  "ArrowRight": "",
};
const eventCodeRu = {
  "Backquote": { ">": "<" },
  "Digit1": { 1: "!" },
  "Digit2": { 2: "\"" },
  "Digit3": { 3: "№" },
  "Digit4": { 4: "%" },
  "Digit5": { 5: ":" },
  "Digit6": { 6: "," },
  "Digit7": { 7: "." },
  "Digit8": { 8: ";" },
  "Digit9": { 9: "(" },
  "Digit0": { 0: ")" },
  "Minus": { "-": "_" },
  "Equal": { "=": "+" },
  "Backspace": "⌫",
  "Tab": "⇥",
  "KeyQ": { "й": "Й" },
  "KeyW": { "ц": "Ц" },
  "KeyE": { "у": "У" },
  "KeyR": { "к": "К" },
  "KeyT": { "е": "Е" },
  "KeyY": { "н": "Н" },
  "KeyU": { "г": "Г" },
  "KeyI": { "ш": "Ш" },
  "KeyO": { "щ": "Щ" },
  "KeyP": { "з": "З" },
  "BracketLeft": { "х": "Х" },
  "BracketRight": { "ъ": "Ъ" },
  "Delete": "Del",
  "CapsLock": "⇪",
  "KeyA": { "ф": "Ф" },
  "KeyS": { "ы": "Ы" },
  "KeyD": { "в": "В" },
  "KeyF": { "а": "А" },
  "KeyG": { "п": "П" },
  "KeyH": { "р": "Р" },
  "KeyJ": { "о": "О" },
  "KeyK": { "л": "Л" },
  "KeyL": { "д": "Д" },
  "Semicolon": { "ж": "Ж" },
  "Quote": { "э": "Э" },
  "Backslash": { "ё": "Ё" },
  "Enter": "↩",
  "ShiftLeft": "⇧",
  "KeyZ": { "я": "Я" },
  "KeyX": { "ч": "Ч" },
  "KeyC": { "с": "С" },
  "KeyV": { "м": "М" },
  "KeyB": { "и": "И" },
  "KeyN": { "т": "Т" },
  "KeyM": { "ь": "Ь" },
  "Comma": { "б": "Б" },
  "Period": { "ю": "Ю" },
  "Slash": { "/": "?" },
  "ArrowUp": "",
  "ShiftRight": "⇧",
  "ControlLeft": "⌃",
  "AltLeft": "⌥",
  "MetaLeft": "⌘",
  "Space": "",
  "MetaRight": "⌘",
  "AltRight": "⌥",
  "ArrowLeft": "",
  "ArrowDown": "",
  "ArrowRight": "",
};

let textAreaText = "";
let content = "";
let switchLang = eventCodeEng;
let language = JSON.parse(localStorage.getItem("lang")) || false;

export class Keyboard {
  constructor(options) {
    this.mainClass = options.mainClass;
    this.wrapperClass = options.wrapperClass;
  }

  createKeyboard() {
    const body = document.querySelector("body");
    const main = document.createElement("main");
    const keyboardWrapper = document.createElement("div");

    main.classList.add(this.mainClass);
    keyboardWrapper.classList.add(this.wrapperClass);

    body.appendChild(main);
    main.appendChild(keyboardWrapper);
  }

  displayKeyboard() {
    let lang = JSON.parse(localStorage.getItem("lang"));
    console.log(lang);
    switchLang = lang ? eventCodeEng : eventCodeRu;
    for (let key in switchLang) {
      if (typeof switchLang[key] === "object") {
        const button = new Button({
          eventCode: key,
          className: "row__key",
          innerText: Object.keys(switchLang[key]),
        });
        document.querySelector(`.${this.wrapperClass}`).append(button.makeButtons());

      } else if (typeof switchLang[key] !== "object") {

        const button = new Button({
          eventCode: key,
          className: "row__key",
          innerText: switchLang[key],
        });

        document.querySelector(`.${this.wrapperClass}`).append(button.makeButtons());
      }
    }
  }

  hangClass(eventCode) {
    const allkeys = document.querySelectorAll(".row__key");
    allkeys.forEach((element) => {
      if (eventCode === element.dataset.eventCode) {
        element.classList.add("active");
      }
    });
  }

  removeClass(eventCode) {
    const allkeys = document.querySelectorAll(".row__key");
    allkeys.forEach((element) => {
      if (eventCode === element.dataset.eventCode) {
        element.classList.remove("active");
      }
    });
  }

  shiftLeftPress(eventCode) {
    if (eventCode === "ShiftLeft") {
      this.toClearScreen();
      for (let key in switchLang) {

        if (typeof switchLang[key] === "object") {

          const button = new Button({
            eventCode: key,
            className: "row__key",
            innerText: Object.values(switchLang[key]),
          });

          document.querySelector(`.${this.wrapperClass}`).append(button.makeButtons());
        } else if (typeof switchLang[key] !== "object") {

          const button = new Button({
            eventCode: key,
            className: "row__key",
            innerText: switchLang[key],
          });

          document.querySelector(`.${this.wrapperClass}`).append(button.makeButtons());

        }
      }
    }
  }

  shiftLeftUnpress(eventCode) {
    if (eventCode === "ShiftLeft") {

      this.toClearScreen();

      for (let key in switchLang) {

        if (typeof switchLang[key] === "object") {
          const button = new Button({
            eventCode: key,
            className: "row__key",
            innerText: Object.keys(switchLang[key]),
          });
          document.querySelector(`.${this.wrapperClass}`).append(button.makeButtons());

        } else if (typeof switchLang[key] !== "object") {

          const button = new Button({
            eventCode: key,
            className: "row__key",
            innerText: switchLang[key],
          });

          document.querySelector(`.${this.wrapperClass}`).append(button.makeButtons());
        }
      }
    }
  }

  toClearScreen() {
    document.querySelector(`.${this.wrapperClass}`).innerHTML = "";
  }

  shortcutPress(event) {
    if (event.ctrlKey && event.altKey) {
      this.toClearScreen();
      this.displayKeyboard();
    }
  }

  switchLanguage() {
    language = !language;
  }


  displayText(event) {
    const keys = document.querySelectorAll(".row__key");
    
    switch (event.code) {
    case "Backspace":
      textAreaText.slice(0, -1);
      break;
    case "Tab":
      textAreaText = "";
      break;
    case "CapsLock":
      textAreaText = "";
      break;
    case "Enter":
      textAreaText = "\n";
      break;
    case "ShiftLeft":
      if (event.shiftKey && event.altKey) {
        this.shortcutPress(event);
      }
      textAreaText = "";
      break;
    case "ShiftRight":
      textAreaText = "";
      break;
    case "ControlLeft":
      if (event.shiftKey && event.altKey) {
        this.shortcutPress(event);
      }
      textAreaText = "";
      break;
    case "AltLeft":
      textAreaText = "";
      break;
    case "MetaLeft":
      textAreaText = "";
      break;
    case "AltRight":
      textAreaText = "";
      break;
    case "MetaRight":
      textAreaText = "";
      break;
    case "Space":
      textAreaText = " ";
      break;
    default:
      for (let i = 0; i < keys.length; i++) {
        if (event.code === keys[i].dataset.eventCode) {
          textAreaText = keys[i].innerText;
        }
      }
      break;
    }

    content += textAreaText;
    document.querySelector(".textarea").innerText = content;
  }
}