import { isValid, convertToDecimal } from "./bin2dec.js";

const input = document.getElementById("binInput");
const convertBtn = document.getElementById("convertBtn");
const output = document.getElementById("output");
const error = document.getElementById("error");
const clearBtn = document.getElementById("clearBtn");

function setError(message) {
  error.textContent = message;
  error.style.color = "red";
}

function setOutput(message) {
  output.textContent = message;
  output.style.color = "black";
}

function convert() {
  const binaryString = input.value.trim();
  if (!isValid(binaryString)) {
    setError("Please enter a valid binary number (only 0s and 1s).");
    setOutput("");
    return;
  }
  const decimalValue = convertToDecimal(binaryString);
  setOutput(`Decimal value: ${decimalValue}`);
  setError("");
}

convertBtn.addEventListener("click", convert);

clearBtn.addEventListener("click", () => {
  input.value = "";
  setOutput("");
  setError("");
});

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    convert();
  }
});

input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    setOutput("");
    setError("");
  }
  convert();
});
