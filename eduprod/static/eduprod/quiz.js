document.addEventListener("DOMContentLoaded", function() {
    let currentQuestionIndex = 0;
    const questions = JSON.parse(document.getElementById('content').getAttribute('data-questions'));
    const content = document.getElementsByClassName('content');
    const OrangeImage = document.getElementsByClassName('OrangeImage');

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const question = questions[currentQuestionIndex].fields.question_text;
            const answer = questions[currentQuestionIndex].fields.answer_text;

            // Display question and answer
            content.innerHTML = `<div class='question'>Question: ${question}</div><div class='answer' style='display: none;'>Answer: ${answer}</div>`;

            // Show/hide Orange.png based on the question
            if (question.toLowerCase().includes("color") && question.toLowerCase().includes("this")) {
                OrangeImage.style.display = "block";
            } else {
                OrangeImage.style.display = "none";
            }
        } else {
            content.innerHTML = "No more questions.";
        
        }
    }

    displayQuestion();

    document.addEventListener("click", function() {
            currentQuestionIndex++;
            displayQuestion();
    
        });
});