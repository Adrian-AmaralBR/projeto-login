const init = () => {

    const validateEmail = (event) => {
        const input = event.currentTarget;
        const regex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
        const emailtest = regex.test(input.value);

        if (!emailtest) {
            submitButton.setAttribute('disabled', 'disabled');
            input.nextElementSibling.ClassList.add('error');
        } else {
            submitButton.setAttribute('disabled');
            input.nextElementSibling.ClassList.remove('error');
        }
    } 

    const inputEmail = document.querySelector(`input[type="email"]`);
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login_submit')

    inputEmail.addEventListener('input', validateEmail)

    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            fetch('https://reqres.in/api/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify ({
                    email: inputEmail.value,
                    password: inputPassword.value,
                })
            }).then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
            }) 
        })
    }
}

window.onload = init;