export function windowsKeyboard() {

  const body = document.querySelector("body");
  const main = document.createElement("main");
  const keyboard = document.createElement("div");

  main.classList.add("main");
  keyboard.classList.add("keyboard");

  body.appendChild(main);
  main.appendChild(keyboard);

  const makeButtons = () => {

    const amountOfButtons = [14, 14, 14, 13, 9];

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

  };
  makeButtons();
}
