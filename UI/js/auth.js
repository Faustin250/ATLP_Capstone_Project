auth.onAuthStateChanged(user => {
    if (!user) {
        document.querySelector("#logout").style.display = "none";
    }
})
// signup
const signupForm = document.querySelector('#form');

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // get user info
        const email = signupForm['email'].value;
        const password = signupForm['password'].value;
        checkInputs();

        // sign up the user
        auth.createUserWithEmailAndPassword(email, password).then(cred => {

            var modal3 = document.querySelector(".modal3");
            modal3.classList.remove("show-modal");
            signupForm.reset();

            if (email == "fukundimana@gmail.com") {
                window.location = '/UI/html/myAccount.html'
            } else {
                window.location = '/UI/html/index.html'
            }

        });
    });

};

// logout
const logout = document.querySelector('#logout');

if (logout) {
    logout.addEventListener('click', (e) => {
        e.preventDefault();
        auth.signOut().then(() => {
            window.location = '/UI/html/index.html';

        })
    });
};

const loginForm = document.querySelector('#login-form');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // get user info
        const email = loginForm['login-email'].value;
        const password = loginForm['login-password'].value;
        checkInputs();

        auth.signInWithEmailAndPassword(email, password).then(cred => {

            var modal3 = document.querySelector(".modal3");
            modal3.classList.remove("show-modal");
            loginForm.reset();

            if (email == "fukundimana@gmail.com") {
                window.location = '/UI/html/myAccount.html'
            } else {
                window.location = '/UI/html/index.html'
            }
        });
    });
};

function checkInputs() {
    // trim to remove the whitespaces
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}