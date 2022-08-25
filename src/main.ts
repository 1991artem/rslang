import { AutorisationForm } from "./components/autorisation/autorisation-form";
import "./styles/css/app.css";
import { API } from "./components/api";
import { DataStorage } from "./components/dataStorage";
import { StartPageListener } from "./components/startPageListener";
import { renderCards } from "./components/textbook/textbook";
import { IWordsData } from "./components/interfacec";
import { container } from "webpack";

const server: string = "https://rs-lang-final-project.herokuapp.com";

const autorisationForm: AutorisationForm = new AutorisationForm();
const dataStorage: DataStorage = new DataStorage();
const startPageListener: StartPageListener = new StartPageListener();
const api: API = new API(server);
autorisationForm.buttonAutorisationForm();
// API.loadWordToIdFromServer('5e9f5ee35eb9e72bc21af713');
// API.getNewUserTokenFromServer('62ff6443e4e0c70016d5da56');
// API.loadWordsFromServer(0,1)

const nav = document.querySelector(".nav");
const groups = document.querySelector(".groups");
const pagination = document.querySelector("#pagination");
const quantityPages = 15;
const quantityGroups = 6;

function dinamicList(maxValue: number, elementName: string, className: string, containerForElement: Element) {
  let i = 1
  for(i; i <= maxValue; i++) {
    let element = document.createElement(elementName);
    element?.classList.add(className);
    element.innerText = String(i);
    containerForElement.appendChild(element);
    //вынести вставку элементов один раз всех после цикла
  }
}

nav?.addEventListener("click", async (event) => {
  const btn = event.target as HTMLElement;
  console.log(btn)
  const selectedNavItem = btn.getAttribute("data-nav");
  //TODO: add initial loading for nav items
  switch (selectedNavItem) {
    case "home":
      console.log(selectedNavItem);
      break;

    case "textbook":
      //подсвечивать вкладку на которой находимся и задизейблить ее чтобы не жмякалась
      const dataCards = await API.loadWordsFromServer(0, 0);
      renderCards(dataCards as IWordsData[]);
      dinamicList(quantityPages, "li", "pagination_number", pagination!);
      dinamicList(quantityGroups, "button", "groups_list__item", groups!);
      btn.classList.add('active');
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
    btnGroupNumber = +btnGroup.innerText;
    const nextGroupData = await API.loadWordsFromServer(btnGroupNumber - 1, btnNumber - 1);
    renderCards(nextGroupData as IWordsData[]);
  }
});

pagination?.addEventListener("click", async (event: Event) => {
  const btn = event?.target as HTMLElement;
  btnNumber = +btn.innerText;
  if (btn.classList.contains("pagination_number")) {
    const nextPageData = await API.loadWordsFromServer(btnGroupNumber - 1, btnNumber - 1);
    renderCards(nextPageData as IWordsData[]);
  }
});

