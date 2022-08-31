import { AutorisationForm } from "./components/autorisation/autorisation-form";
import { API } from "./components/api";
import { DataStorage } from "./components/dataStorage";
import { StartPageListener } from "./components/startPageListener";
import { renderCards } from "./components/textbook/textbook";
import { IWordsData } from "./components/interfaces";
import "./styles/app.scss";
import { StatisticPage } from "./components/statistic/staticticPage";
import { SprintPage } from "./components/sprint/sprintPage";
import { SprintGame } from "./components/sprint/sprintGame";
import { ModalWindow } from "./components/modal";

const server: string = "https://rs-lang-final-project.herokuapp.com";

const modalWindow: ModalWindow = new ModalWindow();
modalWindow.active();
const autorisationForm: AutorisationForm = new AutorisationForm();
const dataStorage: DataStorage = new DataStorage();
const startPageListener: StartPageListener = new StartPageListener();
const api: API = new API(server);
autorisationForm.buttonAutorisationForm();
const statistic: StatisticPage = new StatisticPage();
statistic.build();
const sprintPage: SprintPage = new SprintPage();
sprintPage.build();
const sprintGame: SprintGame = new SprintGame();
sprintGame.btnClick();
// API.getUserWordsFromServer('630e0fee95c3540016e52c97')

const nav = document.querySelector(".nav");
const groups = document.querySelector(".groups") as HTMLElement;
const pagination = document.querySelector("#pagination") as HTMLElement;
const quantityPages = 30;
const visiblePages = 6;
const quantityGroups = 6;
const englishLevel = ["Easy - A1", "Easy - A2", "Medium - B1", "Medium - B2", "Hard - C1", "Hard - C2"];

function dynamicList(
  maxValue: number,
  elementNameFirst: string,
  className: string,
  containerForElement: Element,
  groupsLevel?: string[],
  elementNameSecond?: string
) {
  for (let i = 1; i <= maxValue; i++) {
    const element = document.createElement(elementNameFirst);
    element.classList.add(className);
    if (groupsLevel) {
      element.innerText = groupsLevel[i - 1];
      element.setAttribute(elementNameSecond as string, String(i));
    } else {
      element.innerText = String(i);
    }
    containerForElement.insertAdjacentElement("beforeend", element);
  }
}

let btnNumber = 1;
let btnGroupNumber = 1;

async function handleNextClick() {
  const allPages = document.querySelectorAll("li.pagination_number") as NodeListOf<Element>;
  const lastPage = allPages[5];
  const firstPage = allPages[0];
  let nextPage = document.getElementsByClassName("active-page")[0].nextElementSibling as HTMLElement;
  let active = document.querySelector(".active-page") as HTMLElement;
  if (active.innerHTML === lastPage.innerHTML && +active.innerHTML !== quantityPages) {
    btnNumber += 1;
    for (let i = 0; i < allPages.length && i + btnNumber <= quantityPages; i++) {
      allPages[i].innerHTML = String(btnNumber + i);
    }
    if (active != null) {
      active.classList.remove("active-page");
    }
    firstPage.classList.add("active-page");
    const nextPageData = await API.loadWordsFromServer(btnGroupNumber - 1, btnNumber - 1);
    renderCards(nextPageData as IWordsData[], DataStorage.isUserAutorized);
  } else {
    btnNumber = +nextPage.innerText;
    if (active != null && active.innerHTML !== String(quantityPages)) {
      active.classList.remove("active-page");
      nextPage.classList.add("active-page");
    }
    const nextPageData = await API.loadWordsFromServer(btnGroupNumber - 1, btnNumber - 1);
    renderCards(nextPageData as IWordsData[], DataStorage.isUserAutorized);
  }
}

async function handlePrevClick() {
  const allPages = document.querySelectorAll("li.pagination_number") as NodeListOf<Element>;
  const lastPage = allPages[5];
  const firstPage = allPages[0];
  let prevPage = document.getElementsByClassName("active-page")[0].previousElementSibling as HTMLElement;
  let active = document.querySelector(".active-page") as HTMLElement;
  if (active.innerHTML === firstPage.innerHTML && +active.innerHTML !== 1) {
    btnNumber -= 1;
    for (let i = 0; i < allPages.length && btnNumber - i >= 1; i++) {
      allPages[allPages.length - i - 1].innerHTML = String(btnNumber - i);
    }
    if (active != null) {
      active.classList.remove("active-page");
    }
    lastPage.classList.add("active-page");
    const nextPageData = await API.loadWordsFromServer(btnGroupNumber - 1, btnNumber - 1);
    renderCards(nextPageData as IWordsData[], DataStorage.isUserAutorized);
  } else {
    btnNumber = +prevPage.innerText;
    if (active != null && +active.innerHTML !== 1) {
      active.classList.remove("active-page");
      prevPage.classList.add("active-page");
    }
    const nextPageData = await API.loadWordsFromServer(btnGroupNumber - 1, btnNumber - 1);
    renderCards(nextPageData as IWordsData[], DataStorage.isUserAutorized);
  }
}

