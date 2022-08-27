import { API } from '../api';
import { IWordsData } from 'src/components/interfaces';

export class SprintGame {
    wordArray: IWordsData[] | null;
    constructor(){
        this.wordArray = null
    }
    btnClick(){
        const onClick = () => {
            this.startGame();
        }
        if(document.querySelector('.sprint-game-btn')){
            document.querySelector('.sprint-game-btn')?.addEventListener('click', onClick)
        }
    }
    startGame(){
        console.log('click')
        let selected: HTMLSelectElement | null = document.querySelector('.select-level-sprint');
        if(selected){
            let level: number = Number(selected.value.split('-')[1]);
            let page: number = Math.floor(Math.random()*10);
            (async () => {
                this.wordArray = await API.loadWordsFromServer(level-1, page) as IWordsData[];
            })();
            this.buildGamePage();
        }
    }
    buildGamePage(){
        console.log('build')

        let game = document.createElement('div');
        game.id = 'sprint-game-window';
        game.innerHTML = `
        <div class="sprint-game-window-active">

        </div>
        `;
        document.querySelector('.sprintGameInfo')?.after(game);
        document.querySelector('.sprintGameInfo')?.remove();
    }
}