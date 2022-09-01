import { API } from '../../api';
import { IWordsData, IResSprint, IStatistic } from 'src/components/interfaces';
import { StartPageListener } from '../../startPageListener';
import { DataStorage } from '../../dataStorage';

export class SprintGame {
    wordArray: IWordsData[];
    resultArray: IResSprint[];
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
                StartPageListener.SPRINT_WINDOW?.classList.remove('display_none');
                this.setTimer();
                this.choiseWords();
            })();

        }
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
                    if((this.wordArray.length - position) < 2){
                        (async () => {
                            this.wordArray = await [...this.wordArray, ...(await API.loadWordsFromServer(Math.floor(Math.random()*5), Math.floor(Math.random()*10)) as IWordsData[])];
                        })();
                    }
                };
                if(((<HTMLElement>(e.target)).innerHTML === 'No') && position > 0) {
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
        if(StartPageListener.GAME_PAGE){
            const dataResult = (): string =>{
                let result: string = '';
                this.resultArray.forEach((element: IResSprint) => {
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

            // let stateIconBox = document.querySelectorAll(".point-result");
            // stateIconBox.forEach(function(elem) {
            //   if (elem?.classList.contains("true")) {
            //     const stateIcon = document.createElement("img") as HTMLElement;
            //     stateIcon.classList.add(".good-result-icon");
            //     elem.appendChild(stateIcon);
            //   } else if (elem?.classList.contains("false")) {
            //     const stateIcon = document.createElement("img") as HTMLElement;
            //     stateIcon.classList.add(".bad-result-icon");
            //     elem.appendChild(stateIcon);
            //   }
            // })

            if (this.resultArray.length === 1) {
              StartPageListener.GAME_PAGE.innerHTML=`
              <div class="game-result-wrapper">
              <div class="result-window">${dataResult()}</div>
              <div class="correct-result-percent"><p id="done-words" class="game-level-select">Done: ${this.resultArray.length} word</p></div>
              <div class="correct-result-percent"><p class="game-level-select">Correct result: ${this.calculateResult()} %</p></div>;
              </div>`
            } else {
              StartPageListener.GAME_PAGE.innerHTML=`
              <div class="game-result-wrapper">
              <div class="result-window">${dataResult()}</div>
              <div class="correct-result-percent"><p id="done-words" class="game-level-select">Done: ${this.resultArray.length} words</p></div>
              <div class="correct-result-percent"><p class="game-level-select">Correct result: ${this.calculateResult()} %</p></div>
              </div>`;
            }
        }
    }
    calculateResult(): number{
        let result = 0;
        let statistic = 0;
        if(DataStorage.userData){
            (async ()=> statistic = (await API.getUserStatisticFromServer(DataStorage.userData!.userId) as IStatistic).learnedWords)()
        }
        this.resultArray.forEach((element: IResSprint) => {
            if(element.result){
                result++;
            }
        })

        if(DataStorage.userData) {
            let data = {
                learnedWords: this.resultArray.length + statistic,
                optional: {}
        }
            API.updateUserStatisticFromServer(DataStorage.userData?.userId, JSON.stringify(data))
        };
        if(result === 0) return 0;
        return Math.floor((result / this.resultArray.length)*100);
    }
}
