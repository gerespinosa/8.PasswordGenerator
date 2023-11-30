window.onload = () => {
  const password = document.getElementById("password");
  const copyBtn = document.getElementById("copyBtn");
  let passLength = document.getElementById("passLength");
  const numbersCheck = document.getElementById("numbersCheck");
  let capitalsCheck = document.getElementById("capitalsCheck");
  let smallsCheck = document.getElementById("smallsCheck");
  let symbolsCheck = document.getElementById("symbolsCheck");
  let generateBtn = document.getElementById("generateBtn");

  //The generate() will randomly choose between the four options (numbers, capitals, smalls and symbols) and add it the password innerText
  const generate = () => {
    const passLengthVal = passLength.value;

    for (let i = 0; i < passLengthVal; i++) {
      let a = Math.floor(Math.random() * 4) + 1;
      if (a === 1 && numbersCheck.checked) {
        //Numbers
        let randomNumber = Math.floor(Math.random() * 10);
        password.innerText += randomNumber;
      } else if (a === 2 && capitalsCheck.checked) {
        //Capitals
        let randomCapital = String.fromCharCode(
          97 + Math.floor(Math.random() * 26)
        );
        password.innerText += randomCapital.toUpperCase();
      } else if (a === 3 && smallsCheck.checked) {
        //Smalls
        let randomCapital = String.fromCharCode(
          97 + Math.floor(Math.random() * 26)
        );
        password.innerText += randomCapital.toLowerCase();
      } else if (a === 4 && symbolsCheck.checked) {
        //Symbols
        let symbols = ["@", "#", "€", "%"];
        let randomSymbol = Math.floor(Math.random() * symbols.length);
        const randomizedSymbol = symbols[randomSymbol];
        password.innerText += randomizedSymbol;
      }
    }

    copyBtn.addEventListener("click", copyToClipboard);
  };

  // Once we click on the btn, the pass will be generated, but before it will be cleaned
  generateBtn.addEventListener("click", (e) => {
    password.innerText = "";
    e.preventDefault();
    generate();
  });

  // Added funcionality to get the pass copied into the clipboard
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(password.innerText)
      .then(function () {
        alert("Pass copied!!");
      })
      .catch(function (err) {
        alert("Not able to copy...");
      });
  };
};
