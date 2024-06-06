function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatboxMessages = document.getElementById('chatbot-messages');

    if (userInput.trim() !== "") {
        const userMessage = document.createElement('p');
        userMessage.innerHTML = `<strong>Usuario:</strong> ${userInput}`;
        chatboxMessages.appendChild(userMessage);

        const botMessage = document.createElement('p');
        botMessage.innerHTML = `<strong>Bot:</strong> ${getBotResponse(userInput)}`;
        chatboxMessages.appendChild(botMessage);

        chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
        document.getElementById('user-input').value = '';
    }
}

function getBotResponse(input) {
    // Aquí puedes agregar respuestas personalizadas según el input del usuario
    return "¡Gracias por tu mensaje! Pronto te responderemos.";
}
