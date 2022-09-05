import { API } from "../api";
import { AutorisationForm } from "../autorisation/autorisation-form";
import { DataStorage } from "../dataStorage";
import { IWordsData } from "../interfaces";
import { StartPageListener } from "../startPageListener";
import { Card } from "../textbook/textbook";

export class Dictionary {
    wordsData: IWordsData[] | undefined
    quantityPages = 30;
    btnNumber = 1;
    btnGroupNumber = 1;
    visiblePages = 6;
    quantityGroups = 6;
    englishLevel = ["Easy - A1", "Easy - A2", "Medium - B1", "Medium - B2", "Hard - C1", "Hard - C2"];

    constructor() {}

    build() {
        const DICTIONARY = document.createElement("ul");
        const PAGINATION_DICTIONARY = document.createElement("ul");
        const GROUPS_DICTIONARY = document.createElement("div");
        const btnNext = document.createElement("li");
        const btnPrev = document.createElement("li");
        DICTIONARY.id = "dictionary"
        GROUPS_DICTIONARY.id = "groups-dictionary";
        PAGINATION_DICTIONARY.id = "pagination-dictionary";
        DICTIONARY.className = "dictionary-list"
        GROUPS_DICTIONARY.className = "groups";
        btnNext.innerHTML = "Next &rsaquo;";
        btnPrev.innerHTML = "&lsaquo; Previous";
        btnNext.className = "next-btn";
        btnPrev.className = "prev-btn";
        if(StartPageListener.MAIN) {
            StartPageListener.DICTIONARY_CONTAINER?.append(GROUPS_DICTIONARY);
            StartPageListener.DICTIONARY_CONTAINER?.append(PAGINATION_DICTIONARY);
            StartPageListener.DICTIONARY_CONTAINER?.append(DICTIONARY);
            StartPageListener.DICTIONARY_CONTAINER?.classList.add("display_none")
        }
        StartPageListener.listen();
        PAGINATION_DICTIONARY.prepend(btnPrev);
        this.dynamicList(this.quantityGroups, "button", "groups_list__item", "active-group",  StartPageListener.GROUPS_DICTIONARY as HTMLElement, this.englishLevel, "id");
        this.dynamicList(this.visiblePages, "li", "pagination_number", "active-page", StartPageListener.PAGINATION_DICTIONARY as HTMLElement);
        PAGINATION_DICTIONARY.append(btnNext);
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

        StartPageListener.GROUPS_DICTIONARY?.addEventListener("click", (event) => {
            const btn = event.target as HTMLElement;
            console.log(btn)
        })
    }

