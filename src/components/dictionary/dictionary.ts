import { API } from "../api";
import { DataStorage } from "../dataStorage";
import { IWordsData } from "../interfaces";
import { StartPageListener } from "../startPageListener";
import { Card } from "../textbook/textbook";

export class Dictionary {
    wordsData: IWordsData[] | undefined


    constructor() {}

    build() {
        const DICTIONARY = document.createElement("ul");
        DICTIONARY.id = "dictionary"
        DICTIONARY.className = "dictionary-list"
        if(StartPageListener.MAIN) {
            StartPageListener.DICTIONARY_CONTAINER?.append(DICTIONARY);
            StartPageListener.DICTIONARY_CONTAINER?.classList.add("display_none")
        }
        StartPageListener.listen();
        this.buttonClick()
    }

    buttonClick() {
        const onClick = async (e: Event) => {
            if((<HTMLElement>e.target).textContent === "Dictionary") {
                if(StartPageListener.MAIN) {
                    StartPageListener.DICTIONARY_CONTAINER?.classList.remove("display_none")
                    StartPageListener.TEXTBOOK_CONTAINER?.classList.add("display_none");
                    StartPageListener.STATISTIC?.classList.add("display_none");
                    StartPageListener.GAME_PAGE_WRAPPER?.classList.add("display_none");
                    StartPageListener.HERO_PAGE?.classList.add("display_none");
                    StartPageListener.ADVANTAGES_PAGE?.classList.add("display_none");
                    StartPageListener.ABOUT_PAGE?.classList.add("display_none");
                    this.getUsersWord()
                }
            }
        }

        if (StartPageListener.NAV) {
            StartPageListener.NAV.addEventListener("click", onClick);
        }
    }

    async getUsersWord() {
        const userId = DataStorage.userData?.userId as string;
        await API.getUserWordsFromServer(userId);
        const userWords = DataStorage.userWords;
        console.log('userWords',userWords)
        userWords?.forEach( async (el) => {
           await API.getAllUserAgregatedWordsByIdFromServer(userId, el.wordId);
           const word = DataStorage.allAgregatedByIdWords as IWordsData[]
           console.log(word)
        })
    }

    renderCards(cards: IWordsData[]) {
        const ulElement = StartPageListener.DICTIONARY as HTMLElement;
        const result = cards.reduce((prevValue, currValue) => {
          const card: Card = new Card(ulElement, currValue);
          let template = card.createCardTemplate();
          return prevValue + template;
        }, "");
        if (ulElement) {
          ulElement.innerHTML = result;
        }
      }

}