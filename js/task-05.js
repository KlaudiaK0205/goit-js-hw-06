const spanOutput = document.querySelector("span#name-output");
const input = document.querySelector("input#name-input")

spanOutput.textContent = "Anonymous";
input.addEventListener("input", (event) => {
      if (!event.currentTarget.value) spanOutput.textContent = "Anonymous";
      else spanOutput.textContent = `${event.currentTarget.value}`;
})

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
      output.textContent = event.currentTarget.value;
});

// DONE