let box = document.querySelector(".box2");

let infoContainer = document.querySelector(".key-info-container");

document.addEventListener("keydown", function (event) {
  if (event.key === `${event.key}`) {
    if (
      event.key === `${event.key}` &&
      event.ctrlKey == true &&
      event.shiftKey == true
    ) {
      console.log("ctrl + shift " + event.key);
      box.innerHTML = `<b>ctrl + shift + ${event.key}</b>`;
    } else if (
      event.key === `${event.key}` &&
      event.altKey == true &&
      event.shiftKey == true
    ) {
      console.log("alt + shift + " + event.key);
      box.innerHTML = `<b>alt + shift + ${event.key}</b>`;
    } else if (event.key === `${event.key}` && event.altKey == true) {
      if (event.key === "alt" && event.altKey == false) {
        console.log("alt " + event.key);
        box.innerHTML = `<b>alt + ${event.key}</b>`;
      }
    } else if (event.key === `${event.key}` && event.shiftKey == true) {
      if (event.key === "shift" && event.shiftKey == false) {
        console.log("shift " + event.key);
        box.innerHTML = `<b>shift + ${event.key}</b>`;
      }
    } else if (event.key === `${event.key}` && event.ctrlKey == true) {
      if (event.key === "ctrl" && event.ctrlKey == false) {
        console.log("ctrl " + event.key);
        box.innerHTML = `<b>ctrl + ${event.key}</b>`;
      }
    } else if (event.key === `${event.key}`) {
      console.log("key pressed " + event.key + " " + event.code);
      box.innerHTML = `<b>${event.key}</b>`;
    }

    console.log("Div created");

    let eventBox = document.createElement("div");
    eventBox.classList.add("key-info-div");
    eventBox.innerHTML = `
    <div class="event">keydown</div>
    <dic class="key">${event.key}</dic>
    <div class="code">${event.code}</div>
  `;

    // console.log(eventBox);
    infoContainer.prepend(eventBox);
  }
});

document.addEventListener("keypress", function (event) {
  if (event.key === `${event.key}`) {
    if (
      event.key === `${event.key}` &&
      event.ctrlKey == true &&
      event.shiftKey == true
    ) {
      console.log("ctrl + shift " + event.key);
      box.innerHTML = `<b>ctrl + shift + ${event.key}</b>`;
    } else if (
      event.key === `${event.key}` &&
      event.altKey == true &&
      event.shiftKey == true
    ) {
      console.log("alt + shift + " + event.key);
      box.innerHTML = `<b>alt + shift + ${event.key}</b>`;
    } else if (event.key === `${event.key}` && event.altKey == true) {
      if (event.key === "alt" && event.altKey == false) {
        console.log("alt " + event.key);
        box.innerHTML = `<b>alt + ${event.key}</b>`;
      }
    } else if (event.key === `${event.key}` && event.shiftKey == true) {
      if (event.key === "shift" && event.shiftKey == false) {
        console.log("shift " + event.key);
        box.innerHTML = `<b>shift + ${event.key}</b>`;
      }
    } else if (event.key === `${event.key}` && event.ctrlKey == true) {
      if (event.key === "ctrl" && event.ctrlKey == false) {
        console.log("ctrl " + event.key);
        box.innerHTML = `<b>ctrl + ${event.key}</b>`;
      }
    } else if (event.key === `${event.key}`) {
      console.log("key pressed " + event.key + " " + event.code);
      box.innerHTML = `<b>${event.key}</b>`;
    }

    console.log("Div created");

    let eventBox = document.createElement("div");
    eventBox.classList.add("key-info-div");
    eventBox.innerHTML = `
    <div class="event">keypress</div>
    <dic class="key">${event.key}</dic>
    <div class="code">${event.code}</div>
  `;

    // console.log(eventBox);
    infoContainer.prepend(eventBox);
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === `${event.key}`) {
    if (
      event.key === `${event.key}` &&
      event.ctrlKey == true &&
      event.shiftKey == true
    ) {
      console.log("ctrl + shift " + event.key);
      box.innerHTML = `<b>ctrl + shift + ${event.key}</b>`;
    } else if (
      event.key === `${event.key}` &&
      event.altKey == true &&
      event.shiftKey == true
    ) {
      console.log("alt + shift + " + event.key);
      box.innerHTML = `<b>alt + shift + ${event.key}</b>`;
    } else if (event.key === `${event.key}` && event.altKey == true) {
      if (event.key === "alt" && event.altKey == false) {
        console.log("alt " + event.key);
        box.innerHTML = `<b>alt + ${event.key}</b>`;
      }
    } else if (event.key === `${event.key}` && event.shiftKey == true) {
      if (event.key === "shift" && event.shiftKey == false) {
        console.log("shift " + event.key);
        box.innerHTML = `<b>shift + ${event.key}</b>`;
      }
    } else if (event.key === `${event.key}` && event.ctrlKey == true) {
      if (event.key === "ctrl" && event.ctrlKey == false) {
        console.log("ctrl " + event.key);
        box.innerHTML = `<b>ctrl + ${event.key}</b>`;
      }
    } else if (event.key === `${event.key}`) {
      console.log("key pressed " + event.key + " " + event.code);
      box.innerHTML = `<b>${event.key}</b>`;
    }

    console.log("Div created");

    let eventBox = document.createElement("div");
    eventBox.classList.add("key-info-div");
    eventBox.innerHTML = `
    <div class="event">keyup</div>
    <dic class="key">${event.key}</dic>
    <div class="code">${event.code}</div>
  `;

    // console.log(eventBox);
    infoContainer.prepend(eventBox);
  }
});
