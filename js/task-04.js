const value = document.querySelector("#value");
const decrement = document.querySelector('button[data-action="decrement"]');
const increment =document.querySelector('button[data-action="increment"]');

let counterValue = 0;
decrement.addEventListener ("click", BtnDecrement);
increment.addEventListener ("click", BtnIncrement);

function BtnDecrement() {
    counterValue -=1;
    value.textContent =counterValue;
}

function BtnIncrement() {
    counterValue +=1;
    value.textContent =counterValue;
}