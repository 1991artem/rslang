
export class ModalWindow {
  singin: boolean;
  constructor(){
    this.singin = true;
  }
  active(){
    const login = () => {
      console.log('click');
      if(this.singin){
        (document.querySelector(".login-form-container") as HTMLElement).style.cssText = "display: none;";
        (document.querySelector(".signup-form-container") as HTMLElement).style.cssText = "display: block;";
        this.singin = false;
      } else {
        (document.querySelector(".signup-form-container") as HTMLElement).style.cssText = "display: none;";
        (document.querySelector(".login-form-container") as HTMLElement).style.cssText = "display: block;";
        this.singin = true;
      }
    }
        document.querySelector('.signup-link')?.addEventListener('click', login);
  }
}


