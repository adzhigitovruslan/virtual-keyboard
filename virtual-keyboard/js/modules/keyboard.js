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
  "Backspace": "Backspace",
  "Tab": "Tab",
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
  "Enter": "Enter",
  "CapsLock": "Capslock",
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
  "ShiftLeft": "Shift",
  "IntlBackslash": { "`": "~" },
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
  "ShiftRight": "Shift",
  "ControlLeft": "Control",
  "AltLeft": "Alt",
  "MetaLeft": "Meta",
  "Space": "space",
  "MetaRight": "Meta",
  "AltRight": "Alt",
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
  "Backspace": "Backspace",
  "Tab": "Tab",
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
  "Enter": "Enter",
  "CapsLock": "Capslock",
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
  "ShiftLeft": "Shift",
  "IntlBackslash": { "]": "[" },
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
  "ShiftRight": "Shift",
  "ControlLeft": "Control",
  "AltLeft": "Alt",
  "MetaLeft": "Meta",
  "Space": "space",
  "MetaRight": "Meta",
  "AltRight": "Alt",
  "ArrowLeft": "",
  "ArrowDown": "",
  "ArrowRight": "",
};

export class Keyboard {
  constructor(options) {
    this.mainClass = options.mainClass;
    this.wrapperClass = options.wrapperClass;
    this.switch = options.language;
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

  displayKeyboard(language) {
    this.switch = language === "eng" ? eventCodeEng : language === "ru" ? eventCodeRu : undefined;

    for (let key in this.switch) {
      if (typeof this.switch[key] === "object") {
        const button = new Button({
          eventCode: key,
          className: "row__key",
          innerText: Object.keys(this.switch[key]),
        });
        document.querySelector(`.${this.wrapperClass}`).append(button.makeButtons());

      } else if (typeof this.switch[key] !== "object") {

        const button = new Button({
          eventCode: key,
          className: "row__key",
          innerText: this.switch[key],
        });

        document.querySelector(`.${this.wrapperClass}`).append(button.makeButtons());
      }
    }
  }

  shiftLetters() {
    document.addEventListener("keydown", (event) => {

      if (event.code === "ShiftLeft") {
        this.toClearScreen();

        for (let key in this.switch) {

          if (typeof this.switch[key] === "object") {

            const button = new Button({
              eventCode: key,
              className: "row__key",
              innerText: Object.values(this.switch[key]),
            });

            document.querySelector(`.${this.wrapperClass}`).append(button.makeButtons());
          } else if (typeof this.switch[key] !== "object") {

            const button = new Button({
              eventCode: key,
              className: "row__key",
              innerText: this.switch[key],
            });

            document.querySelector(`.${this.wrapperClass}`).append(button.makeButtons());
          }
        }
      }
    });
    document.addEventListener("keyup", (event) => {
      if (event.code === "ShiftLeft") {
        
        this.toClearScreen();

        for (let key in this.switch) {

          if (typeof this.switch[key] === "object") {
            const button = new Button({
              eventCode: key,
              className: "row__key",
              innerText: Object.keys(this.switch[key]),
            });
            document.querySelector(`.${this.wrapperClass}`).append(button.makeButtons());

          } else if (typeof this.switch[key] !== "object") {

            const button = new Button({
              eventCode: key,
              className: "row__key",
              innerText: this.switch[key],
            });

            document.querySelector(`.${this.wrapperClass}`).append(button.makeButtons());
          }
        }
      }
    });
  }

  toClearScreen() {
    document.querySelector(`.${this.wrapperClass}`).innerHTML = "";
  }
}