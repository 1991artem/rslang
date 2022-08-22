import { StartPageListener } from "../startPageListener";
import { IUserData } from '../interfacec';
import { API } from '../api';
import './autorisation.scss'

export class AutorisationForm {
    buttonAutorisationForm(){
        StartPageListener.listen();
        const onClick = (event: Event) => {
            event.preventDefault();
            let singinUser: IUserData = {
                name: (<HTMLInputElement>StartPageListener.AUTORISATION_INPUT_EMAIL).value,
                email: (<HTMLInputElement>StartPageListener.AUTORISATION_INPUT_EMAIL).value,
                password: this.verificationLengthPassword((<HTMLInputElement>StartPageListener.AUTORISATION_INPUT_PASSWORD).value),
            }
            if(singinUser.password){
                console.log(singinUser)
                API.signinUsersFromServer(JSON.stringify(singinUser))
            }
        }
        if(StartPageListener.AUTORISATION_INPUT_BUTTON){
            StartPageListener.AUTORISATION_INPUT_BUTTON.addEventListener('click', onClick)
        }
    }
    verificationLengthPassword(string:string): string{
        if(string.length < 8){
            (<HTMLInputElement>StartPageListener.AUTORISATION_INPUT_PASSWORD).classList.add('wrongPassword');
            setTimeout(()=>(<HTMLInputElement>StartPageListener.AUTORISATION_INPUT_PASSWORD).classList.remove('wrongPassword'), 1000)
            return '';
        } else {
            return string;
        }
    }
}