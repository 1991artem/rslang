import { IGetUserWords, IUserData, IWordsData } from "../interfaces";
import "../../styles/sass/pages/_textbook.scss";
import { StartPageListener } from "../startPageListener";
import { API } from "../api";
import { DataStorage } from "../dataStorage";
import { AutorisationForm } from "../autorisation/autorisation-form";

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
    if (targetElement.dataset.btn === "difficultWord") {
      const wordId = targetElement.parentElement?.parentElement?.id as string;
      const userId = DataStorage.userData?.userId as string;
      const difficult: string = 'difficult';
      const searchWordById = DataStorage.allWordsStorage.find(word => word.id === wordId) as IWordsData;
      API.createUsersWordsOnServer(userId, wordId, difficult, searchWordById);
    }
    if (targetElement.dataset.btn === "deleteWord") {
      const wordId = targetElement.parentElement?.parentElement?.id as string;
      const userId = DataStorage.userData?.userId as string;
      API.deleteUserWordsOnServer(userId, wordId);
    }
  }

  createCardTemplate(): string {
    return `<li id="${this.wordData.id}" data-group="${this.wordData.group}" class="textbook-list_item">
                  <img src="https://rs-lang-react.herokuapp.com/${this.wordData.image}" alt="${this.wordData.word}" class="textbook-card-img">

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
                  <div class="authorization_block"></div>
                </li>
              </ul>`;
  }
}

export class TextbookPage {
  wordData: IWordsData[] | undefined;
  quantityPages = 30;
  btnNumber = 1;
  btnGroupNumber = 1;
  visiblePages = 6;
  quantityGroups = 6;
  englishLevel = ["Easy - A1", "Easy - A2", "Medium - B1", "Medium - B2", "Hard - C1", "Hard - C2"];
  constructor() {}

  build() {
    const GROUPS = document.createElement("div");
    const PAGINATION = document.createElement("ul");
    const TEXTBOOK = document.createElement("ul");
    const btnNext = document.createElement("li");
    const btnPrev = document.createElement("li");
    const topBtn = document.createElement("div");
    const topLink = document.createElement("a");
    GROUPS.id = "groups";
    PAGINATION.id = "pagination";
    TEXTBOOK.id = "textbook";
    GROUPS.className = "groups";
    TEXTBOOK.className = "wrapper textbook-list";
    btnNext.className = "next-btn";
    btnPrev.className = "prev-btn";
    topBtn.className = "back-to-top-wrapper";
    topLink.className = "back-to-top-link"
    btnNext.innerHTML = "Next &rsaquo;";
    btnPrev.innerHTML = "&lsaquo; Previous";
    topLink.innerHTML = "Scroll to top";
    topLink.href = "#pageHeader";
    topBtn.insertAdjacentElement("afterbegin", topLink);

    if (StartPageListener.MAIN) {
      StartPageListener.TEXTBOOK_CONTAINER?.append(GROUPS);
      StartPageListener.TEXTBOOK_CONTAINER?.append(PAGINATION);
      StartPageListener.TEXTBOOK_CONTAINER?.append(TEXTBOOK);
      StartPageListener.TEXTBOOK_CONTAINER?.append(topBtn);
      StartPageListener.TEXTBOOK_CONTAINER?.classList.add("display_none");
      StartPageListener.SINGIN?.addEventListener("click", () => this.checkAutorization());
      StartPageListener.AUTORISATION_SINGIN?.addEventListener("click", () => this.checkAutorization());
    }
    StartPageListener.listen();

    PAGINATION.prepend(btnPrev);
    this.dynamicList(this.quantityGroups, "button", "groups_list__item", "active-group",  StartPageListener.GROUPS as HTMLElement, this.englishLevel, "id");
    this.dynamicList(this.visiblePages, "li", "pagination_number", "active-page", StartPageListener.PAGINATION as HTMLElement);
    PAGINATION.append(btnNext);
    this.checkAutorization()
    this.buttonClick();
    this.getWordsData();

    btnNext.addEventListener("click", () => this.handleNextClick(this.renderCards));
    btnPrev.addEventListener("click", () => this.handlePrevClick(this.renderCards));
  }

