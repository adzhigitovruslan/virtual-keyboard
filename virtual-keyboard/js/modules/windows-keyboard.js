export function windowsKeyboard() {

  const body = document.querySelector("body");
  const main = document.createElement("main");
  const keyboard = document.createElement("div");

  main.classList.add("main");
  keyboard.classList.add("keyboard");

  body.appendChild(main);
  main.appendChild(keyboard);

}
