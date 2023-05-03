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

let newValue = "";
let switchLang = eventCodeEng;

export class Keyboard {
  constructor(options) {
    this.mainClass = options.mainClass;
    this.wrapperClass = options.wrapperClass;
    this.language = localStorage.getItem("language") ? JSON.parse(localStorage.getItem("language")) : true;
    this.isCapsOn = localStorage.getItem("isCapsOn") ? JSON.parse(localStorage.getItem("isCapsOn")) : false;
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
    switchLang = this.language ? eventCodeEng : eventCodeRu;
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

  hangClass(event) {
    const allkeys = document.querySelectorAll(".row__key");
    allkeys.forEach((element) => {
      if (event.code === element.dataset.eventCode) {
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

  switchCaps(value) {
    let lang = JSON.parse(localStorage.getItem("language")) || false;
    this.isCapsOn = !this.isCapsOn;
    localStorage.setItem("isCapsOn", value);
    if (value) {
      this.toUpperCase(lang);
    } else {
      this.toLowerCase(lang);
    }
  }

  shiftLeftPress() {
    let lang = JSON.parse(localStorage.getItem("language")) || false;
    this.toUpperCase(lang);
    let obj = lang ? eventCodeEng : eventCodeRu;

    const keys = document.querySelectorAll(".row__key");
    for (let key in obj) {
      if (lang) {
        if (key.includes("Key")) continue;
        for (let i = 0; i < keys.length; i++) {
          if (keys[i].dataset.eventCode === key && typeof obj[key] === "object") {
            keys[i].innerText = Object.values(obj[key]);
          }
        }
      } else {
        if (key.includes("Key")) continue;
        for (let i = 0; i < keys.length; i++) {
          if (keys[i].dataset.eventCode === key && typeof obj[key] === "object") {
            keys[i].innerText = Object.values(obj[key]);
          }
        }
      }
    }
  }

  shiftLeftUnpress() {
    let lang = JSON.parse(localStorage.getItem("language")) || false;
    this.toLowerCase(lang);
    let obj = lang ? eventCodeEng : eventCodeRu;

    const keys = document.querySelectorAll(".row__key");
    for (let key in obj) {
      if (lang) {
        if (key.includes("Key")) continue;
        for (let i = 0; i < keys.length; i++) {
          if (keys[i].dataset.eventCode === key && typeof obj[key] === "object") {
            keys[i].innerText = Object.keys(obj[key]);
          }
        }
      } else {
        if (key.includes("Key")) continue;
        for (let i = 0; i < keys.length; i++) {
          if (keys[i].dataset.eventCode === key && typeof obj[key] === "object") {
            keys[i].innerText = Object.keys(obj[key]);
          }
        }
      }
    }
  }

  toUpperCase(lang) {
    if (!lang) {
      const keys = document.querySelectorAll(".row__key");
      keys.forEach((el) => {
        if (el.classList.contains("ru-letter")) {
          el.innerText = el.innerText.toUpperCase();
        }
      });
    } else {
      const keys = document.querySelectorAll(".row__key");
      keys.forEach((el) => {
        if (el.classList.contains("eng-letter")) {
          el.innerText = el.innerText.toUpperCase();
        }
      });
    }
  }

  toLowerCase(lang) {
    if (!lang) {
      const keys = document.querySelectorAll(".row__key");
      keys.forEach((el) => {
        if (el.classList.contains("ru-letter")) {
          el.innerText = el.innerText.toLowerCase();
        }
      });
    } else {
      const keys = document.querySelectorAll(".row__key");
      keys.forEach((el) => {
        if (el.classList.contains("eng-letter")) {
          el.innerText = el.innerText.toLowerCase();
        }
      });
    }
  }

  toClearScreen() {
    document.querySelector(`.${this.wrapperClass}`).innerHTML = "";
  }

  shortcutPress(event) {
    if ((event.ctrlKey) && (event.altKey)) {
      this.toClearScreen();
      this.switchLanguage();
    }
  }

  switchLanguage() {
    this.language = !this.language;
    localStorage.setItem("language", this.language);
    this.displayKeyboard(this.language);
  }

  displayText(event) {
    const keys = document.querySelectorAll(".row__key");
    const textarea = document.querySelector(".textarea");

    switch (event.code || event.target.dataset.eventCode) {
    case "Backspace":
      newValue = "";
      this.toBackspace(textarea);
      break;
    case "Tab":
      newValue = " ";
      break;
    case "CapsLock":
      newValue = "";
      break;
    case "Enter":
      newValue = "\n";
      break;
    case "ShiftLeft":
      newValue = "";
      break;
    case "ShiftRight":
      newValue = "";
      break;
    case "ControlLeft":
      newValue = "";
      break;
    case "AltLeft":
      newValue = "";
      break;
    case "MetaLeft":
      newValue = "";
      break;
    case "AltRight":
      newValue = "";
      break;
    case "MetaRight":
      newValue = "";
      break;
    case "Space":
      newValue = " ";
      break;
    case "Delete":
      this.toDel(textarea);
      newValue = "";
      break;
    case "ArrowLeft":
      newValue = "←";
      break;
    case "ArrowRight":
      newValue = "→";
      break;
    case "ArrowDown":
      newValue = "↓";
      break;
    case "ArrowUp":
      newValue = "↑";
      break;
    default:
      for (let i = 0; i < keys.length; i++) {
        if (event.code === keys[i].dataset.eventCode || event.target.dataset.eventCode === keys[i].dataset.eventCode) {
          newValue = keys[i].innerText;
        }
      }
      break;
    }
    this.insertNewText(textarea, newValue);
    newValue = "";
  }

  insertNewText(textarea, newValue) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const before = text.substring(0, start);
    const after = text.substring(end, text.length);
    textarea.value = (before + newValue + after);
    textarea.selectionStart = textarea.selectionEnd = start + newValue.length;
    textarea.focus();
  }

  toBackspace(textarea) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const before = text.substring(0, start - 1);
    const after = text.substring(end, text.length);

    if (start === 0 && start === end) return;
    if (start !== 0) {
      textarea.value = before + after;
      textarea.selectionStart = textarea.selectionEnd = start - 1;
      textarea.focus();
    }
  }

  toDel(textarea) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const before = text.substring(0, start);
    const after = text.substring(end + 1, text.length);

    if (start === text.length && start === end) return;
    if (start !== text.length) {
      textarea.value = before + after;
      textarea.selectionStart = textarea.selectionEnd = start;
      textarea.focus();
    }
  }
}