import { IWordsData } from "../interfaces";
import "../../styles/sass/pages/_textbook.scss";
import { API } from "../api";
import { StartPageListener } from "../startPageListener";

export class Card {
  wordData: IWordsData;
  isAutorized: boolean;

  constructor(container: HTMLElement, wordData: IWordsData, isAutorized: boolean) {
    this.wordData = wordData;
    this.isAutorized = isAutorized;
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
    const additionalButtons = `<div class="authorization_block">
    <buttom class="btn-basic btn_authorization_block">Сложное слово</buttom>
    <buttom class="btn-basic btn_authorization_block">Удалить слово</buttom>
  </div>`;
    return `<ul class="wrapper textbook-list">
                <li class="textbook-list_item">
                  <img src="https://rs-lang-react.herokuapp.com/${this.wordData.image}" alt="${
      this.wordData.word
    }" class="textbook-card-img">
                  <div class="textbook-list_item__wrapper">
                  <div class="upper_card-row">
                   <div class="upper_card-box">
                      <div class="word-wrapper">
                        <h2 class="word">${this.wordData.word} <p class="transcription">${this.wordData.transcription}</p></h2>
                      </div>
                      <div class="translate">${this.wordData.wordTranslate}</div>
                    </div>
                    <button data-audio="audioBtn" class="btn-basic bnt-textbook">&#128264; Word
                    <audio id="sound">
                    <source type="audio/mp3" src="https://rs-lang-react.herokuapp.com/${this.wordData.audio}">
                    </audio>
                   </button>
                  </div>
                  <div class="upper_card-row">
                    <div class="lower_card-box">
                      <p class="description">${this.wordData.textMeaning}</p>
                      <p class="description-translate">${this.wordData.textMeaningTranslate}</p>
                    </div>
                    <button data-audio="audioBtn" class="btn-basic bnt-bell">&#128264;
                      <audio id="sound">
                      <source type="audio/mp3" src="https://rs-lang-react.herokuapp.com/${this.wordData.audioMeaning}">
                      </audio>
                    </button>
                  </div>
                  <div class="upper_card-row">
                    <div class="lower_card-box">
                      <p class="example">${this.wordData.textExample}</p>
                      <p class="example-translate">${this.wordData.textExampleTranslate}</p>
                      </div>
                      <button data-audio="audioBtn" class="btn-basic bnt-bell">&#128264;
                        <audio id="sound">
                        <source type="audio/mp3" src="https://rs-lang-react.herokuapp.com/${this.wordData.audioExample}">
                        </audio>
                      </button>
                    </div>
                  </div>
                  ${this.isAutorized ? additionalButtons : ''}
                </li>
              </ul>`;
  }
}

export function renderCards(cards: IWordsData[], isAutorized: boolean) {
  const headerContainer = document.querySelector(".main_container") as HTMLElement;
  const result = cards.reduce((prevValue, currValue) => {
    const card = new Card(headerContainer as HTMLElement, currValue, isAutorized);
    let template = card.createCardTemplate();
    return prevValue + template;
  }, "");
  if (headerContainer) {
    headerContainer.innerHTML = result;
  }
}



