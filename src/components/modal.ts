
export class ModalWindow {
  singin: boolean;
  constructor(){
    this.singin = true;
  }
  active(){
    const login = (e: Event) => {
      if((e.target as HTMLElement).id === 'sing-up'){
        (document.querySelector(".login-form-container") as HTMLElement).style.cssText = "display: none;";
        (document.querySelector(".signup-form-container") as HTMLElement).style.cssText = "display: block;";
        this.singin = false;
      }
      if((e.target as HTMLElement).id === 'sing-in') {
        (document.querySelector(".signup-form-container") as HTMLElement).style.cssText = "display: none;";
        (document.querySelector(".login-form-container") as HTMLElement).style.cssText = "display: block;";
        this.singin = true;
      }
    }
        document.querySelector('.modal-content')?.addEventListener('click', login);
  }
}


