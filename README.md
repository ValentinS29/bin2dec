🧠 Bin2Dec — Binary to Decimal Converter

<hr>

Convert binary numbers (base-2) into decimal numbers (base-10) right in your browser. This project is a beginner-friendly JavaScript application built with HTML, CSS, and vanilla JavaScript as part of learning DOM manipulation and basic app logic.

🚀 Demo

<hr>

![Bin2Dec running](./media/demo.jpg)

📌 Overview

<hr>

Bin2Dec is a simple web interface where users can:

<ul>
  <li>Enter a binary number</li>
  <li>Convert it to a decimal number</li>
  <li>See live feedback if the input is invalid</li>
</ul>

It teaches you:

<ul>
  <li>input validation</li>
  <li>basic DOM manipulation</li>
  <li>modular JavaScript file structure</li>
  <li>handling user interactions</li>
</ul>

🧩 Features

<hr>

<ul>
  <li>✔ User input for binary numbers</li>
  <li>✔ Conversion via button click</li>
  <li>✔ Input validation (only 0s and 1s accepted)</li>
  <li>✔ Error messaging</li>
  <li>✔ Clean, minimal UI</li>
</ul>

💡 How It Works

<hr>

This app separates the conversion logic from UI wiring:

bin2dec.js contains pure functions that:

<ul>
  <li>check if a string is valid binary</li>
  <li>convert binary string to decimal number</li>
</ul>

main.js:

<ul>
  <li>selects DOM elements</li>
  <li>attaches event listeners</li>
  <li>calls logic functions and updates display</li>
</ul>

This structure makes the code easy to reason about and maintain.

🛠 How to Use Locally

<hr>

<ul>
  <li>Clone the repo</li>
</ul>

```bash
git clone https://github.com/valentins29/bin2dec.git
```

<ul>
  <li>Open index.html with Live Server in VS Code (or double-click to open in your browser)</li>
  <li>Enter a binary number like <code>1011</code> → you’ll see <code>11</code> as output</li>
</ul>

🧪 Test Cases

<hr>

Valid inputs

<ul>
  <li><code>0</code> → <code>0</code></li>
  <li><code>1</code> → <code>1</code></li>
  <li><code>1011</code> → <code>11</code></li>
  <li><code>0001</code> → <code>1</code></li>
</ul>

Invalid inputs

<ul>
  <li><code>2</code>, <code>10201</code>, <code>10a</code> → error</li>
  <li>empty string → prompt to enter a value</li>
</ul>

These tests help validate edge cases and error handling.

📦 Tools Used

<hr>

<ul>
  <li>✔ Visual Studio Code</li>
  <li>✔ Git &amp; GitHub</li>
  <li>✔ HTML / CSS</li>
  <li>✔ Vanilla JavaScript</li>
</ul>

Libraries: none — this app uses plain JavaScript and web APIs.

🤝 Contributing

<hr>

This project is a learning exercise. You can improve it by:

<ul>
  <li>adding a copy-to-clipboard feature</li>
  <li>showing conversion history</li>
  <li>improving accessibility</li>
  <li>adding animations or visual polish</li>
</ul>

Feel free to fork, experiment, and submit improvements!
