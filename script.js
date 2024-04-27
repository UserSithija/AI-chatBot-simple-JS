// AI chat-bot

const prompt = document.getElementById("prompt");
const promptInput = document.getElementById("prompt-input");
const promptBtn = document.getElementById("prompt-btn");

// Ai response messages
const responseMessage = {
  hello: "Hello to you!",
  default: "i can't understand ",
  // add more response messages
};

function generateMessage(response) {
  let lowerCaseMessage = response.toLowerCase();
  return responseMessage[lowerCaseMessage] || responseMessage["default"];
}
function displayMessage(sender, message, className) {
  const p = document.createElement("p");
  p.innerText = `${sender} : ${message}`;
  p.className = className;
  prompt.append(p);
}

promptBtn.onclick = function () {
  let user = promptInput.value;
  let userMessage;
  if (user) {
    userMessage = generateMessage(user);
    displayMessage("You", user, "prompt-message");
    setTimeout(() => {
      displayMessage("AI", userMessage, "prompt-response");
    }, 400);
    promptInput.className = "";
    promptInput.value = "";
  } else {
    promptInput.className = "red";
  }
};
