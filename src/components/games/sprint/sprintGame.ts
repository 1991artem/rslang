import { API } from '../../api';
import { IWordsData, IResGame, ICalculateResult } from 'src/components/interfaces';
import { StartPageListener } from '../../startPageListener';
import { SelectGamePage } from '../selectGamePage';
import { StatisticPage } from '../../statistic/staticticPage';

export class SprintGame {
    wordArray: IWordsData[];
    resultArray: IResGame[];
    constructor(){
        this.wordArray = []
        this.resultArray = [];
    }
    btnClick(){
        StartPageListener.listen();
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
                this.wordArray = (await API.loadWordsFromServer(level-1, page) as IWordsData[]);
                document.querySelector('.sprintGameInfo')?.classList.add('display_none');
                document.querySelector('.audioGameInfo')?.classList.add('display_none');
                this.buildSprintGamePage();
                StartPageListener.listen();
                this.setTimer();
                this.choiseWords();
            })();

        }
    }

    buildSprintGamePage(){
        let game: HTMLElement = document.createElement('div');
        game.id = 'sprint-game-window';
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


    setTimer(){
        let timer: number = 6;
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
                if(((<HTMLElement>(e.target)).innerHTML === 'Right') && position < this.wordArray?.length) {
                    this.userAnswerYes(<string>translateWord?.innerHTML, position);
                    position++;
                    if((this.wordArray.length - position) < 2){
                        (async () => {
                            this.wordArray = await [...this.wordArray, ...(await API.loadWordsFromServer(Math.floor(Math.random()*5), Math.floor(Math.random()*10)) as IWordsData[])];
                        })();
                    }
                };
                if(((<HTMLElement>(e.target)).innerHTML === 'Wrong') && position >= 0) {
                    this.userAnswerNo(<string>translateWord?.innerHTML, position);
                    position++;
                    if((this.wordArray.length - position) < 2){
                        (async () => {
                            this.wordArray = await [...this.wordArray, ...(await API.loadWordsFromServer(Math.floor(Math.random()*5), Math.floor(Math.random()*10)) as IWordsData[])];
                        })();
                    }
                };

                if(englishWord) englishWord.innerHTML = this.wordArray[position].word;
                if(translateWord) translateWord.innerHTML = this.wordArray[position+Math.floor(Math.random()*2)].wordTranslate;
            }
        }

        if(btnPlace){
            btnPlace.addEventListener('click', onClick)
        }

        const buttonClick = (translateWord: Element, answer: boolean) => {
            let element: HTMLElement | null = null;
            if(answer){
                element = document.querySelector('.btn-yes');
            } else {
                element = document.querySelector('.btn-no');
            }
            element?.classList.add('btn-click')
            setTimeout(()=>{
                element?.classList.remove('btn-click');
            },300);
            this.userAnswerYes(<string>translateWord?.innerHTML, position);
            position++;
            if((this.wordArray.length - position) < 2){
                (async () => {
                    this.wordArray = await [...this.wordArray, ...(await API.loadWordsFromServer(Math.floor(Math.random()*5), Math.floor(Math.random()*10)) as IWordsData[])];
                })();
            }
        }
        const keyboardHehdler = (e:KeyboardEvent) => {
            e.preventDefault();
            if(position === 19) this.showResult();
                if(translateWord){
                switch(e.code){
                    case 'KeyY': buttonClick(translateWord, true); break;
                    case 'KeyN': buttonClick(translateWord, false); break;
                    case 'ArrowLeft': if(position > 0) position--; break;
                    case 'ArrowRight': if(position < this.wordArray?.length) position++; break;
                    case 'Escape': SelectGamePage.showGamePage(); break;
                    }
                }
                if(englishWord) englishWord.innerHTML = this.wordArray[position].word;
                if(translateWord) translateWord.innerHTML = this.wordArray[position+Math.floor(Math.random()*2)].wordTranslate;
        }

        document.addEventListener('keydown', keyboardHehdler)

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
        if(document.querySelector('#sprint-game-window')){
            (document.querySelector('#sprint-game-window') as HTMLElement).classList.add('display_none');
        }
        if(StartPageListener.GAME_PAGE){
            const dataResult = (): string =>{
                let result: string = '';
                this.resultArray.forEach((element: IResGame) => {
                    result +=`
                    <div class="gameResult">
                    <div class="result-left-side">
                    <div class="point-result ${element.result}">
                    </div>
                    <div class="result-word-left"><span class="result-word-span">Word:</span><span> ${element.word}</span></div>
                    </div>
                    <div class="result-word"><span class="result-word-span-right">Correct:</span><span> ${element.wordTranslate}</span></div>
                    </div>
                    `;
                });
                return result;
            }

            if (this.resultArray.length === 0 && this.calculateResult().percent === 0) {
              StartPageListener.GAME_PAGE.innerHTML+=`
              <div class="game-result-wrapper">
              <div class="correct-result-percent"><p id="done-words" class="game-level-select">Done: ${this.resultArray.length} words</p></div>
              <div class="correct-result-percent"><p class="game-level-select">Correct result: ${this.calculateResult().percent} %</p></div>
              <div class="result-window">
              <img src="../../../assets/svg/gamer.png" alt="sad boy icon" class="sad-boy-icon">
              </div>
              <button class="sprint-game-btn btn-basic cta-btn play-again">Play again</button>
              </div>;`
            } else if (this.resultArray.length === 1 && this.calculateResult().percent === 0) {
              StartPageListener.GAME_PAGE.innerHTML+=`
              <div class="game-result-wrapper">
              <img src="../../../assets/svg/no.png" alt="done icon" class="good-result-icon">
              <div class="correct-result-percent"><p id="done-words" class="game-level-select">Done: ${this.resultArray.length} word</p></div>
              <div class="correct-result-percent"><p class="game-level-select">Correct result: ${this.calculateResult().percent} %</p></div>
              <div class="correct-result-percent"><p class="game-level-select">Mistakes: ${this.calculateResult().mistakes} </p></div>
              <div class="result-window">${dataResult()}</div>
              <button class="sprint-game-btn btn-basic cta-btn play-again">Play again</button>
              </div>;`
            } else if (this.resultArray.length > 1 && this.calculateResult().percent === 0) {
              StartPageListener.GAME_PAGE.innerHTML+=`
              <div class="game-result-wrapper">
              <img src="../../../assets/svg/no.png" alt="done icon" class="good-result-icon">
              <div class="correct-result-percent"><p id="done-words" class="game-level-select">Done: ${this.resultArray.length} words</p></div>
              <div class="correct-result-percent"><p class="game-level-select">Correct result: ${this.calculateResult().percent} %</p></div>
              <div class="correct-result-percent"><p class="game-level-select">Mistakes: ${this.calculateResult().mistakes} </p></div>
              <div class="result-window">${dataResult()}</div>
              <button class="sprint-game-btn btn-basic cta-btn play-again">Play again</button>
              </div>;`
            } else if (this.resultArray.length === 1 && this.calculateResult().percent > 0) {
              StartPageListener.GAME_PAGE.innerHTML+=`
              <div class="game-result-wrapper">
              <img src="../../../assets/svg/yes.png" alt="done icon" class="good-result-icon">
              <div class="correct-result-percent"><p id="done-words" class="game-level-select">Done: ${this.resultArray.length} word</p></div>
              <div class="correct-result-percent"><p class="game-level-select">Correct result: ${this.calculateResult().percent} %</p></div>
              <div class="result-window">${dataResult()}</div>
              <button class="sprint-game-btn btn-basic cta-btn play-again">Play again</button>
              </div>;`
            } else {
              StartPageListener.GAME_PAGE.innerHTML+=`
              <div class="game-result-wrapper">
              <img src="../../../assets/svg/yes.png" alt="done icon" class="good-result-icon">
              <div class="correct-result-percent"><p id="done-words" class="game-level-select">Done: ${this.resultArray.length} words</p></div>
              <div class="correct-result-percent"><p class="game-level-select">Correct result: ${this.calculateResult().percent} %</p></div>
              <div class="correct-result-percent"><p class="game-level-select">Mistakes: ${this.calculateResult().mistakes} </p></div>
              <div class="result-window">${dataResult()}</div>
              <button class="sprint-game-btn btn-basic cta-btn play-again">Play again</button>
              </div>;`;
            }
        }
        StatisticPage.workWithStatistic(this.resultArray, 'sprint')
        SelectGamePage.playAgain();
    }
    calculateResult(): ICalculateResult{
        let result = 0;
        this.resultArray.forEach((element: IResGame) => {
            if(element.result){
                result++;
            }
        });
        if(result === 0) return {percent: 0, mistakes: this.resultArray.length - result};
        return {percent: Math.floor((result / this.resultArray.length)*100),  mistakes: this.resultArray.length - result};
    }
}
