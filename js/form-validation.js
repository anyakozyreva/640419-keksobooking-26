import { showSuccess, showError } from './message.js';

const adForm = document.querySelector('.ad-form');
const adFormSlider = adForm.querySelector('.ad-form__slider');
const adFormTitle = adForm.querySelector('#title');
const adFormPrice = adForm.querySelector('#price');
const adFormType = adForm.querySelector('#type');
const adFormTimeIn = adForm.querySelector('[name="timein"]');
const adFormTimeOut = adForm.querySelector('[name="timeout"]');
const adFormRoomNumber = adForm.querySelector('#room_number');
const adFormCapacity = adForm.querySelector('#capacity');
const adFormCapacityption = adFormCapacity.querySelectorAll('option');
const adFormSubmitButton = adForm.querySelector('.ad-form__button');


// const adFormvalidateTime = () => adFormTimeIn.value === adFormTimeOut.value;
// время заезда и выезда одинаковые

function timeInHander() {
  const timeIn = adFormTimeIn.value;
  adFormTimeOut.value = timeIn;
}

function timeOutHander() {
  const timeOut = adFormTimeOut.value;
  adFormTimeIn.value = timeOut;
}
// здесь сделать pristine прописать классы элемент формы это элемент формы ошибка и текст ошибки

/* const pristine = new Pristine(adFormPristineCLone, {
  classTo: 'ad-form четотам',
  errorTextParent: 'ad-form__item или четотам',
  errorTextClass: 'ad-form__текст ошибки',
});
 */
// колличество комнат и мест синхронятся и по идеи я это делаю с помощью пристин

// btn

const blockSubmitButton = () => {
  adFormSubmitButton.disabled = true;
  adFormSubmitButton.textContent = 'Опубликовывается';
};

const unblockSubmitButton = () => {
  adFormSubmitButton.disabled = false;
  adFormSubmitButton.textContent = 'Публиковать';
};

/* const resetAdForm = () => {
  adFormPristineClone.value = четотам (предполагаю что нужно какое то значение (цены домиков) Эпо умолчанию)
} */

// по идеи дальше мне надо прописать проверки с помощью pristine типа
// const ВалиднаяФорма = pristine.validate();
// if (ВалиднаяФорма) { blockSubmitButton () отправь данные sendData () => {покажи messageSuccess() и unblockSubmitButton()},
// () => {messageError(), unblockSubmitButton}, newForm(event.target);ВалиднаяФорма.reset};
