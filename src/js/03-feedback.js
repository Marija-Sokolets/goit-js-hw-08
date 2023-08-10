// import throttle from 'lodash.throttle';

// const form = document.querySelector('feedback-form');

// const STORAGE_KEY = 'feedback-form-state';

// currentData();

// const getInput = JSON.parse(localStorage.getItem(STORAGE_KEY));
// if (getInput) {
//     emailInput.value = formData.email || "";
//     textareaInput.value = formData.message || "";
// };

// form.addEventListener('input', throttle(currentDataInput, 500));

// function currentDataInput(e) {
//     data[e.target.name] = e.target.value;
    
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
// };

// form.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//     e.preventDefault();

//     console.log(currentData);
    
//     localStorage.removeItem(STORAGE_KEY);
//     e.currentTarget.reset();
//     // reset(form);
// };

// // function updateOutput() {
// //   output.textContent = localStorage.getItem(STORAGE_KEY) || "";
// // }

// window.addEventListener("load", onLoad);

// function onLoad() {
//     localStorage.setItem(STORAGE_KEY);
// }


// // function currentData() {
// //     const savedMessage = localStorage.getItem(STORAGE_KEY);

// //     if (savedMessage) {
// //         console.log(savedMessage);
// //         form.elements.message.value = savedMessage;
// //     }
// // }



// // // const getForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
// // // if (getForm) {
// // //     // form.elements.email.value = getForm.email;
// // //     // form.elements.message.value = getForm.message;
// // //     currentData(currentData);
// // // };

// // function onInput() {
// //     // const getItem = localStorage.getItem("feedback-form-state");
    
// //     const getForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
// //     email.value = getForm.email || "";
// //     message.value = getForm.message || "";
// // };



// // onInput()
// // form.addEventListener("submit", (e) => {
// //     e.preventDefault();

// // })

// // function onSubmit() {
// //     localStorage.removeItem(STORAGE_KEY);
// //     resset(form);
// //     console.log(data);
// // }

// // window.addEventListener("load", onLoad);

// // function onLoad() {
// //     localStorage.setItem(STORAGE_KEY);
// // }



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
  
  console.log(dataStorage);

  form.reset();
}