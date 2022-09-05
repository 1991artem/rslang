import { StartPageListener } from './startPageListener';


export class HomeBtn {
    active(){
        const onClick = (e: Event) => {
            if((<HTMLElement>e.target).className === 'logo-icon' || (<HTMLElement>e.target).innerHTML === 'RSLang' || (<HTMLElement>e.target).innerHTML === 'Home' || (<HTMLElement>e.target).innerHTML === 'About Us'){
                if (StartPageListener.MAIN) {
                    StartPageListener.TEXTBOOK_CONTAINER?.classList.add("display_none");
                    StartPageListener.DICTIONARY_CONTAINER?.classList.add("display_none")
                    StartPageListener.STATISTIC?.classList.add("display_none");
                    StartPageListener.GAME_PAGE_WRAPPER?.classList.add("display_none");
                    StartPageListener.HERO_PAGE?.classList.remove("display_none");
                    StartPageListener.ADVANTAGES_PAGE?.classList.remove("display_none");
                    StartPageListener.ABOUT_PAGE?.classList.remove("display_none");
                  }
            }
        }

        if(document.querySelector('#pageHeader')){
            document.querySelector('#pageHeader')?.addEventListener('click', onClick)
        }
    }
}