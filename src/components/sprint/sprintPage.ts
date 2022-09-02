import { StartPageListener } from "../startPageListener";

export class SprintPage {
    build(){
        if(StartPageListener.MAIN){
            const SPRINT = document.createElement('div');
            SPRINT.classList.add('display_none');
            SPRINT.id = 'sprint-game'
            SPRINT.innerHTML = `
            <div class="sprintGameInfo">
            <div class="sprint-title-frame">
            <div class="game-icon-box">
            <img class="sprint-title-icon" src="../../assets/svg/sprint.png" alt="game icon">
            </div>
            <p class="game-title">Sprint</p>
            </div>
            <p class="paragraph-text sprint-game-description">Check how much words you can identify by correct meaning in one minute. To give an answer, click on yes/no buttons with the mouse or press the arrow keys.</p>
            <p class="game-level-select">Select the Level</p>
            <div class="sprint-level-box">
            <select class="select-level-sprint" name="level-english">
                <option class="level-option" value="level-1" selected="selected">A1</option>
                <option class="level-option" value="level-2" selected="selected">A2</option>
                <option class="level-option" value="level-3" selected="selected">B1</option>
                <option class="level-option" value="level-4" selected="selected">B2</option>
                <option class="level-option" value="level-5" selected="selected">C1</option>
                <option class="level-option" value="level-6" selected="selected">C2</option>
            </select>
            <button class="sprint-game-btn btn-basic cta-btn">Let's go!</button>
            </div>
            </div>
            `;
            StartPageListener.TEXTBOOK_CONTAINER?.after(SPRINT);
        }
        StartPageListener.listen();
        this.buttonClick();

    }
    buttonClick(){
        const onClick = (e:Event) => {
            if((<HTMLElement>e.target).innerHTML == 'Games'){
                if(StartPageListener.MAIN){
                    StartPageListener.SPRINT?.classList.remove('display_none');
                    StartPageListener.HERO_PAGE?.classList.add("display_none");
                    StartPageListener.ADVANTAGES_PAGE?.classList.add("display_none");
                    StartPageListener.ABOUT_PAGE?.classList.add("display_none");
                    StartPageListener.TEXTBOOK_CONTAINER?.classList.add('display_none');
                    StartPageListener.STATISTIC?.classList.add('display_none');
                    }
            }
        }
        if(StartPageListener.NAV){
            StartPageListener.NAV.addEventListener('click', onClick);
        }
    }
}