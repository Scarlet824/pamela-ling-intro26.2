let footer = document.createElement("footer");

document.body.appendChild(footer);

const messageSection = document.querySelector("#messages");

messageSection.style.display = "none";

const today = new Date();
const thisYear = today.getFullYear();

footer = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = `\u00A9 Pamela Ling ${thisYear}`;

footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub"];

const skillsSection = document.querySelector("#skills");

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

const messageForm = document.getElementsByName("leave_message")[0];


messageForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);

  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");

  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a><span>${usersMessage}</span>`;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  
  removeButton.addEventListener("click", function(event) {
    const entry = event.target.parentNode;
    entry.remove();
    
    if (messageList.children.length === 0) {
        messageSection.style.display = "none";
    }
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageSection.style.display = "block";

  messageForm.reset();
});