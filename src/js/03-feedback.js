import throttle from 'lodash.throttle';

const form = document.querySelector("feedback-form");
const keyStorage = "feedback-form-state";
let currentData = {
    email: form.email.value,
    message: form.message.value,
};
form.addEventListener("input", throttle(onInput, 500));
const getForm = JSON.parse(localStorage.getItem(keyStorage));
if (getForm) {
    // form.elements.email.value = getForm.email;
    // form.elements.message.value = getForm.message;
    currentData(currentData);
};

function onInput() {
    currentData();
    localStorage.setItem(keyStorage, JSON.stringify(data));
};

form.addEventListener("submit", onSubmit);

function onSubmit() {
    localStorage.removeItem(keyStorage);
    resset(form);
    console.log(data);
}

window.addEventListener("load", onLoad);

function onLoad() {
    localStorage.setItem(keyStorage);
}