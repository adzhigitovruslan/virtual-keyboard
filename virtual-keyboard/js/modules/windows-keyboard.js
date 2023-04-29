export function windowsKeyboard() {
  const engKeys = [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",
    "Tab",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "\\",
    "del",
    "Capslock",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    ";",
    "'",
    "Enter",
    "L-Shift",
    "\\",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    ".",
    "/",
    "<i class=\"fas fa-play up\"></i>",
    "R-Shift",
    "Ctrl",
    "Win",
    "Alt",
    "Space",
    "Atl",
    "Ctrl",
    "<i class=\"fas fa-play left\"></i>",
    "<i class=\"fas fa-play down\"></i>",
    "<i class=\"fas fa-play right\"></i>",
  ];
  const ruKeys = [
    "ё",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",
    "Tab",
    "й",
    "ц",
    "у",
    "к",
    "е",
    "н",
    "г",
    "ш",
    "щ",
    "з",
    "х",
    "ъ",
    "\\",
    "del",
    "Capslock",
    "ф",
    "ы",
    "в",
    "а",
    "п",
    "р",
    "о",
    "л",
    "д",
    "ж",
    "э",
    "Enter",
    "L-Shift",
    "\\",
    "я",
    "ч",
    "с",
    "м",
    "и",
    "т",
    "ь",
    "б",
    "ю",
    "/",
    "<i class=\"fas fa-play up\"></i>",
    "R-Shift",
    "Ctrl",
    "Win",
    "Alt",
    "Space",
    "Alt",
    "Ctrl",
    "<i class=\"fas fa-play left\"></i>",
    "<i class=\"fas fa-play down\"></i>",
    "<i class=\"fas fa-play right\"></i>",
  ];

  const body = document.querySelector("body");
  const main = document.createElement("main");
  const keyboard = document.createElement("div");

  main.classList.add("main");
  keyboard.classList.add("keyboard");

  body.appendChild(main);
  main.appendChild(keyboard);

  const makeButtons = () => {

    const amountOfButtons = [14, 15, 13, 14, 9];

    for (let i = 0; i < 5; i++) {
      const keyboardRow = document.createElement("div");
      keyboardRow.classList.add("keyboard__row", "row");
      keyboardRow.setAttribute("data-row", amountOfButtons[i]);

      for (let j = 0; j < amountOfButtons[i]; j++) {
        const keyButton = document.createElement("div");
        keyButton.classList.add("row__key", "key");
        keyboardRow.appendChild(keyButton);
      }

      keyboard.appendChild(keyboardRow);
    }

    const insertTextButtons = () => {
      const keys = document.querySelectorAll(".key");
      for (let i = 0; i < keys.length; i++) {
        keys[i].innerHTML = ruKeys[i];

        switch (keys[i].innerText) {
        case "`" || "ё":
          keys[i].dataset.animation = "orange";
          keys[i].classList.add("orange");
          break;
        case "Backspace":
          keys[i].classList.add("grey", "stretch", "size-6");
          break;
        case "del":
          keys[i].dataset.animation = "yellow";
          keys[i].classList.add("yellow", "size-1");
          break;
        case "Tab":
          keys[i].classList.add("grey", "size-3", "stretch");
          break;
        case "Capslock":
          keys[i].classList.add("grey", "size-4", "stretch");
          break;
        case "Enter":
          keys[i].dataset.animation = "enterGreen";
          keys[i].classList.add("green", "stretch", "size-6");
          break;
        case "L-Shift":
          keys[i].dataset.animation = "shift-left-yellow";
          keys[i].classList.add("yellow", "stretch", "size-5");
          keys[i].innerText = "Shift";
          break;
        case "R-Shift":
          keys[i].dataset.animation = "shift-right-yellow";
          keys[i].classList.add("yellow", "stretch", "size-2");
          keys[i].innerText = "Shift";
          break;
        case "Ctrl":
          keys[i].dataset.animation = "ctrl";
          keys[i].classList.add("red", "size-2");
          break;
        case "Win":
          keys[i].dataset.animation = "win";
          keys[i].classList.add("purple", "size-1");
          break;
        case "Alt":
          keys[i].dataset.animation = "alt";
          keys[i].classList.add("blue", "size-1");
          break;
        case "Space":
          keys[i].dataset.animation = "space";
          keys[i].classList.add("blue", "size-7");
          keys[i].innerText = "";
          break;
        default:
          break;
        }
        
      }
    };
    insertTextButtons();

  };
  makeButtons();
}
