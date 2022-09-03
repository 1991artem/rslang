import { StartPageListener } from "../startPageListener";
import { IUserData } from '../interfaces';
import { API } from '../api';
import '../../styles/sass/pages/_authorization.scss';
import { DataStorage } from '../dataStorage';
import { IUserDataToken } from '../interfaces';


export class AutorisationForm {
    buttonAutorisationForm(){
        StartPageListener.listen();
        AutorisationForm.checkAutorisation();
        this.singinClick();
        const singIn = (event: Event) => {
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
        const singUp = (event: Event) => {
            event.preventDefault();
            let singUpUser: IUserData = {
                name: (<HTMLInputElement>StartPageListener.SINGUP_FORM_NAME).value,
                email: (<HTMLInputElement>StartPageListener.SINGUP_FORM_EMAIL).value,
                password: this.verificationLengthPassword((<HTMLInputElement>StartPageListener.SINGUP_FORM_PASSWORD).value),
            }
            if(singUpUser.password){
                API.createUsersOnServer(JSON.stringify(singUpUser));
            }
        }
        if(StartPageListener.SINGIN){
            StartPageListener.SINGIN.addEventListener('click', singIn)
        }

        if(StartPageListener.SINGUP){
            StartPageListener.SINGUP.addEventListener('click', singUp)
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
        const onClick = (e:Event) => {
            if((e.target as HTMLElement).innerHTML === 'LOG OUT'){
                this.logOut();
            } else {
                StartPageListener.MODAL_WINDOW?.classList.remove('closeModal');
            }
        }
        if(StartPageListener.AUTORISATION_SINGIN){
            StartPageListener.AUTORISATION_SINGIN.addEventListener('click', onClick)
        }
    }
    static checkAutorisation(){
        let userInfo: string | null = localStorage.getItem('user');
        if(userInfo){
            DataStorage.userData = JSON.parse(userInfo) as IUserDataToken;
            if(StartPageListener.AUTORISATION_SINGIN){
                StartPageListener.AUTORISATION_SINGIN.innerHTML = 'LOG OUT';
                StartPageListener.AUTORISATION_SINGIN.classList.add('true');
            }
        }
    }
    logOut(){
        localStorage.clear();
        if(StartPageListener.AUTORISATION_SINGIN){
            StartPageListener.AUTORISATION_SINGIN.innerHTML = 'SIGN IN';
            StartPageListener.AUTORISATION_SINGIN.classList.remove('true');
        }
    }
}