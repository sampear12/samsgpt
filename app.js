document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.querySelector(".generate-button");
    const questionInput = document.querySelector(".question-input");
    const messageBox = document.querySelector(".message-box");

    generateButton.addEventListener("click", function() {
        const question = questionInput.value.trim();
        if (question) {
            // Simulate AI response
            messageBox.innerHTML = `<p>AI Response to: ${question}</p>`;
        } else {
            messageBox.innerHTML = `<p>Please enter a question.</p>`;
        }
    });
});
