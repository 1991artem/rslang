import { StartPageListener } from "./startPageListener";

export class NavClick {
    active(){
        const onClick = (e:Event) => {
            if((<HTMLElement>e.target).innerHTML == 'Textbook'){
                document.querySelector('.hero-page')?.classList.add('display_none');
                document.querySelector('.advantages-page')?.classList.add('display_none');
                document.querySelector('.about-page')?.classList.add('display_none');
            } else {
                document.querySelector('.hero-page')?.classList.remove('display_none');
                document.querySelector('.advantages-page')?.classList.remove('display_none');
                document.querySelector('.about-page')?.classList.remove('display_none');
                document.querySelector('.groups')?.classList.add('display_none');
                document.querySelector('.main_container')?.classList.add('display_none');
                document.querySelector('#pagination')?.classList.add('display_none');
            }
        }
        if(StartPageListener.NAV){
            StartPageListener.NAV.addEventListener('click', onClick);
        }
    }
}