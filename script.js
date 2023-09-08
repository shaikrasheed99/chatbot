const chatInput = document.querySelector(".chat-input textarea");
const sendBtn = document.querySelector(".chat-input span");
const chatBox = document.querySelector(".chatbox");
const chatBotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const maximiseBtn = document.querySelector(".maximise-btn");
const minimiseBtn = document.querySelector(".minimise-btn");

let message;

const createChatElement = (message, className) => {
    const chat = document.createElement("li");
    chat.classList.add("chat", className);
    
    let chatContent
    if (className === "outgoing") {
        chatContent = `<p>${message}</p>`
    } else {
        chatContent = `<span class="material-symbols-outlined">smart_toy</span>`
        chatContent += `<p>${message}</p>`
    }

    chat.innerHTML = chatContent;
    return chat;
}

const handleChat = () => {
    message = chatInput.value.trim();

    const chatLi = createChatElement(message, "outgoing");
    chatBox.appendChild(chatLi);
    chatBox.scrollTo(0, chatBox.scrollHeight);

    setTimeout(() => {
        const think = createChatElement("Thinking....", "incoming");
        chatBox.appendChild(think);
        chatBox.scrollTo(0, chatBox.scrollHeight);
    }, 600);

    chatInput.value = "";
}

sendBtn.addEventListener("click", handleChat);

chatBotToggler.addEventListener("click", () => {
    document.body.classList.add("show-chatbot");
});

closeBtn.addEventListener("click", () => {
    document.body.classList.remove("show-chatbot");
});

maximiseBtn.addEventListener("click", () => {
    document.body.classList.add("fullscreen");
    maximiseBtn.style.opacity = "0";
    minimiseBtn.style.opacity = "1";
});

minimiseBtn.addEventListener("click", () => {
    document.body.classList.remove("fullscreen");
    minimiseBtn.style.opacity = "0";
    maximiseBtn.style.opacity = "1";
});