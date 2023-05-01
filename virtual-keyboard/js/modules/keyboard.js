import { Button } from "./button.js";

const eventCodeEng = {
  "Backquote": "§",
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

export class Keyboard {
  constructor(options) {
    this.mainClass = options.mainClass;
    this.wrapperClass = options.wrapperClass;
  }

  displayKeyboard() {
    const body = document.querySelector("body");
    const main = document.createElement("main");
    const keyboardWrapper = document.createElement("div");

    main.classList.add(this.mainClass);
    keyboardWrapper.classList.add(this.wrapperClass);

    body.appendChild(main);
    main.appendChild(keyboardWrapper);

    for (let key in eventCodeEng) {
      if (typeof eventCodeEng[key] === "object") {
        const button = new Button({
          eventCode: key,
          className: "row__key",
          innerText: Object.keys(eventCodeEng[key]),
        });
        keyboardWrapper.append(button.makeButtons());

      } else if (typeof eventCodeEng[key] !== "object") {

        const button = new Button({
          eventCode: key,
          className: "row__key",
          innerText: eventCodeEng[key],
        });

        keyboardWrapper.append(button.makeButtons());
      }
    }

  }

  shiftLetters() {

    document.addEventListener("keydown", (event) => {
      if (event.code === "ShiftLeft") {
        document.querySelector(`.${this.wrapperClass}`).innerHTML = "";

        for (let key in eventCodeEng) {

          if (typeof eventCodeEng[key] === "object") {

            const button = new Button({
              eventCode: key,
              className: "row__key",
              innerText: Object.values(eventCodeEng[key]),
            });

            document.querySelector(`.${this.wrapperClass}`).append(button.makeButtons());
          } else if (typeof eventCodeEng[key] !== "object") {

            const button = new Button({
              eventCode: key,
              className: "row__key",
              innerText: eventCodeEng[key],
            });

            document.querySelector(`.${this.wrapperClass}`).append(button.makeButtons());
          }
        }
      }
    });
    document.addEventListener("keyup", (event) => {
      if (event.code === "ShiftLeft") {
        document.querySelector(`.${this.wrapperClass}`).innerHTML = "";
        for (let key in eventCodeEng) {

          if (typeof eventCodeEng[key] === "object") {
            const button = new Button({
              eventCode: key,
              className: "row__key",
              innerText: Object.keys(eventCodeEng[key]),
            });
            document.querySelector(`.${this.wrapperClass}`).append(button.makeButtons());

          } else if (typeof eventCodeEng[key] !== "object") {

            const button = new Button({
              eventCode: key,
              className: "row__key",
              innerText: eventCodeEng[key],
            });

            document.querySelector(`.${this.wrapperClass}`).append(button.makeButtons());
          }
        }
      }
    });
  }

}