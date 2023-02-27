import throttle from 'lodash.throttle';

const STOREGE_KEY = 'feedback-form-state';
const formData = {};

const formEl = document.querySelector(".feedback-form");
const textarea = document.querySelector("textarea");
const input = document.querySelector("input");

saveInput();

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    console.log(formData);
    return localStorage.setItem(STOREGE_KEY, JSON.stringify(formData));


}

function onFormSubmit(e) {
  e.preventDefault();
  if (input.value === '' || textarea.value === '') 
  { return alert('Please fill in all the fields!');}
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(STOREGE_KEY);
}

function saveInput() {
 const saveData = localStorage.getItem(STOREGE_KEY);
 const parceData = JSON.parse(saveData);
 console.log(parceData);
 if (saveData) {
   return (
    textarea.value = parceData.message || '',
    input.value = parceData.email || ''
   );
 }
}
