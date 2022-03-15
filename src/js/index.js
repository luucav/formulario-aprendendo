const init = () => {

    const validateEmail = (event) => {
        const input = event.currentTarget;
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        const emailTest = regex.test(input.value);
        
        if(emailTest) {
            submitButton.setAttribute('disabled', 'disabled');
            input.nextElementSibling.classlist.add('error');
        } else {
            submitButton.removeAttribute('disabled');
            input.nextElementSibling.classlist.remove('error');
        }
    }




    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login__submit');

    inputEmail.addEventListener('input', validateEmail);

    if(submitButton){
        submitButton.addEventListener['click'], (event) => {
            event.preventDefaut();

            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value,
                })
            }).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data)
            })
        }
    }
}

window.onload = init;