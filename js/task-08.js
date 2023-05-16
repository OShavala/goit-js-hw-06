
const loginFormEl= document.querySelector('.login-form');
loginFormEl.addEventListener('submit', onLoginFormElSubmit);

function onLoginFormElSubmit (event) {
    event.preventDefault();
    
    const {
        elements: {email, password}
      } = event.currentTarget;
    
      if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields in the form!");
    }
    const formData = new FormData(event.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    console.log(userData);

    loginFormEl.reset();
};
