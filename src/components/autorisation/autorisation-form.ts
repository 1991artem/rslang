import { StartPageListener } from "../startPageListener";
import { IUserData } from '../interfacec';
import { API } from '../api';

export class AutorisationForm {
    buildAutorisationForm(){
        const divAutorisationForm = document.createElement("div")
        StartPageListener.BODY.append(divAutorisationForm);
        divAutorisationForm.classList.add('autorisation-form');
        divAutorisationForm.innerHTML = `<div>
                                        <form class="autorisation-form_form">
                                        <p class="login-input">
                                            <input id="autorisation-form_login" type="text" name="login" placeholder="Логин">
                                        </p>
                                        <p class="mail-input">
                                        <input id="autorisation-form_mail" type="text" name="login" placeholder="Адрес электронной почты">
                                        </p>
                                            <p class="password-input">
                                            <input id="autorisation-form_password" type="password" name="password" placeholder="Пароль">
                                        </p>
                                    </form>
                                    <p class="button-input">
                                    <button id="autorisation-form_button">Login</button>
                                </p>
                                </div>`;
                                    StartPageListener.listen();
                                    this.buttonAutorisationForm();

    }
    buttonAutorisationForm(){
        const onClick = () => {
            let singinUser: IUserData = {
                name: (<HTMLInputElement>StartPageListener.AUTORISATION_INPUT_NAME).value,
                email: (<HTMLInputElement>StartPageListener.AUTORISATION_INPUT_EMAIL).value,
                password: this.verificationLengthPassword((<HTMLInputElement>StartPageListener.AUTORISATION_INPUT_PASSWORD).value),
            }
            if(singinUser.password){
                console.log(singinUser)
                API.signinUsersFromServer(JSON.stringify(singinUser))
            }
        }

        if(StartPageListener.AUTORISATION_INPUT_BUTTON){
            console.log('Hello')
            StartPageListener.AUTORISATION_INPUT_BUTTON.addEventListener('click', onClick)
        }
    }
    verificationLengthPassword(string:string): string{
        if(string.length < 8){
            alert("Введите пароль больше 8 символов");
            return '';
        } else {
            return string;
        }
    }
}