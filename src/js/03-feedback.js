import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

let dataStorage = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

currentData();

form.addEventListener("input", throttle(currentDataInput,500));
form.addEventListener('submit', onSubmit);


function currentData(e) {

  try {

    dataStorage = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  } catch (error) {
    dataStorage = {};
  }

  if (dataStorage && dataStorage.email) {
    form.email.value = dataStorage.email;
  }
  if (dataStorage && dataStorage.message) {
    form.message.value = dataStorage.message;
  }

}

function currentDataInput() {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      email: form.email.value,
      message: form.message.value,
    })
  );
  dataStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));

}


function onSubmit(event) {

  event.preventDefault();

  if (!form.email.value) {
    alert('Поле електронної пошти є обов`язковим для введення');
    return;
  }

  if (!form.message.value) {
    alert('Поле повідомлення не може бути порожнім. Введіть хоча б 1 символ!');
    return;
  }
  clearFormState();
  console.log(dataStorage);

  form.reset();
}

 function clearFormState() {
    localStorage.removeItem(STORAGE_KEY);
  }