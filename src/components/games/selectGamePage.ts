import { StartPageListener } from "../startPageListener";

export class SelectGamePage {
    build(){
        if(StartPageListener.MAIN){
            const SPRINT = document.createElement('div');
            SPRINT.classList.add('display_none');
            SPRINT.id = 'game-page';
            SPRINT.innerHTML = this.buildSprintGame() + this.buildAudioGame();
            StartPageListener.MAIN.before(SPRINT);
        }
        StartPageListener.listen();
        this.buildSprintGamePage();
        this.buildAudioGamePage();
        StartPageListener.listen();
        this.buttonClick();

    }
    buildSprintGame(): string{
        return `
        <div class="sprintGameInfo">
        <div class="game-title-frame">
        <div class="game-icon-box">
        <img class="sprint-title-icon" src="../../assets/svg/sprint.png" alt="game icon">
        </div>
        <p class="game-title">Sprint</p>
        </div>
        <p class="paragraph-text game-description">Check how much words you can identify by correct meaning in one minute. To give an answer, click on yes/no buttons with the mouse or press the arrow keys.</p>
        <p class="game-level-select">Select the Level</p>
        <div class="game-level-box">
        <select class="select-level" name="level-english">
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
    }
    buildAudioGame(){
       return `
        <div class="audioGameInfo">
        <div class="game-title-frame">
        <div class="game-icon-box">
        <img class="sprint-title-icon" src="../../assets/svg/listen.png" alt="game icon">
        </div>
        <p class="game-title">Audio Challenge</p>
        </div>
        <p class="paragraph-text game-description">Check your listening skills, trying to pick the right meaning after hearing a word. Be careful, as you just have one guess.</p>
        <p class="game-level-select">Select the Level</p>
        <div class="game-level-box">
        <select class="select-level" name="level-english">
            <option class="level-option" value="level-1" selected="selected">A1</option>
            <option class="level-option" value="level-2" selected="selected">A2</option>
            <option class="level-option" value="level-3" selected="selected">B1</option>
            <option class="level-option" value="level-4" selected="selected">B2</option>
            <option class="level-option" value="level-5" selected="selected">C1</option>
            <option class="level-option" value="level-6" selected="selected">C2</option>
        </select>
        <button class="audio-game-btn btn-basic cta-btn">Let's go!</button>
        </div>
        </div>
        `;
    }
    buildSprintGamePage(){
        let game: HTMLElement = document.createElement('div');
        game.id = 'sprint-game-window';
        game.classList.add('display_none')
        game.innerHTML = `
        <div class="sprint-game-timer"><p></p></div>
        <div class="sprint-game-window-active">
            <div class="sprint-progress"></div>
            <div class="main-sprint">
            <p class="english-word"></p>
            <p class="translate-word"></p>
            </div>
            <div class="btn-sprint">
            <button class="btn-prev"><</button>
            <button class="btn-no">No</button>
            <button class="btn-yes">Yes</button>
            <button class="btn-next">></button>
            </div>
        </div>
        `;
        document.querySelector('.sprintGameInfo')?.after(game);
    }

    buildAudioGamePage(){
        let game: HTMLElement = document.createElement('div');
        game.id = 'audio-game-window';
        game.innerHTML = `
        <div class="audio-game-timer"><p></p></div>
        <div class="audio-game-window-active">
            <div class="audio-progress"></div>
            <div class="main-audio">
            <div class="audio-place">
            <img src="./assets/image/zvuk.png">
            </div>
            <div class="btn-audio">

            </div>
            </div>
        </div>
        `;
        document.querySelector('.audioGameInfo')?.after(game);
    }

    buttonClick(){
        const onClick = (e:Event) => {
            if((<HTMLElement>e.target).innerHTML == 'Games'){
                this.showGamePage()
            } else {
                StartPageListener.GAME_PAGE?.classList.add('display_none');
            }
        }
        if(StartPageListener.NAV){
            StartPageListener.NAV.addEventListener('click', onClick);
        }
        if(StartPageListener.GAME_ICON){
            StartPageListener.GAME_ICON.addEventListener('click', this.showGamePage);
        }
    }
    showGamePage(){
        if(StartPageListener.MAIN){
            StartPageListener.MAIN.classList.add('display_none');
            StartPageListener.GAME_PAGE?.classList.remove('display_none');
            StartPageListener.STATISTIC?.classList.add('display_none');
            document.querySelector('.sprintGameInfo')?.classList.remove('display_none');
            document.querySelector('.audioGameInfo')?.classList.remove('display_none');
            StartPageListener.SPRINT_WINDOW?.classList.add('display_none');
            StartPageListener.AUDIO_WINDOW?.classList.add('display_none');
            }
    }
}