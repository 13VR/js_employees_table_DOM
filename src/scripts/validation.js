'use strict';

// const input = document.querySelectorAll('input');
// const submitButton = document.querySelector('button');

function createErrorElement(inpField) {
  const errorElement = document.createElement('span');

  errorElement.style.color = 'red';
  errorElement.style.fontSize = '10px';
  errorElement.style.marginBottom = '5px';
  errorElement.style.display = 'flex';
  errorElement.style.justifyContent = 'flex-end';

  errorElement.classList.add('error', `error--${inpField.name}`);

  return errorElement;
}

export function validation(inputName, inpTarget, label, submitButton) {
  switch (inputName) {
    case 'name':
    case 'position':
      addErrorMessageString(inpTarget, label, submitButton);
      break;

    case 'age':
      addErrorMessageAge(inpTarget, label, submitButton);
      break;

    default:
      break;
  }
}

function addErrorMessageString(inpField, label, submitButton) {
  const isErrorAdded = label.nextElementSibling.nodeName === 'SPAN';

  const errorElement = isErrorAdded
    ? label.nextElementSibling
    : createErrorElement(inpField);

  if (inpField.value.length < 4) {
    inpField.style.outlineColor = 'red';
    errorElement.textContent = 'Error, it should contain more than 4 letters';
    label.after(errorElement);
    submitButton.disabled = true;
  } else {
    inpField.style.outlineColor = 'gray';
    errorElement.remove();
    submitButton.disabled = false;
  }
}

function addErrorMessageAge(inpField, label, submitButton) {
  const isErrorAdded = label.nextElementSibling.nodeName === 'SPAN';

  const errorElement = isErrorAdded
    ? label.nextElementSibling
    : createErrorElement(inpField);

  if (+inpField.value < 18) {
    errorElement.textContent = 'Error, you should be 18+';
    label.after(errorElement);
    submitButton.disabled = true;
  }

  if (+inpField.value > 90) {
    errorElement.textContent = 'Error, you should be younger';
    label.after(errorElement);
    submitButton.disabled = true;
  }

  if (+inpField.value >= 18 && +inpField.value <= 90) {
    submitButton.disabled = false;
    errorElement.remove();
  }
}
