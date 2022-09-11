const adForm = document.querySelector('.ad-form');
const adFormFields = document.querySelectorAll('.ad-form__field');
const mapFilters = document.querySelector('.map__filters');
const mapFilterFields = document.querySelectorAll('.map__filter');

// форма активна
export const setFormActive = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormFields.forEach((field) => {
    field.removeAttribute('disabled');
  });
};

// фильтры активны (доступны)
export const setFiltersActive = () => {
  mapFilters.classList.remove('map__filters--disabled');
  mapFilterFields.forEach((field) => {
    field.removeAttribute('disabled');
  });
};

// форма неактивна
export const setFormInactive = () => {
  adForm.classList.add('ad-form--disabled');
  adFormFields.forEach((field) => {
    field.setAttribute('disabled', 'disabled');
  });
};

// фильтры неактивны (недоступны)
export const setFiltersInactive = () => {
  mapFilters.classList.add('map__filters--disabled');
  mapFilterFields.forEach((field) => {
    field.setAttribute('disabled', 'disabled');
  });
};
