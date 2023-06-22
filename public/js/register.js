const form = document.querySelector('form');
const emailError = document.querySelector('.email.error');
const passwordError = document.querySelector('.password.error');

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    emailError.textContent = '';
    passwordError.textContent = '';
    const email = form.email.value;
    const password = form.password.value;
    const fullName = form.fullName.value;

    try {
        const res = await fetch('/register', {
            method: 'POST',
            body: JSON.stringify({ email, password, fullName }),
            headers: { 'Content-Type': 'application/json' } 
        });
        const data = await res.json();
        if(data.errors) {
            emailError.textContent = data.errors.email;
            passwordError.textContent = data.errors.password;
        } else {
            location.assign('/search')
        }
        console.log(data.user)
    } catch (err) {
        console.log(err);
    }
})