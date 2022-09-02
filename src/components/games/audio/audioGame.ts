import { API } from '../../api';
import { IWordsData, IResSprint, IStatistic } from 'src/components/interfaces';
import { StartPageListener } from '../../startPageListener';
import { DataStorage } from '../../dataStorage';

export class AudioGame {
    wordArray: IWordsData[];
    resultArray: IResSprint[];
    constructor(){
        this.wordArray = []
        this.resultArray = [];
    }
    btnClick(){
        const onClick = () => {
            console.log('audioGAme')
            this.startGame();
        }
        if(document.querySelector('.audio-game-btn')){
            document.querySelector('.audio-game-btn')?.addEventListener('click', onClick)
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
                StartPageListener.AUDIO_WINDOW?.classList.remove('display_none');
                this.choiseWords();
            })();

        }
    }
    choiseWords(){
        let audioPlace: HTMLElement | null = document.querySelector('.audio-place');
        let btnPlace: HTMLElement | null = document.querySelector('.btn-audio');
        let position: number = 0;
        this.showWord(position);
        const onClick = (e:Event) => {
            if(position === 19) this.showResult();
            position++;
            this.correctAnswer((e.target as HTMLElement).innerHTML, position)
            this.showWord(position);
        }

        const audioHandler = () => {
            console.log(this.wordArray[position].audio)
            let playAudio: HTMLAudioElement = new Audio(`https://rs-lang-react.herokuapp.com/${this.wordArray[position].audio}`);
            playAudio.play();
            playAudio.played;
        }
        if(btnPlace){
            btnPlace.addEventListener('click', onClick)
        }
        if(audioPlace){
            audioPlace.addEventListener('click', audioHandler)
        }

    }
    showWord(pos:number){
        let btnPlace: HTMLElement | null = document.querySelector('.btn-audio');
        let wordAnswearArray: string[] = [];
        for(let i = 0; i < 20; i++){
            if(wordAnswearArray.length === 5) break;
            let index: number = Math.floor(Math.random()*20);
            wordAnswearArray.push(this.wordArray[index].wordTranslate);
        }
        if(wordAnswearArray.indexOf(this.wordArray[pos].wordTranslate) === -1)
        wordAnswearArray[Math.floor(Math.random()*5)] = this.wordArray[pos].wordTranslate;
        if(btnPlace){
            btnPlace.innerHTML = '';
            for(let i = 0; i < wordAnswearArray.length; i++){
                btnPlace.innerHTML += `<p>${i+1} ${wordAnswearArray[i]} </p>`;
            }
        }
    }
    correctAnswer(word: string, position: number){
        if(word.split(' ')[1] === this.wordArray[position].wordTranslate) {
            this.resultArray.push(
                {
                    word: this.wordArray[position].word,
                    wordTranslate: this.wordArray[position].wordTranslate,
                    answer: word,
                    result: true
                }
            )
        } else {
            this.resultArray.push(
                {
                    word: this.wordArray[position].word,
                    wordTranslate: this.wordArray[position].wordTranslate,
                    answer: word,
                    result: false
                }
            )
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
                    <div class="result-word"><span class="result-word-span">Correct:</span><span> ${element.wordTranslate}</span></div>
                    </div>
                    `;
                });
                return result;
            }


            if (this.resultArray.length === 0 && this.calculateResult() === 0) {
              StartPageListener.GAME_PAGE.innerHTML=`
              <div class="game-result-wrapper">
              <div class="correct-result-percent"><p id="done-words" class="game-level-select">Done: ${this.resultArray.length} words</p></div>
              <div class="correct-result-percent"><p class="game-level-select">Correct result: ${this.calculateResult()} %</p></div>
              <div class="result-window">
              <img src="../../../assets/svg/gamer.png" alt="sad boy icon" class="sad-boy-icon">
              </div>
              <button class="sprint-game-btn btn-basic cta-btn play-again">Play again</button>
              </div>;`
            } else if (this.resultArray.length === 1 && this.calculateResult() === 0) {
              StartPageListener.GAME_PAGE.innerHTML=`
              <div class="game-result-wrapper">
              <img src="../../../assets/svg/no.png" alt="done icon" class="good-result-icon">
              <div class="correct-result-percent"><p id="done-words" class="game-level-select">Done: ${this.resultArray.length} word</p></div>
              <div class="correct-result-percent"><p class="game-level-select">Correct result: ${this.calculateResult()} %</p></div>
              <div class="correct-result-percent"><p class="game-level-select">Mistakes:  </p></div>
              <div class="result-window">${dataResult()}</div>
              <button class="sprint-game-btn btn-basic cta-btn play-again">Play again</button>
              </div>;`
            } else if (this.resultArray.length > 1 && this.calculateResult() === 0) {
              StartPageListener.GAME_PAGE.innerHTML=`
              <div class="game-result-wrapper">
              <img src="../../../assets/svg/no.png" alt="done icon" class="good-result-icon">
              <div class="correct-result-percent"><p id="done-words" class="game-level-select">Done: ${this.resultArray.length} words</p></div>
              <div class="correct-result-percent"><p class="game-level-select">Correct result: ${this.calculateResult()} %</p></div>
              <div class="correct-result-percent"><p class="game-level-select">Mistakes:  </p></div>
              <div class="result-window">${dataResult()}</div>
              <button class="sprint-game-btn btn-basic cta-btn play-again">Play again</button>
              </div>;`
            } else if (this.resultArray.length === 1 && this.calculateResult() > 0) {
              StartPageListener.GAME_PAGE.innerHTML=`
              <div class="game-result-wrapper">
              <img src="../../../assets/svg/yes.png" alt="done icon" class="good-result-icon">
              <div class="correct-result-percent"><p id="done-words" class="game-level-select">Done: ${this.resultArray.length} word</p></div>
              <div class="correct-result-percent"><p class="game-level-select">Correct result: ${this.calculateResult()} %</p></div>
              <div class="result-window">${dataResult()}</div>
              <button class="sprint-game-btn btn-basic cta-btn play-again">Play again</button>
              </div>;`
            } else {
              StartPageListener.GAME_PAGE.innerHTML=`
              <div class="game-result-wrapper">
              <img src="../../../assets/svg/yes.png" alt="done icon" class="good-result-icon">
              <div class="correct-result-percent"><p id="done-words" class="game-level-select">Done: ${this.resultArray.length} words</p></div>
              <div class="correct-result-percent"><p class="game-level-select">Correct result: ${this.calculateResult()} %</p></div>
              <div class="correct-result-percent"><p class="game-level-select">Mistakes:  </p></div>
              <div class="result-window">${dataResult()}</div>
              <button class="sprint-game-btn btn-basic cta-btn play-again">Play again</button>
              </div>;`;
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
