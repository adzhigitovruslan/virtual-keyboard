export function animation() {
  const keyboard = document.querySelector(".keyboard");
  const rotation = { x: 20, y: 0 };
  let animating = [];
  const keysDown = new Set();
  const keyCodeOfEl = new Map();
  const allKeys = [...document.querySelectorAll(".row__key")];
  allKeys.forEach(el => {
    el.dataset.eventCode && keyCodeOfEl.set(el.dataset.eventCode, el);
  });

  const capsLockKeyIndex = allKeys.indexOf(keyCodeOfEl.get("CapsLock"));

  const arrowKeyIndexes = ["Up", "Left", "Down", "Right"].map(n => allKeys.indexOf(keyCodeOfEl.get(`Arrow${n}`)));

  const macroKeys = [...document.querySelectorAll("[data-macro]")];

  const furthestKeys = {};
  requestAnimationFrame(() => {
    const allKeyBounds = allKeys.map(n => n.getBoundingClientRect());

    for (const macro of macroKeys) {
      const index = allKeys.indexOf(macro);
      const color = macro.dataset.macro;
      furthestKeys[color] = 0;

      const macroBounds = allKeyBounds[index];
      for (let i = 0; i < allKeys.length; i++) {
        const el = allKeys[i];
        if (macro === el) continue;
        const elBounds = allKeyBounds[i];
        const d = dist(
          macroBounds.x + macroBounds.width * 0.5, macroBounds.y + macroBounds.height * 0.5,
          elBounds.x + elBounds.width * 0.5, elBounds.y + elBounds.height * 0.5
        );
        el.macro = el.macro || {};
        el.macro[color] = d;
        if (d > furthestKeys[color]) {
          furthestKeys[color] = d;
        }
      }
    }

  });

  function animateMacro(el) {
    const { macro } = el.dataset;
    const [color, id] = macro.split(":");
    if (!keysDown.has(capsLockKeyIndex)) {
      if (["Space", "ShiftLeft"].includes(id)) {
        return;
      }
    }
    animating.push({ time: performance.now(), macro, color });
    // animating.push({ time: performance.now(), color: macro.split(':')[0] });
    if (animating.length === 1) {
      _draw();
    }
  }

  macroKeys.forEach(el => {
    el.addEventListener("click", () => animateMacro(el));
  });

  function setKeyState(code, state) {
    const el = keyCodeOfEl.get(code);
    if (el) {
      if (state) {
        keysDown.add(allKeys.indexOf(el));
        el.dataset.selected = "true";
      }
      else {
        el.dataset.selected = "false";
        keysDown.delete(allKeys.indexOf(el));
        if (macroKeys.includes(el)) {
          animateMacro(el);
        }
      }
      const [up, left, down, right] = arrowKeyIndexes.map(n => keysDown.has(n));
      if (up) rotation.x += 1;
      if (left) rotation.y += -1;
      if (down) rotation.x += -1;
      if (right) rotation.y += 1;
      keyboard.style.setProperty("--rot-x", `${rotation.x}deg`);
      keyboard.style.setProperty("--rot-y", `${rotation.y}deg`);
    }
  }

  document.addEventListener("keydown", e => {
    if (e.code.startsWith("F") && !isNaN(e.code.slice(1))) {
      return;
    }
    e.preventDefault();
    setKeyState("CapsLock", e.getModifierState("CapsLock"));
    if (e.code === "CapsLock") {
      return;
    }
    setKeyState(e.code, true);
  });
  document.addEventListener("keyup", e => {
    e.preventDefault();
    setKeyState("CapsLock", e.getModifierState("CapsLock"));
    if (e.code === "CapsLock") {
      return;
    }
    setKeyState(e.code, false);
  });


  function distSq(x1, y1, x2, y2) {
    const _x = x2 - x1, _y = y2 - y1;
    return _x * _x + _y * _y;
  }
  function dist(x1, y1, x2, y2) {
    const d = distSq(x1, y1, x2, y2);
    if (d === 0) return 0;
    return Math.sqrt(d);
  }

  function _draw(e) {
    draw(e);
    if (animating.length) {
      requestAnimationFrame(_draw);
    }
    else {
      for (const el of document.querySelectorAll("[data-selected=\"true\"], [data-color]")) {
        el.dataset.selected = "false";
        el.dataset.color = "";
      }
    }
  }

  function draw(e) {
    if (!animating.length) return;
    const actions = Array(allKeys.length).fill(false);
    keysDown.forEach(i => actions[i] = true);
    const dilation = 100;
    for (let i = animating.length - 1; i >= 0; i--) {
      const a = animating[i];
      const time = e - a.time;
      const duration = furthestKeys[a.macro] + dilation;
      if (time >= duration) {
        animating.splice(i, 1);
        return;
      }
      for (let keyIndex = 0; keyIndex < allKeys.length; keyIndex++) {
        const key = allKeys[keyIndex];
        const d = key.macro[a.macro];
        const t = Math.abs(time - d);
        if (t < dilation && !actions[keyIndex]) {
          actions[keyIndex] = a.color;
        }
      }
    }
    for (let i = 0; i < actions.length; i++) {
      const key = allKeys[i];
      if (actions[i]) {
        key.dataset.selected = "true";
        if (typeof actions[i] === "string") {
          key.dataset.color = actions[i];
        }
      }
      else {
        key.dataset.color = "";
        key.dataset.selected = "false";
      }
    }
  }
}