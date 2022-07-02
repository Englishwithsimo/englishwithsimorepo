function ysCheckAnswers(form, correctAnswers) {
      let inputs = [...form.elements];
      let checkboxInputs = inputs.filter((input) => input.type !== 'button');

      // calculate number of correct answers
      let numberOfCorrectAnswers = 0;
      checkboxInputs.forEach((input) => {
        if (input.checked && correctAnswers.some((answer) => answer === input.value)) {
          numberOfCorrectAnswers++;
        }
        if (input.checked && !correctAnswers.some((answer) => answer === input.value)) {
          numberOfCorrectAnswers--;
        }
      });

      // are all the answers correct?
      const areAllAnswersCorrect = numberOfCorrectAnswers === correctAnswers.length;

      // check student answers
      checkboxInputs.forEach((input) => {
        if (areAllAnswersCorrect) {
          if (input.checked && correctAnswers.some((answer) => answer === input.value)) {
            input.nextElementSibling.style.backgroundColor = 'green';
          } else {
            input.nextElementSibling.style.backgroundColor = 'transparent';
          }
        } else {
          if (input.checked && correctAnswers.some((answer) => answer === input.value)) {
            input.nextElementSibling.style.backgroundColor = 'green';
          } else {
            input.nextElementSibling.style.backgroundColor = 'red';
          }
        }
      });
    }
    function ysClearAnswers(form) {
      let inputs = [...form.elements];
      let checkboxInputs = inputs.filter((input) => input.type !== 'button');
      checkboxInputs.forEach((input) => {
        input.checked = false;
        input.nextElementSibling.style.backgroundColor = 'transparent';
      });
    }
