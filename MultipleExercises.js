 function checkAnswers(exerciseId) {
    // Get the exercise number from the id
    const exerciseNum = exerciseId.replace('exercise', '');
    const container = document.getElementById(exerciseId);
    const elements = container.querySelectorAll('input, select');
    let score = 0;
    const totalQuestions = elements.length;

    elements.forEach(element => {
        const correct = element.getAttribute('data-answer');
        const userAnswer = element.value.trim().toLowerCase();
        const checkSpan = element.nextElementSibling;

        if (userAnswer === correct) {
            element.className = 'correct';
            checkSpan.innerHTML = '✓';
            checkSpan.style.color = '#4CAF50';
            score++;
        } else {
            element.className = 'incorrect';
            checkSpan.innerHTML = '✗';
            checkSpan.style.color = '#f44336';
        }
    });

    document.getElementById(`score${exerciseNum}`).textContent = `Score: ${score} / ${totalQuestions}`;
}

function clearAnswers(exerciseId) {
    // Get the exercise number from the id
    const exerciseNum = exerciseId.replace('exercise', '');
    const container = document.getElementById(exerciseId);
    const elements = container.querySelectorAll('input, select');
    
    elements.forEach(element => {
        if (element.tagName.toLowerCase() === 'select') {
            element.selectedIndex = 0; // Reset select to first option
        } else {
            element.value = ''; // Clear input value
        }
        element.className = '';
        element.nextElementSibling.innerHTML = '';
    });
    
    document.getElementById(`score${exerciseNum}`).textContent = '';
}
