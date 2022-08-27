import { API } from '../api';
import { IWordsData, IResSprint } from 'src/components/interfaces';
import { StartPageListener } from '../startPageListener';

export class SprintGame {
    wordArray: IWordsData[] | null;
    resultArray: IResSprint[];
    constructor(){
        this.wordArray = null
        this.resultArray = [];
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
        let selected: HTMLSelectElement | null = document.querySelector('.select-level-sprint');
        if(selected){
            let level: number = Number(selected.value.split('-')[1]);
            let page: number = Math.floor(Math.random()*10);
            (async () => {
                this.wordArray = await API.loadWordsFromServer(level-1, page) as IWordsData[];
                await this.buildGamePage();
            })();

        }
    }
    buildGamePage(){
        console.log(this.wordArray);
        let game: HTMLElement = document.createElement('div');
        game.id = 'sprint-game-window';
        game.innerHTML = `
        <div class="sprint-game-timer"><p>60</p></div>
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
        document.querySelector('.sprintGameInfo')?.remove();
        StartPageListener.listen()
        this.setTimer();
        this.choiseWords();
    }
    setTimer(){
        let timer: number = 60;
        let gameTimer: Element | undefined = StartPageListener.TIMER?.children[0];
            let myInterval = setInterval(()=>{
                timer--;
                if(gameTimer != undefined){
                gameTimer.innerHTML = `${timer}`;
                if(timer === 0) {
                    clearInterval(myInterval);
                    this.showResult();
                }
            }
            }, 1000)
    }
    choiseWords(){
        let englishWord = document.querySelector('.english-word');
        let translateWord = document.querySelector('.translate-word');
        let btnPlace = document.querySelector('.btn-sprint');
        let position = 0;
        if(this.wordArray){
            if(englishWord) englishWord.innerHTML = this.wordArray[position].word;
            if(translateWord) translateWord.innerHTML = this.wordArray[position].wordTranslate;
        }
        const onClick = (e:Event) => {
            if(this.wordArray){

                if(((<HTMLElement>(e.target)).innerHTML === '>') && position < this.wordArray?.length) position++;
                if(((<HTMLElement>(e.target)).innerHTML === '<') && position > 0) position--;
                if(((<HTMLElement>(e.target)).innerHTML === 'Yes') && position < this.wordArray?.length) {
                    this.userAnswerYes(<string>translateWord?.innerHTML, position);
                    position++;
                };
                if(((<HTMLElement>(e.target)).innerHTML === 'No') && position > 0) {
                    this.userAnswerNo(<string>translateWord?.innerHTML, position);
                    position++;
                };

                if(englishWord) englishWord.innerHTML = this.wordArray[position].word;
                if(translateWord) translateWord.innerHTML = this.wordArray[position+Math.floor(Math.random()*2)].wordTranslate;
            }
            console.log(this.resultArray)
        }

        if(btnPlace){
            btnPlace.addEventListener('click', onClick)
        }

    }
    userAnswerYes(translateWord: string, position: number){
        if(this.wordArray){
            if(this.wordArray[position].wordTranslate === translateWord){
                this.resultArray.push(
                    {
                        word: this.wordArray[position].word,
                        wordTranslate: this.wordArray[position].wordTranslate,
                        answer: translateWord,
                        result: true
                    }
                )
                this.addProgress(true);
            } else {
                this.resultArray.push(
                    {
                        word: this.wordArray[position].word,
                        wordTranslate: this.wordArray[position].wordTranslate,
                        answer: translateWord,
                        result: false
                    }
                )
                this.addProgress(false);
            }
        }
    }
    userAnswerNo(translateWord: string, position: number){
        if(this.wordArray){
            if(this.wordArray[position].wordTranslate === translateWord){
                this.resultArray.push(
                    {
                        word: this.wordArray[position].word,
                        wordTranslate: this.wordArray[position].wordTranslate,
                        answer: translateWord,
                        result: false
                    }
                )
                this.addProgress(false);
            } else {
                this.resultArray.push(
                    {
                        word: this.wordArray[position].word,
                        wordTranslate: this.wordArray[position].wordTranslate,
                        answer: translateWord,
                        result: true
                    }
                )
                this.addProgress(true);
            }
        }
    }
    addProgress(res:boolean){
        let progress = document.querySelector('.sprint-progress');
        let className = res ? 'true progress':'false progress';
        if(progress){
            progress.innerHTML += `<div class="${className}"></div>`
        }
    }
    showResult(){
        if(StartPageListener.SPRINT_WINDOW){
            let result: string = '';
            this.resultArray.forEach((element: IResSprint) => {
                result +=`
                <div class="res-row ${element.result}">
                <div><p>${element.answer}</p></div>
                <div><p>${element.word}</p></div>
                <div><p>${element.wordTranslate}</p></div>
                </div>
                `;
            });
            StartPageListener.SPRINT_WINDOW.innerHTML=result;
        }

    }
}