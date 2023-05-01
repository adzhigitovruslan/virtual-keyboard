import { Button } from "./button.js";

const eventCodeEng = {
  "Backquote": "§",
  "Digit1": 1,
  "Digit2": 2,
  "Digit3": 3,
  "Digit4": 4,
  "Digit5": 5,
  "Digit6": 6,
  "Digit7": 7,
  "Digit8": 8,
  "Digit9": 9,
  "Digit0": 0,
  "Minus": "-",
  "Equal": "=",
  "Backspace": "Backspace",
  "Tab": "Tab",
  "KeyQ": "q",
  "KeyW": "w",
  "KeyE": "e",
  "KeyR": "r",
  "KeyT": "t",
  "KeyY": "y",
  "KeyU": "u",
  "KeyI": "i",
  "KeyO": "o",
  "KeyP": "p",
  "BracketLeft": "[",
  "BracketRight": "]",
  "Enter": "Enter",
  "CapsLock": "Capslock",
  "KeyA": "a",
  "KeyS": "s",
  "KeyD": "d",
  "KeyF": "f",
  "KeyG": "g",
  "KeyH": "h",
  "KeyJ": "j",
  "KeyK": "k",
  "KeyL": "l",
  "Semicolon": ";",
  "Quote": "'",
  "Backslash": "\\",
  "ShiftLeft": "Shift",
  "IntlBackslash": "`",
  "KeyZ": "z",
  "KeyX": "x",
  "KeyC": "c",
  "KeyV": "v",
  "KeyB": "b",
  "KeyN": "n",
  "KeyM": "m",
  "Comma": ",",
  "Period": ".",
  "Slash": "/",
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
      const button = new Button({
        eventCode: eventCodeEng[key],
        className: "row__key",
        innerText: eventCodeEng[key],
      });
      keyboardWrapper.append(button.makeButtons());
    }
  }
}