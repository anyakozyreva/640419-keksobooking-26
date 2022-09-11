import { SHOW_TIME } from './constants.js';
import { isEscapeKey } from './util.js';

export const showMessage = (message) => {
  const newMessage = document.createElement('div');
  newMessage.style.margin = '0 auto';
  newMessage.style.padding = '20px 20px';
  newMessage.style.top = '0';
  newMessage.style.right = '0';
  newMessage.style.left = '0';
  newMessage.style.position = 'fixed';
  newMessage.style.zIndex = '1000';
  newMessage.style.backgroundColor = 'yellow';
  newMessage.style.textAlign = 'center';
  newMessage.style.fontSize = '26px';

  newMessage.innerHTML = message;

  document.body.append(newMessage);

  setTimeout(() => {
    newMessage.remove();
  }, SHOW_TIME);
};

const messageSuccessTemplate = document.querySelector('#success').content.querySelector('.success');
const messageSuccessClone = messageSuccessTemplate.cloneNode(true);

const messageErrorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessageClone = messageErrorTemplate.cloneNode(true);

const errorButton = errorMessageClone.querySelector('.error__button');

errorButton.addEventListener('click', () => {
  errorMessageClone.remove();
});


// показать сообщение success
/* export const showSuccess = () => {
  messageSuccess.addEventListener('click', () =>
    messageSuccess.remove()
  );
}
 */
export const showSuccess = () => {
  document.body.append(messageSuccessClone);
  messageSuccessClone.addEventListener('click', () =>
    messageSuccessClone.remove());
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      messageSuccessClone.remove();
    }
  });
  setTimeout(() => {
    messageSuccessClone.remove();
  }, SHOW_TIME);
};

export const showError = () => {
  document.body.append(errorMessageClone);
};




/* export const alertSuccess = () => {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const successElement = successTemplate.cloneNode(true);
  document.body.append(successElement);

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      successElement.remove();
    }
  });

  window.onclick = () => {
    successElement.remove();
  };
};

export const alertError = () => {
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorMessage = document.querySelector('#error').content.querySelector('.error__message');
  const errorButton = document.querySelector('#error').content.querySelector('.error__button');

  const errorElement = errorTemplate.cloneNode(false);
  const errorMessageItem = errorMessage.cloneNode(true);
  const errorBtn = errorButton.cloneNode(true);
  document.body.append(errorElement);
  errorElement.appendChild(errorMessageItem);
  errorElement.appendChild(errorBtn);

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      errorElement.remove();
    }
  });

  errorBtn.onclick = () => {
    errorElement.remove();
  };

  window.onclick = () => {
    errorElement.remove();
  };
};

export const getAlertError = () => {
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorMessage = document.querySelector('#error').content.querySelector('.error__message');
  const errorButton = document.querySelector('#error').content.querySelector('.error__button');

  const errorElement = errorTemplate.cloneNode(false);
  const errorMessageItem = errorMessage.cloneNode(true);
  const errorBtn = errorButton.cloneNode(true);

  document.body.append(errorElement);

  errorElement.appendChild(errorMessageItem);
  errorElement.appendChild(errorBtn);
  errorMessage.textContent = 'Data error';
  errorBtn.textContent = 'Close';

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      errorElement.remove();
    }
  });

  errorBtn.onclick = () => {
    errorElement.remove();
  };

  window.onclick = () => {
    errorElement.remove();
  };
};

export const blockButton = (btn) => {
  btn.disabled = true;
  btn.textContent = 'Publishing...';
};

export const unblockButton = (btn) => {
  btn.disabled = false;
  btn.textContent = 'Publish...';
}; */

/* const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

const errorMessage = () => {
  const messageContainer = errorTemplate.cloneNode('true');

} */

/* // succes & error
const success = document.querySelector('#success').content.querySelector('.success');
const error = document.querySelector('#error').content.querySelector('.error');

const succesKey = (event) => {
  if(isEscapeKey(event)) {
    closeErrorMessage();
  }
};

const escSuccessMessage = () => {
  const successMessage = document.querySelector('.success');
  successMessage.parentNode.removeChild(successMessage);
  document.removeEventListener('keydown', successKey);
  successMessage.removeEventListener('click', onSuccessPopupClick);
};

 */