    async getUsersWord() {
        const userId = DataStorage.userData?.userId as string;
        await API.getUserWordsFromServer(userId);
        const userWords = DataStorage.userWords;
        const dictionaryWords = userWords?.map((el) => {
           return el.optional
        })
        this.renderCards(dictionaryWords as IWordsData[])
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

      dynamicList(
        maxValue: number,
        elementName: string,
        className: string,
        activeClass: string,
        containerForElement: Element,
        groupsLevel?: string[],
        attribute?: string,
        id?: string
      ) {
        for (let i = 1; i <= maxValue; i++) {
          const element = document.createElement(elementName);
          element.classList.add(className);
          if (i === 1) element.classList.add(activeClass);
          if (groupsLevel) {
            element.innerText = groupsLevel[i - 1];
            if (attribute) element.setAttribute(attribute, String(i));
          } else {
            element.innerText = String(i);
          }
          containerForElement.insertAdjacentElement("beforeend", element);
        }
      }

      async handleNextClick(renderCardsFn: any) {
        const allPages = document.querySelectorAll("li.pagination_number") as NodeListOf<Element>;
        const lastPage = allPages[5];
        const firstPage = allPages[0];
        let nextPage = document.getElementsByClassName("active-page")[0].nextElementSibling as HTMLElement;
        let active = document.querySelector(".active-page") as HTMLElement;
        if (active.innerHTML === lastPage.innerHTML && +active.innerHTML !== this.quantityPages) {
          this.btnNumber += 1;
          for (let i = 0; i < allPages.length && i + this.btnNumber <= this.quantityPages; i++) {
            allPages[i].innerHTML = String(this.btnNumber + i);
          }
          if (active != null) {
            active.classList.remove("active-page");
          }
          firstPage.classList.add("active-page");
          const nextPageData = await API.loadWordsFromServer(this.btnGroupNumber - 1, this.btnNumber - 1);
          renderCardsFn(nextPageData as IWordsData[], DataStorage.isUserAutorized);
          await this.checkAutorization();
          this.addButtonsForAuthUsers(DataStorage.isUserAutorized);
        } else {
          this.btnNumber = +nextPage.innerText;
          if (active != null && active.innerHTML !== String(this.quantityPages)) {
            active.classList.remove("active-page");
            nextPage.classList.add("active-page");
          }
          const nextPageData = await API.loadWordsFromServer(this.btnGroupNumber - 1, this.btnNumber - 1);
          renderCardsFn(nextPageData as IWordsData[], DataStorage.isUserAutorized);
          await this.checkAutorization();
          this.addButtonsForAuthUsers(DataStorage.isUserAutorized);
        }
      }

      async handlePrevClick(renderCardsFn: any) {
        const allPages = document.querySelectorAll("li.pagination_number") as NodeListOf<Element>;
        const lastPage = allPages[5];
        const firstPage = allPages[0];
        let prevPage = document.getElementsByClassName("active-page")[0].previousElementSibling as HTMLElement;
        let active = document.querySelector(".active-page") as HTMLElement;
        if (active.innerHTML === firstPage.innerHTML && +active.innerHTML !== 1) {
          this.btnNumber -= 1;
          for (let i = 0; i < allPages.length && this.btnNumber - i >= 1; i++) {
            allPages[allPages.length - i - 1].innerHTML = String(this.btnNumber - i);
          }
          if (active != null) {
            active.classList.remove("active-page");
          }
          lastPage.classList.add("active-page");
          const nextPageData = await API.loadWordsFromServer(this.btnGroupNumber - 1, this.btnNumber - 1);
          renderCardsFn(nextPageData as IWordsData[], DataStorage.isUserAutorized);
          await this.checkAutorization();
          this.addButtonsForAuthUsers(DataStorage.isUserAutorized);
        } else {
          this.btnNumber = +prevPage.innerText;
          if (active != null && +active.innerHTML !== 1) {
            active.classList.remove("active-page");
            prevPage.classList.add("active-page");
          }
          const nextPageData = await API.loadWordsFromServer(this.btnGroupNumber - 1, this.btnNumber - 1);
          renderCardsFn(nextPageData as IWordsData[], DataStorage.isUserAutorized);
          await this.checkAutorization();
          this.addButtonsForAuthUsers(DataStorage.isUserAutorized);
        }
      }


      async checkAutorization() {
        const token = API.getToken();
        const promiseToken = Promise.resolve(Boolean(token));
        await Promise.all([promiseToken, AutorisationForm.isAutorized]).then((data) => {
          DataStorage.isUserAutorized = data.some((item) => item === true);
          console.log(DataStorage.isUserAutorized)
        });
      }

      addButtonsForAuthUsers(isAutorized: boolean): void {
        if (!isAutorized) return;
        const additionalButtons = `
        <buttom data-btn="difficultWord" class="btn-basic btn_authorization_block btn-dif-word">Difficult word</buttom>
        <buttom data-btn="deleteWord" class="btn-basic btn_authorization_block">Delete word</buttom>
      `;
        Array.from(StartPageListener.BUTTONS_CONTAINER as HTMLCollectionOf<Element>).forEach((element) => {
          element.insertAdjacentHTML("afterbegin", additionalButtons);
        });
      }

}