  buttonClick() {
    const onClick = async (e: Event) => {
      if ((<HTMLElement>e.target).textContent === "Textbook" || (<HTMLElement>e.target).id === "lets-start" || (<HTMLElement>e.target).id === "textbook-main-card") {
        if (!StartPageListener.BUTTONS_CONTAINER?.item(0)?.children.length) {
          await this.checkAutorization();
          this.addButtonsForAuthUsers(DataStorage.isUserAutorized);
        }
        if (StartPageListener.MAIN) {
          StartPageListener.TEXTBOOK_CONTAINER?.classList.remove("display_none");
          StartPageListener.DICTIONARY_CONTAINER?.classList.add("display_none")
          StartPageListener.STATISTIC?.classList.add("display_none");
          StartPageListener.GAME_PAGE_WRAPPER?.classList.add("display_none");
          StartPageListener.HERO_PAGE?.classList.add("display_none");
          StartPageListener.ADVANTAGES_PAGE?.classList.add("display_none");
          StartPageListener.ABOUT_PAGE?.classList.add("display_none");
        }

        StartPageListener.PAGINATION?.addEventListener("click", async (event: Event) => {
          const btn = event?.target as HTMLElement;
          if (btn.classList.contains("pagination_number")) {
            this.btnNumber = +btn.innerText;
            let active = document.querySelector(".active-page") as HTMLElement;
            if (active != null) {
              active.classList.remove("active-page");
            }
            btn.classList.add("active-page");
            const nextPageData = await API.loadWordsFromServer(this.btnGroupNumber - 1, this.btnNumber - 1);
            this.renderCards(nextPageData as IWordsData[]);
            await this.checkAutorization();
            this.addButtonsForAuthUsers(DataStorage.isUserAutorized);
          }
        });

        StartPageListener.GROUPS?.addEventListener("click", async (event: Event) => {
          const btnGroup = event?.target as HTMLElement;
          if (btnGroup.classList.contains("groups_list__item")) {
            const allPages = document.querySelectorAll("li.pagination_number") as NodeListOf<Element>;
            const firstPage = allPages[0];
            let activeBtn = document.querySelector(".active-page") as HTMLElement;
            if (+activeBtn.innerHTML !== 1) {
              this.btnNumber = 1;
              for (let i = 0; i < allPages.length; i++) {
                allPages[i].innerHTML = String(this.btnNumber + i);
              }
              activeBtn.classList.remove("active-page");
              firstPage.classList.add("active-page");
            }
            this.btnGroupNumber = +btnGroup.id;
            let active = document.querySelector(".active-group") as HTMLElement;
            if (active != null) {
              active.classList.remove("active-group");
            }
            btnGroup.classList.add("active-group");
            const nextGroupData = await API.loadWordsFromServer(this.btnGroupNumber - 1, this.btnNumber - 1);
            this.renderCards(nextGroupData as IWordsData[]);
            await this.checkAutorization();
            this.addButtonsForAuthUsers(DataStorage.isUserAutorized);
          }
        });
      }
    };
    if (StartPageListener.NAV) {
      StartPageListener.NAV.addEventListener("click", onClick);
    }
    if(document.querySelector('#lets-start')){
      document.querySelector('#lets-start')?.addEventListener('click', onClick)
    }
    if(document.querySelector('#textbook-main-card')){
      document.querySelector('#textbook-main-card')?.addEventListener('click', onClick)
    }
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

  async getWordsData(): Promise<void> {
    if (StartPageListener.TEXTBOOK_CONTAINER) {
        const allWords = await API.loadWordsFromServer(0, 0);
        this.renderCards(allWords as IWordsData[]);
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
      this.checkAutorization()
      renderCardsFn(nextPageData as IWordsData[], DataStorage.isUserAutorized);
      await this.checkAutorization();
      this.addButtonsForAuthUsers(DataStorage.isUserAutorized);
    }
  }

  renderCards(cards: IWordsData[]) {
    const ulElement = StartPageListener.TEXTBOOK as HTMLElement;
    const result = cards.reduce((prevValue, currValue) => {
      const card: Card = new Card(ulElement, currValue);
      let template = card.createCardTemplate();
      return prevValue + template;
    }, "");
    if (ulElement) {
      ulElement.innerHTML = result;
    }
  }

  async checkAutorization() {
    const token = API.getToken();
    const promiseToken = Promise.resolve(Boolean(token));
    await Promise.all([promiseToken, AutorisationForm.isAutorized]).then((data) => {
      DataStorage.isUserAutorized = data.some((item) => item === true);
    });
  }
}


