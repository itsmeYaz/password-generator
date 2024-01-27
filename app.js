const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const firstPasswordEl = document.querySelector("#first-password");
const secondPasswordEl = document.querySelector("#second-password");

const passwordBoxOne = document.querySelector("#first-password-box");
const passwordBoxTwo = document.querySelector("#second-password-box");

const passwordLength = document.querySelector("#password-length");
const generateBtn = document.querySelector("#generate-button");

const messageText = document.querySelector("#message-area");

generateBtn.addEventListener("click", () => {
  const lengthValue = passwordLength.value;
  passwordLength.value = "";
  firstPasswordEl.innerHTML = `<span style="color: #55f991;font-size: 15px;">${generatePassword(lengthValue)}</span>`;
  secondPasswordEl.innerHTML = `<span style="color: #55f991;font-size: 15px;">${generatePassword(lengthValue)}</span>`;
})

copyText(passwordBoxOne, firstPasswordEl);
copyText(passwordBoxTwo, secondPasswordEl);

function copyText(box, element) {
  box.addEventListener('click', function() {
    navigator.clipboard.writeText(element.textContent)
      .then(() => {
        messageText.textContent = "password copied!";
        setTimeout(() => {
          messageText.textContent = "";
        }, 800);
      })
      .catch(err => {
        console.error('Error in copying text: ', err);
      });
  });
}

function generatePassword(length) {
  let password = "";
  for(let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length)
    password += characters[randomIndex];
  }
  return password;
}

