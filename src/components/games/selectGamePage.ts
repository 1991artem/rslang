import { StartPageListener } from "../startPageListener";
import { AudioGame } from "./audio/audioGame";
import { SprintGame } from "./sprint/sprintGame";

export class SelectGamePage {
    static build(){
        if(StartPageListener.MAIN){
            const WRAPPER_GAME = document.createElement('div');
            const GAMES = document.createElement('div');
            WRAPPER_GAME.classList.add('display_none');
            GAMES.id = 'game-page';
            WRAPPER_GAME.id = 'game-page-wrapper';
            GAMES.innerHTML = SelectGamePage.buildSprintGame() + SelectGamePage.buildAudioGame();
            StartPageListener.TEXTBOOK_CONTAINER?.after(WRAPPER_GAME);
            WRAPPER_GAME.append(GAMES)
        }
        StartPageListener.listen();
        SelectGamePage.buttonClick();

    }
    static buildSprintGame(): string{
        return `
        <div class="sprintGameInfo">
        <div class="game-title-frame">
        <div class="game-icon-box">
        <img class="sprint-title-icon" src="../../assets/svg/sprint.png" alt="game icon">
        </div>
        <p class="game-title">Sprint</p>
        </div>
        <p class="paragraph-text game-description">Sprint is a practice for repeating the learned words from your vocabulary. Check how much words you can identify by correct meaning in one minute. To give an answer, click on yes/no buttons with the mouse or press the arrow keys. Enjoy!</p>
        <p class="paragraph-text game-description keyboard-control"><span class="keys-control-title">Keyboard control:</span><br> &#x2022; press Y key to select "right", N key to select "wrong"<br> &#x2022;  left/right arrows to move between words<br> &#x2022;  esc to exit the game</p>
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
    static buildAudioGame(){
       return `
        <div class="audioGameInfo">
        <div class="game-title-frame">
        <div class="game-icon-box">
        <img class="sprint-title-icon" src="../../assets/svg/listen.png" alt="game icon">
        </div>
        <p class="game-title">Audio Challenge</p>
        </div>
        <p class="paragraph-text game-description">Check your listening skills, trying to pick the right meaning after hearing a word. Be careful, as you just have one guess. Click on the sound icon, listen to the word, then select the appropriate word from the list and click on it. Enjoy!</p>
        <p class="paragraph-text game-description keyboard-control"><span class="keys-control-title">Keyboard control:</span><br> &#x2022; press the space bar to play the word<br> &#x2022; keys 1 - 5 to select the answer<br> &#x2022; esc to exit the game</p>
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

    static buttonClick(){
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
        document.querySelector('#game-page-wrapper')?.remove();
        SelectGamePage.build();
        if(StartPageListener.MAIN){
            StartPageListener.HERO_PAGE?.classList.add("display_none");
            StartPageListener.ADVANTAGES_PAGE?.classList.add("display_none");
            StartPageListener.ABOUT_PAGE?.classList.add("display_none");
            StartPageListener.GAME_PAGE_WRAPPER?.classList.remove('display_none');
            StartPageListener.STATISTIC?.classList.add('display_none');
            StartPageListener.TEXTBOOK_CONTAINER?.classList.add('display_none');
            }
            const sprintGame: SprintGame = new SprintGame();
            sprintGame.btnClick();
            const audioGame: AudioGame = new AudioGame();
            audioGame.btnClick();
    }
    static playAgain(){
        StartPageListener.listen();
        if(StartPageListener.AGAIN_BTN){
            StartPageListener.AGAIN_BTN?.addEventListener('click', SelectGamePage.showGamePage)
        }
    }
}