import { InputCommon } from './common/inputCommon.js'
import { setScreen } from './index.js'
import { Login } from './login.js'
import { InputCheckBox } from './common/inputCheckBox.js'

class Register {
    container = document.createElement("div");
    title = document.createElement("h3");

    form = document.createElement("form");
    inputName = new InputCommon("Name: ", "name", "Enter your name", "inputName");
    inputEmail = new InputCommon("Email: ", "email", "Enter your email", "inputEmail");
    inputPassword = new InputCommon("Password: ", "password", "Enter your password", "inputPassword");
    inputConfirmPassword = new InputCommon("Confirm password: ", "password", "Enter your confirm password", "inputConfirmPassword");
     
    lableCheckBox = document.createElement("span");
    inputCheckBox = new InputCheckBox("checkbox", "remember", "Agree");

    actionContainer = document.createElement("div");
    btnLogin = document.createElement("button");
    btnRegister = document.createElement("button");

    constructor() {
        this.title.innerHTML = "Register";
        this.title.classList.add("title");

        this.container.appendChild(this.form);
        this.lableCheckBox.innerHTML = "I agree all statement in terms of service";
        this.lableCheckBox.classList.add("tick");

        this.form.appendChild(this.title);
        this.form.appendChild(this.inputName.container);
        this.form.appendChild(this.inputEmail.container);
        this.form.appendChild(this.inputPassword.container);
        this.form.appendChild(this.inputConfirmPassword.container);

        this.form.classList.add("form");
        this.inputName.container.classList.add("text");
        this.inputEmail.container.classList.add("text");
        this.inputPassword.container.classList.add("text");
        this.inputConfirmPassword.container.classList.add("text");

        this.form.appendChild(this.inputCheckBox.container);
        this.inputCheckBox.container.appendChild(this.lableCheckBox);
        this.inputCheckBox.container.classList.add("tick");

        this.btnLogin.innerHTML = "login";
        this.btnRegister.innerHTML = "Register";
        this.btnLogin.classList.add("button");
        this.btnRegister.classList.add("button");

        this.btnLogin.addEventListener("click", (e) => {
            e.preventDefault();
            const loginScreen = new Login();
            setScreen(loginScreen.container);
        })
        this.btnRegister.addEventListener("click", (e) => {
            e.preventDefault();

            const nameValue = this.inputName.getValue();
            if (!nameValue) {
                this.inputName.setErrorMessage("Name cannot be empty");
            }else {
                this.inputName.setErrorMessage("");
            }
            
            const emailValue = this.inputEmail.getValue();

            if (!emailValue) {
                this.inputEmail.setErrorMessage("Email cannot be empty");
            } else {
                this.inputEmail.setErrorMessage("");
            }

            const passwordValue = this.inputPassword.getValue();

            if (!passwordValue) {
                this.inputPassword.setErrorMessage("Password cannot be empty");
            }else {
                this.inputPassword.setErrorMessage("");
            }
            console.log("Register");
        })

        this.form.appendChild(this.btnLogin);
        this.form.appendChild(this.btnRegister);
    }
}

export { Register }