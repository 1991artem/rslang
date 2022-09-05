import { API } from '../../api';
import { IWordsData, IResGame, ICalculateResult} from 'src/components/interfaces';
import { StartPageListener } from '../../startPageListener';
import { SelectGamePage } from '../selectGamePage';
import { StatisticPage } from '../../statistic/staticticPage';

export class AudioGame {
    wordArray: IWordsData[];
    resultArray: IResGame[];
    position: number;
    constructor(){
        this.wordArray = []
        this.resultArray = [];
        this.position = 0;
        StartPageListener.SPRINT_WINDOW?.remove();
    }
    btnClick(){
        const onClick = () => {
            this.startGame();
        }
        if(StartPageListener.AUDIO_START_BTN){
            StartPageListener.AUDIO_START_BTN.addEventListener('click', onClick)
        }
    }
    startGame(){
        let selected: HTMLSelectElement | null = document.querySelector('.select-level-audio');
        if(selected){
            let level: number = Number(selected.value.split('-')[1]);
            let page: number = Math.floor(Math.random()*10);
            (async () => {
                this.wordArray = (await API.loadWordsFromServer(level-1, page) as IWordsData[]);
                document.querySelector('.sprintGameInfo')?.classList.add('display_none');
                document.querySelector('.audioGameInfo')?.classList.add('display_none');
                this.buildAudioGamePage();
                StartPageListener.listen();
                this.choiseWords();
            })();
            if(document.querySelector('.audio-game-wrapper')){
                (document.querySelector('.audio-game-wrapper') as HTMLElement).classList.remove('display_none');
            }

        }
    }
    buildAudioGamePage(){
        let game: HTMLElement = document.createElement('div');
        game.id = 'audio-game-window';
        game.innerHTML = `
        <div class="audio-game-wrapper">
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
        </div>
        `;
        document.querySelector('.audioGameInfo')?.after(game);
    }
    choiseWords(){
        let audioPlace: HTMLElement | null = document.querySelector('.audio-place');
        let btnPlace: HTMLElement | null = document.querySelector('.btn-audio');
        this.showWord();
        const onClick = (e:Event) => {
            if(this.position === 9) this.showResult();
            this.correctAnswer((e.target as HTMLElement))
        }

        const audioHandler = () => {
            let playAudio: HTMLAudioElement = new Audio(`https://rs-lang-react.herokuapp.com/${this.wordArray[this.position].audio}`);
            playAudio.play();
            playAudio.played;
        }
        const buttonClick = (element: Element) => {
            element.classList.add('btn-click')
            setTimeout(()=>{
                element.classList.remove('btn-click');
                this.correctAnswer(element);
            },300)
        }
        const keyboardHehdler = (e:KeyboardEvent) => {
            e.preventDefault();
            if(this.position === 9) {
                this.showResult();
                document.removeEventListener('keydown', keyboardHehdler);
            };
            if(e.code === 'Space'){
                audioHandler();
            } else {
                let answerArray = document.querySelector('.btn-audio');
                if(answerArray){
                switch(e.code){
                    case 'Digit1'||'Numpad1': buttonClick(answerArray.children[0]); break;
                    case 'Digit2'||'Numpad2': buttonClick(answerArray.children[1]); break;
                    case 'Digit3'||'Numpad3': buttonClick(answerArray.children[2]); break;
                    case 'Digit4'||'Numpad4': buttonClick(answerArray.children[3]); break;
                    case 'Digit5'||'Numpad5': buttonClick(answerArray.children[4]); break;
                    case 'Escape':
                    SelectGamePage.showGamePage();
                    document.removeEventListener('keydown', keyboardHehdler);
                    break;
                    }
                }
            }
        }
        if(btnPlace){
            btnPlace.addEventListener('click', onClick)
        }
        if(audioPlace){
            audioPlace.addEventListener('click', audioHandler)
        }
        document.addEventListener('keydown', keyboardHehdler)

    }
    showWord(){
        let btnPlace: HTMLElement | null = document.querySelector('.btn-audio');
        let wordAnswearArray: string[] = [];
        for(let i = 0; i < 20; i++){
            if(wordAnswearArray.length === 5) break;
            let index: number = Math.floor(Math.random()*20);
            wordAnswearArray.push(this.wordArray[index].wordTranslate);
        }
        if(wordAnswearArray.indexOf(this.wordArray[this.position].wordTranslate) === -1)
        wordAnswearArray[Math.floor(Math.random()*5)] = this.wordArray[this.position].wordTranslate;
        if(btnPlace){
            btnPlace.innerHTML = '';
            for(let i = 0; i < wordAnswearArray.length; i++){
                btnPlace.innerHTML += `<p>${i+1} ${wordAnswearArray[i]} </p>`;
            }
        }
    }
    correctAnswer(element: Element){
        if(element.innerHTML.split(' ')[1] === this.wordArray[this.position].wordTranslate) {
            this.resultArray.push(
                {
                    word: this.wordArray[this.position].word,
                    wordTranslate: this.wordArray[this.position].wordTranslate,
                    answer: element.innerHTML,
                    result: true
                }
            )
            this.position++
            this.showWord();
        } else {
            this.resultArray.push(
                {
                    word: this.wordArray[this.position].word,
                    wordTranslate: this.wordArray[this.position].wordTranslate,
                    answer: element.innerHTML,
                    result: false
                }
            )
            if(element.parentElement){
                for(let i = 0; i < element.parentElement.children.length; i++){
                    console.log(element.parentElement.children[i].innerHTML)
                    if(element.parentElement.children[i].innerHTML.split(' ')[1] === this.wordArray[this.position].wordTranslate){
                        element.parentElement.children[i].classList.add('true-answear');
                        setTimeout(()=>{
                            element.parentElement?.children[i].classList.remove('true-answear')
                            this.position++;
                            this.showWord();
                        }, 1000)
                    }
                };
            }
        }
    }

    showResult(){
        if(document.querySelector('#audio-game-window')){
            (document.querySelector('#audio-game-window') as HTMLElement).classList.add('display_none');
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
                    <div class="result-word"><span class="result-word-span">Correct:</span><span> ${element.wordTranslate}</span></div>
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
        StatisticPage.workWithStatistic(this.resultArray, 'audio')
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
