export class StartPageListener {
    static BODY: HTMLElement = document.body;
    static AUTORISATION_SINGIN: HTMLElement | null;
    static AUTORISATION_INPUT_EMAIL: HTMLElement | null;
    static AUTORISATION_INPUT_PASSWORD: HTMLElement | null;
    static AUTORISATION_INPUT_BUTTON: HTMLElement | null;
    static MODAL_WINDOW: HTMLElement | null;
    static MAIN: HTMLElement | null;
    static STATISTIC: HTMLElement | null;
    static NAV: HTMLElement | null;
    static SPRINT: HTMLElement | null;
    static TIMER: HTMLElement | null;
    static SPRINT_WINDOW: HTMLElement | null;
    static SINGUP: HTMLElement | null;
    static SINGIN: HTMLElement | null;
    static SINGUP_FORM_NAME: HTMLElement | null;
    static SINGUP_FORM_EMAIL: HTMLElement | null;
    static SINGUP_FORM_PASSWORD: HTMLElement | null;

    static listen(){
        StartPageListener.AUTORISATION_SINGIN = document.getElementById('autorisation-button');
        StartPageListener.SINGUP = document.getElementById('btn-singup');
        StartPageListener.SINGIN = document.getElementById('btn-singin');
        StartPageListener.AUTORISATION_INPUT_EMAIL = document.getElementById('autorisation-form_mail');
        StartPageListener.AUTORISATION_INPUT_PASSWORD = document.getElementById('autorisation-form_password');
        StartPageListener.SINGUP_FORM_NAME = document.getElementById('singup-form-name');
        StartPageListener.SINGUP_FORM_EMAIL = document.getElementById('singup-form-email');
        StartPageListener.SINGUP_FORM_PASSWORD = document.getElementById('singup-form-password');
        StartPageListener.MODAL_WINDOW = document.getElementById('openModal');
        StartPageListener.MAIN = document.querySelector('.main');
        StartPageListener.STATISTIC = document.getElementById('statistic');
        StartPageListener.NAV = document.querySelector('.nav');
        StartPageListener.SPRINT = document.getElementById('sprint-game');
        StartPageListener.TIMER = document.querySelector('.sprint-game-timer');
        StartPageListener.SPRINT_WINDOW = document.querySelector('.sprint-game-window-active');
    }

}