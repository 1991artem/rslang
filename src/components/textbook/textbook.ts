
import { IWordsData } from "../interfacec";

export class Card {
  wordData: IWordsData;

  constructor(container: HTMLElement, wordData: IWordsData) {
    this.wordData = wordData;
    container.onclick = this.onClick.bind(this);
  }

  playAudio(audioElement: HTMLAudioElement): void {
    audioElement.play();
  }

  onClick(event: Event) {
    const targetElement = event.target as HTMLElement;
    if (targetElement.dataset.audio === "audioBtn") {
      this.playAudio(targetElement.firstElementChild as HTMLAudioElement);
    }
  }

  createCardTemplate(): string {
    return `<div class="textbook">
        <ul class="textbook-list">
          <li class="textbook-list_item">
            <img src="https://rs-lang-react.herokuapp.com/${this.wordData.image}" alt="${this.wordData.word}">
            <div class="textbook-list_item__wrapper">
              <h2 class="word">${this.wordData.word} ${this.wordData.transcription} ${this.wordData.wordTranslate}</h2>
              <button data-audio="audioBtn" class="btn-basic bnt-textbook">&#128264; Word
                <audio id="sound">
                <source type="audio/mp3" src="https://rs-lang-react.herokuapp.com/${this.wordData.audio}">
                </audio>
              </button>
              <p class="description">${this.wordData.textMeaning}</p>
              <p class="description-translate">${this.wordData.textMeaningTranslate}</p>
              <button data-audio="audioBtn" class="btn-basic bnt-textbook">&#128264; Description
                <audio id="sound">
                <source type="audio/mp3" src="https://rs-lang-react.herokuapp.com/${this.wordData.audioMeaning}">
                </audio>
              </button>
              <p class="example">${this.wordData.textExample}</p>
              <p class="example-translate">${this.wordData.textExampleTranslate}</p>
              <button data-audio="audioBtn" class="btn-basic bnt-textbook">&#128264; Example
                <audio id="sound">
                <source type="audio/mp3" src="https://rs-lang-react.herokuapp.com/${this.wordData.audioExample}">
                </audio>
              </button>
              
            </div>
          </li>
        </ul>
        </div>`;
  }
}

export function renderCards(cards: IWordsData[]) {
  const container = document.querySelector(".main_container");
  const result = cards.reduce((prevValue, currValue) => {
    const card = new Card(container as HTMLElement, currValue);
    const template = card.createCardTemplate();
    return prevValue + template;
  }, "");

  if (container) {
    container.innerHTML = result;
  }
}
