
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

// Hamburger Menu

const hamIcon = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__container');
const navLink = document.querySelectorAll('.nav-link');
const navList = document.querySelector('.nav');
const menuFilter = document.querySelector('.menu-filter');
const signInBtn = document.querySelector('.signIn-btn');

hamIcon?.addEventListener('click', openMenu);
menuFilter?.addEventListener('click', openMenu);


function checkOpenMenu() {
  if(hamIcon?.classList.contains('open')) {
    navList?.addEventListener('click', openMenu);
  }
}

function openMenu() {
  navMenu?.classList.toggle('open');
  hamIcon?.classList.toggle('open');
  document.body.classList.toggle('lock');
  menuFilter?.classList.toggle('menu-filter_open');
  signInBtn?.classList.toggle('signIn-btn_open');
}