nav?.addEventListener("click", async (event) => {
  const btn = event.target as HTMLElement;
  const item = btn.parentElement as HTMLElement;
  const selectedNavItem = item.getAttribute("data-nav");
  //TODO: add initial loading for nav items
  switch (selectedNavItem) {
    case "home":
      console.log(selectedNavItem);
      break;

    case "textbook":
      const dataCards = await API.loadWordsFromServer(0, 0);
      renderCards(dataCards as IWordsData[], DataStorage.isUserAutorized);
      dynamicList(quantityGroups, "button", "groups_list__item", groups, englishLevel, "id");
      dynamicList(visiblePages, "li", "pagination_number", pagination);
      // create prev & next buttons
      const btnNext = document.createElement("li");
      const btnPrev = document.createElement("li");
      btnNext.classList.add("next-btn");
      btnPrev.classList.add("prev-btn");
      btnNext.innerHTML = "&#8594;";
      btnPrev.innerHTML = "&#8592;";
      pagination.insertAdjacentElement("afterbegin", btnPrev);
      pagination.insertAdjacentElement("beforeend", btnNext);
      btnNext.addEventListener("click", handleNextClick);
      btnPrev.addEventListener("click", handlePrevClick);
      //
      item.classList.add("active");
      btn.classList.add("active");
      const firstPaginationElement = pagination.querySelector(".pagination_number") as HTMLElement;
      const firstGroupsElement = groups?.querySelector(".groups_list__item") as HTMLElement;
      firstPaginationElement.classList.add("active-page");
      firstGroupsElement.classList.add("active-group");

      break;

    case "games":
      console.log(selectedNavItem);
      break;

    case "statistics":
      console.log(selectedNavItem);
      break;

    case "about":
      console.log(selectedNavItem);
      break;
  }
});

groups?.addEventListener("click", async (event) => {
  const btnGroup = event?.target as HTMLElement;
  if (btnGroup.classList.contains("groups_list__item")) {
    const allPages = document.querySelectorAll("li.pagination_number") as NodeListOf<Element>;
    const firstPage = allPages[0];
    let activeBtn = document.querySelector(".active-page") as HTMLElement;
    if (+activeBtn.innerHTML !== 1) {
      btnNumber = 1;
      for (let i = 0; i < allPages.length; i++) {
        allPages[i].innerHTML = String(btnNumber + i);
      }
      activeBtn.classList.remove("active-page");
      firstPage.classList.add("active-page");
    }
    btnGroupNumber = +btnGroup.id;
    let active = document.querySelector(".active-group") as HTMLElement;
    if (active != null) {
      active.classList.remove("active-group");
    }
    btnGroup.classList.add("active-group");
    const nextGroupData = await API.loadWordsFromServer(btnGroupNumber - 1, btnNumber - 1);
    renderCards(nextGroupData as IWordsData[], DataStorage.isUserAutorized);
  }
});

pagination?.addEventListener("click", async (event: Event) => {
  const btn = event?.target as HTMLElement;
  if (btn.classList.contains("pagination_number")) {
    btnNumber = +btn.innerText;
    let active = document.querySelector(".active-page") as HTMLElement;
    if (active != null) {
      active.classList.remove("active-page");
    }
    btn.classList.add("active-page");
    const nextPageData = await API.loadWordsFromServer(btnGroupNumber - 1, btnNumber - 1);
    renderCards(nextPageData as IWordsData[], DataStorage.isUserAutorized);
  }
});

console.log(StartPageListener.SINGIN);

StartPageListener.SINGIN?.addEventListener("click", checkAutorization);
StartPageListener.AUTORISATION_SINGIN?.addEventListener('click', checkAutorization);

async function checkAutorization() {
  console.log('check', AutorisationForm.isAutorized)
  if (AutorisationForm.isAutorized === undefined) return;
  await AutorisationForm.isAutorized.then((isAutorized) => {
    console.log(isAutorized)
    DataStorage.isUserAutorized = isAutorized;
    // if (location.hash === "#textbook") {
      renderCards(DataStorage.allWordsStorage, isAutorized);
    // }
  });
}
