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
API.getUserWordsFromServer('630e0fee95c3540016e52c97')

const nav = document.querySelector(".nav");
const groups = document.querySelector(".groups") as HTMLElement;
const pagination = document.querySelector("#pagination") as HTMLElement;
const quantityPages = 30;
const quantityGroups = 6;
const englishLevel = ["A1", "A2", "B1", "B2", "C1", "C2"];

function dynamicList(maxValue: number, elementNameFirst: string, className: string, containerForElement: Element, groupsLevel?: string[], elementNameSecond?: string
) {
  for (let i = 1; i <= maxValue; i++) {
    const element = document.createElement(elementNameFirst);
    element.classList.add(className);
    if (groupsLevel) {
      element.innerText = groupsLevel[i - 1];
      element.setAttribute(elementNameSecond as string, String(i))
    } else {
      element.innerText = String(i);
    }
    containerForElement.insertAdjacentElement("beforeend", element);
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
      renderCards(dataCards as IWordsData[]);
      dynamicList(quantityGroups, "button", "groups_list__item", groups, englishLevel, "id");
      dynamicList(quantityPages, "li", "pagination_number", pagination);
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

let btnNumber = 1;
let btnGroupNumber = 1;

groups?.addEventListener("click", async (event) => {
  const btnGroup = event?.target as HTMLElement;
  if (btnGroup.classList.contains("groups_list__item")) {
    btnGroupNumber = +btnGroup.id
    let active = document.querySelector(".active-group") as HTMLElement;
    if (active != null) {
      active.classList.remove("active-group");
    }
    btnGroup.classList.add("active-group");
    const nextGroupData = await API.loadWordsFromServer(btnGroupNumber - 1, btnNumber - 1);
    renderCards(nextGroupData as IWordsData[]);
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
    renderCards(nextPageData as IWordsData[]);
  }
});
