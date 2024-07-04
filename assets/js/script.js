// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
    
    // Select all category buttons from the legend
    const legendButtons = document.querySelectorAll(".category-button");
    
    // Ref to the container where questions will be displayed
    const questionsContainer = document.getElementById("questions");
    
    // Reference to the modal and its content
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    
    // Reference to the close button in the modal
    const closeButton = document.querySelector(".close");
    
    // Initialize the score
    let score = 0;
    let incorrectScore = 0;

    // Add event listener to each category button
    legendButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category"); // Get category ID from data attribute
            const amount = 1; // Number of questions to fetch per click

            // Fetch trivia questions from the Open Trivia Database API
            fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&type=multiple`)
                .then(response => response.json())
                .then(data => {
                    displayQuestions(data.results);
                })
                .catch(error => {
                    console.error('Error fetching trivia questions:', error);
                });
        });
    });

    function displayQuestions(questions) {
        questionsContainer.innerHTML = '';
        questions.forEach(question => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');
            questionElement.innerHTML = `
                <h3>${question.category}</h3>
                <p>${question.question}</p>
                <form class="answers">
                    ${shuffle([...question.incorrect_answers, question.correct_answer]).map(answer => `
                        <label>
                            <input type="radio" name="answer" value="${answer}">
                            ${answer}
                        </label>
                    `).join('')}
                    <button type="submit">Submit Answer</button>
                </form>
            `;
            // Append the question div to the container
            questionsContainer.appendChild(questionElement); 
            
            // Add event listener to the answer submission form
            const answerForm = questionElement.querySelector('.answers');
            answerForm.addEventListener('submit', event => {
                event.preventDefault();
                const selectedAnswer = answerForm.querySelector('input[name="answer"]:checked');
                if (selectedAnswer) {
                    const answerText = selectedAnswer.value;
                    const correctAnswer = question.correct_answer;
                    const isCorrect = answerText === correctAnswer;
                    showFeedback(isCorrect); // Show feedback based on the selected answer
                    if (isCorrect) {
                        incrementScore();
                    } else {
                        incrementWrongAnswer();
                    }
                }
            });
        });
    }

    // Function to display feedback modal based on the correctness of the answer
    function showFeedback(isCorrect) {
        modalText.textContent = isCorrect ? "Congratulations! What a smart arse!!" : "Noooooooo!! I think somebody needs to go back to school!";
        modal.style.display = "block"; // Display the modal
    }

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Shuffle function to randomize answers
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Function to increment the score
    function incrementScore() {
        score++;
        document.getElementById("score").innerText = score;
    }

    // Function to increment the wrong answer counter
    function incrementWrongAnswer() {
        incorrectScore++;
        document.getElementById("incorrect").innerText = incorrectScore;
    }

    // Spin wheel functionality
    let currentRotation = 0;
    
    function spinWheel() {
        const wheel = document.getElementById('wheel');
        const randomRotation = 1080 + Math.floor(Math.random() * 360);
        currentRotation += randomRotation;
        
        wheel.style.transition = 'transform 3s ease-out';
        wheel.style.transform = `rotate(${currentRotation}deg)`;
        
        // Reset rotation after spinning
        setTimeout(() => {
            wheel.style.transition = 'none';
            wheel.style.transform = `rotate(${currentRotation % 360}deg)`;
            currentRotation = currentRotation % 360;
        }, 3000);
    }

    // Add event listener to the spin button
    const spinButton = document.getElementById('spin-button');
    spinButton.addEventListener('click', spinWheel);
});
