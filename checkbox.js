 function ysCheckAnswers(form,correctAnswers) {
      let inputs = [...form.elements];
      let checkboxInputs = inputs.filter((input) => input.type !== 'button');
      checkboxInputs.forEach((input) => {
        if (input.checked && correctAnswers.some((answer) => answer === input.value)) {
          input.nextElementSibling.style.backgroundColor = 'green';
        }
          if (!input.checked && !correctAnswers.some((answer) => answer === input.value)) {
          input.nextElementSibling.style.backgroundColor = 'red';
        }
                if (input.checked && !correctAnswers.some((answer) => answer === input.value)) {
          input.nextElementSibling.style.backgroundColor = 'red';
          input.nextElementSibling.style.textDecoration = 'underline';
        }
        if (!input.checked && correctAnswers.some((answer) => answer === input.value)) {
          input.nextElementSibling.style.backgroundColor = 'red';
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
