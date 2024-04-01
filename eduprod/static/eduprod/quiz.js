document.addEventListener("DOMContentLoaded", function() {
    let currentQuestionIndex = 0;
    const questions = JSON.parse(document.getElementById('content').getAttribute('data-questions'));
    const content = document.getElementById('content');
    const OrangeImage = document.getElementById('OrangeImage');
    const PurpleImage = document.getElementById('PurpleImage');
    const YellowImage = document.getElementById('YellowImage');
    const PencilImage = document.getElementById('PencilImage');
    const nextQuestionBtn = document.getElementById('nextQuestionBtn'); // Get the button by its ID
    const userAnswer = document.getElementById('userAnswer');
    
    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const question = questions[currentQuestionIndex].fields.question_text;
            const answer = questions[currentQuestionIndex].fields.answer_text;

            // Display question and answer
            content.innerHTML = `<div class='question'>Question: ${question}</div><div class='answer' style='display: none;'>Answer: ${answer}</div>`;

            console.log("Current Question:", question);

             // Show/hide images based on the question
            OrangeImage.style.display = "none"; // Hide Orange image by default
            PurpleImage.style.display = "none"; // Hide Purple image by default
            YellowImage.style.display = "none"; // Hide Yellow image by default
            PencilImage.style.display = "none"; // Hide Pencil Image by defualt

            // Show/hide Orange/Purple images based on the question
            if (question.toLowerCase().includes("what color is this?")) {
                OrangeImage.style.display = "block"; // Show Orange image for this question
            } else if (question.toLowerCase().includes("is this the color purple?")) {
                PurpleImage.style.display = "block"; // Show Purple image for this question
            } else if (question.toLowerCase().includes("is this the color red?")) {
                YellowImage.style.display = "block"; // Show Yellow image for this question
            } else if (question.toLowerCase().includes("what color is this pencil?")) {
                PencilImage.style.display = "block"; // Show Pencil image for this question
            }
            
        } else {
            content.innerHTML = "No more questions.";
            OrangeImage.style.display = "none"; 
            PurpleImage.style.display = "none"; 
            YellowImage.style.display = "none"; 
            PencilImage.style.display = "none"; 
            nextQuestionBtn.style.display = "none";
            userAnswer.style.display = "none";
        }
    }

    displayQuestion();

    // Add event listener to the "Next Question" button
    nextQuestionBtn.addEventListener("click", function() {
        currentQuestionIndex++;
        displayQuestion();
    
    });
});