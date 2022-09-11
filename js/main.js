import './api.js';
import './data.js';
/* import { ESCAPE_KEY } from './constants.js'; */
import { setFormActive, setFormInactive, setFiltersActive, setFiltersInactive } from './form.js';
import './data-generation.js';
import './form-validation.js';
import './message.js';
/* import { isEscapeKey } from './util.js'; */
import { initMap } from './map.js';

/* isEscapeKey(); */
setFormInactive();
setFiltersInactive();
initMap();

