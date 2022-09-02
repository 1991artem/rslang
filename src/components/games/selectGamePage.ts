import { StartPageListener } from "../startPageListener";

export class SelectGamePage {
    build(){
        if(StartPageListener.MAIN){
            const WRAPPER_GAME = document.createElement('div');
            const GAMES = document.createElement('div');
            WRAPPER_GAME.classList.add('display_none');
            GAMES.id = 'game-page';
            WRAPPER_GAME.id = 'game-page-wrapper';
            GAMES.innerHTML = this.buildSprintGame() + this.buildAudioGame();
            StartPageListener.MAIN.before(WRAPPER_GAME);
            WRAPPER_GAME.append(GAMES)
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
        <p class="paragraph-text game-description">Sprint is a practice for repeating the learned words from your vocabulary. Check how much words you can identify by correct meaning in one minute. To give an answer, click on yes/no buttons with the mouse or press the arrow keys. Enjoy!</p>
        <p class="game-level-select">Select the Level</p>
        <div class="game-level-box">
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
        <p class="paragraph-text game-description">Check your listening skills, trying to pick the right meaning after hearing a word. Be careful, as you just have one guess. Click on the sound icon, listen to the word, then select the appropriate word from the list and click on it. Enjoy!</p>
        <p class="game-level-select">Select the Level</p>
        <div class="game-level-box">
        <select class="select-level-audio" name="level-english">
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
        <div class="sprint-flex-wrapper">
        <div class="sprint-game-timer"><p></p></div>
        <div class="sprint-game-window-active">
            <div class="sprint-progress"></div>
            <div class="main-sprint">
            <p class="english-word"></p>
            <p class="translate-word"></p>
            </div>
            <div class="btn-sprint">
            <button id="game-btn" class="btn-prev">&#8592;</button>
            <button id="game-btn" class="btn-no">Wrong</button>
            <button id="game-btn" class="btn-yes">Right</button>
            <button id="game-btn" class="btn-next">&#8594;</button>
            </div>
        </div>
        </div>
        `;
        document.querySelector('.sprintGameInfo')?.after(game);
    }

    buildAudioGamePage(){
        let game: HTMLElement = document.createElement('div');
        game.id = 'audio-game-window';
        game.innerHTML = `
        <div class="audio-game-window-active">
            <div class="audio-progress"></div>
            <div class="main-audio">
            <div class="audio-place">
            <img src="../../assets/svg/audio.png" class="audio-game-icon">
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
                SelectGamePage.showGamePage()
            } else {
                StartPageListener.GAME_PAGE?.classList.add('display_none');
            }
        }
        if(StartPageListener.NAV){
            StartPageListener.NAV.addEventListener('click', onClick);
        }
        if(StartPageListener.GAME_ICON){
            StartPageListener.GAME_ICON.addEventListener('click', SelectGamePage.showGamePage);
        }
    }
    static showGamePage(){
        if(StartPageListener.MAIN){
            StartPageListener.MAIN.classList.add('display_none');
            StartPageListener.GAME_PAGE_WRAPPER?.classList.remove('display_none');
            StartPageListener.STATISTIC?.classList.add('display_none');
            document.querySelector('.sprintGameInfo')?.classList.remove('display_none');
            document.querySelector('.audioGameInfo')?.classList.remove('display_none');
            StartPageListener.SPRINT_WINDOW?.classList.add('display_none');
            StartPageListener.AUDIO_WINDOW?.classList.add('display_none');
            }
    }
}