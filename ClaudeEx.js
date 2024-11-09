 let currentScore = 0;
        const scoreButton = document.getElementById('scoreButton');

        function checkAnswers() {
            const inputs = document.querySelectorAll('input');
            currentScore = 0;
            
            inputs.forEach(input => {
                const userAnswer = input.value.trim().toLowerCase();
                const correctAnswer = input.dataset.answer.toLowerCase();
                
                if (userAnswer === correctAnswer) {
                    input.style.backgroundColor = '#e8f5e9';
                    input.style.color = '#2e7d32';
                    input.parentElement.querySelector('.result-icon').innerHTML = '✓';
                    input.parentElement.querySelector('.result-icon').style.color = '#2e7d32';
                    currentScore++;
                } else {
                    input.style.backgroundColor = '#ffebee';
                    input.style.color = '#c62828';
                    input.parentElement.querySelector('.result-icon').innerHTML = '✗';
                    input.parentElement.querySelector('.result-icon').style.color = '#c62828';
                }
            });
            
            scoreButton.textContent = `Score: ${currentScore}/10`;
        }
        
        function clearAnswers() {
            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                input.value = '';
                input.style.backgroundColor = '';
                input.style.color = '';
                input.parentElement.querySelector('.result-icon').innerHTML = '';
            });
            currentScore = 0;
            scoreButton.textContent = 'Score: 0/10';
        }
