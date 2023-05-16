const inputEl = document.querySelector('#validation-input');
const lengthInput = inputEl.dataset.length;

inputEl.addEventListener('blur', onInputElBlur);

function onInputElBlur (event) {
    if (event.currentTarget.value.length === Number(lengthInput)){
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
    else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    };
};
