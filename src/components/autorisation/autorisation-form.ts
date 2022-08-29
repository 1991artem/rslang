import { StartPageListener } from "../startPageListener";
import { IUserData } from '../interfaces';
import { API } from '../api';
import '../../styles/sass/pages/_authorization.scss';
import { DataStorage } from '../dataStorage';
import { IUserDataToken } from '../interfaces';


export class AutorisationForm {
    buttonAutorisationForm(){
        StartPageListener.listen();
        this.checkAutorisation();
        this.singinClick();
        const onClick = (event: Event) => {
            event.preventDefault();
            let singinUser: IUserData = {
                name: (<HTMLInputElement>StartPageListener.AUTORISATION_INPUT_EMAIL).value,
                email: (<HTMLInputElement>StartPageListener.AUTORISATION_INPUT_EMAIL).value,
                password: this.verificationLengthPassword((<HTMLInputElement>StartPageListener.AUTORISATION_INPUT_PASSWORD).value),
            }
            if(singinUser.password){
                API.signinUsersFromServer(JSON.stringify(singinUser));
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
    static closeModalWindow(){
        StartPageListener.MODAL_WINDOW?.classList.add('closeModal');
    }
    singinClick(){
        const onClick = () => {
            StartPageListener.MODAL_WINDOW?.classList.remove('closeModal');
        }
        if(StartPageListener.AUTORISATION_SINGIN){
            StartPageListener.AUTORISATION_SINGIN.addEventListener('click', onClick)
        }
    }
    checkAutorisation(){
        let userInfo: string | null = sessionStorage.getItem('user');
        if(userInfo){
            DataStorage.userData = JSON.parse(userInfo) as IUserDataToken;
            if(StartPageListener.AUTORISATION_SINGIN){
                StartPageListener.AUTORISATION_SINGIN.innerHTML = 'LOG OUT';
                StartPageListener.AUTORISATION_SINGIN.classList.add('true');
            }
        }
    }
}