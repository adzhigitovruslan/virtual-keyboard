class ButtonOptions {
  constructor(options) {
    this.className = options.className;
    this.eventCode = options.eventCode;
    this.innerText = options.innerText;
    this.activeClass = options.activeClass;
  }

  makeButtons() {
    const ruArray = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    const engArray = "abcdefghijklmnopqrstuvwxyz";

    const button = document.createElement("button");
    button.classList.add(this.className);
    button.dataset.eventCode = this.eventCode;
    button.innerText = this.innerText;

    let letter = this.innerText; 
    if(ruArray.includes(String(letter).toLowerCase()) && !button.dataset.eventCode.includes("Arrow") && !button.dataset.eventCode.includes("Space")) {
      button.classList.add("ru-letter");
    }
    if(engArray.includes(String(letter).toLowerCase()) && !button.dataset.eventCode.includes("Arrow") && !button.dataset.eventCode.includes("Space")) {
      button.classList.add("eng-letter");
    }

    switch (this.eventCode) {
    case "Escape":
      button.classList.add("orange");
      button.dataset.macro = "orange";
      break;
    case "Backspace":
      button.classList.add("grey", "stretch");
      break;
    case "Tab":
      button.classList.add("grey", "stretch");
      break;
    case "CapsLock":
      button.classList.add("grey", "stretch");
      break;
    case "Enter":
      button.classList.add("green", "stretch");
      button.dataset.macro = "green:Enter";
      break;
    case "ShiftLeft":
      button.classList.add("yellow", "size-4", "stretch", this.activeClass);
      button.dataset.macro = "yellow:ShiftLeft";
      break;
    case "ShiftRight":
      button.classList.add("yellow", "size-1", "stretch");
      button.dataset.macro = "yellow:ShiftRight";
      break;
    case "ControlLeft":
      button.classList.add("red", "size-1");
      button.dataset.macro = "red:ControlLeft";
      break;
    case "MetaLeft":
      button.classList.add("purple", "size-1");
      button.dataset.macro = "purple:MetaLeft";
      break;
    case "MetaRight":
      button.classList.add("green", "size-1");
      button.dataset.macro = "purple:MetaRight";
      break;
    case "ArrowUp":
      button.innerHTML = "<i class=\"icon-navigation-arrow arrow-up\"></i>";
      break;
    case "ArrowRight":
      button.innerHTML = "<i class=\"icon-navigation-arrow\"></i>";
      break;
    case "ArrowDown":
      button.innerHTML = "<i class=\"icon-navigation-arrow arrow-down\"></i>";
      break;
    case "ArrowLeft":
      button.innerHTML = "<i class=\"icon-navigation-arrow arrow-left\"></i>";
      break;
    case "AltLeft":
      button.classList.add("blue", "size-1");
      button.dataset.macro = "blue:AltLeft";
      break;
    case "Space":
      button.classList.add("empty", "size-7");
      button.dataset.macro = "default:Space";
      break;
    case "AltRight":
      button.classList.add("blue", "size-1", "stretch");
      button.dataset.macro = "blue:AltRight";
      break;
    case "ContextMenu":
      button.classList.add("purple", "size-1", "stretch");
      button.dataset.macro = "purple:ContextMenu";
      break;
    case "Delete":
      button.classList.add("purple", "size-1", "stretch");
      button.dataset.macro = "purple:Delete";
      break;

    default:
      break;
    }

    return button;
  }
}

export class Button extends ButtonOptions {
  constructor(options) {
    super(options);
  }
}