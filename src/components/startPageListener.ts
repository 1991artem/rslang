export class StartPageListener {
    static BODY: HTMLElement = document.body;
    static AUTORISATION_INPUT_NAME: HTMLElement | null;
    static AUTORISATION_INPUT_EMAIL: HTMLElement | null;
    static AUTORISATION_INPUT_PASSWORD: HTMLElement | null;
    static AUTORISATION_INPUT_BUTTON: HTMLElement | null;
    static listen(){
        StartPageListener.AUTORISATION_INPUT_NAME = document.getElementById('autorisation-form_login');
        StartPageListener.AUTORISATION_INPUT_EMAIL = document.getElementById('autorisation-form_mail');
        StartPageListener.AUTORISATION_INPUT_PASSWORD = document.getElementById('autorisation-form_password');
        StartPageListener.AUTORISATION_INPUT_BUTTON = document.getElementById('autorisation-form_button');
    }

}