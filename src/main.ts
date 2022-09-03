import { AutorisationForm } from "./components/autorisation/autorisation-form";
import { API } from "./components/api";
import { DataStorage } from "./components/dataStorage";
import { StartPageListener } from "./components/startPageListener";
import "./styles/app.scss";
import { StatisticPage } from "./components/statistic/staticticPage";
import { SelectGamePage } from "./components/games/selectGamePage";
import { SprintGame } from "./components/games/sprint/sprintGame";
import { AudioGame } from "./components/games/audio/audioGame";
import { ModalWindow } from "./components/modal";
import { TextbookPage } from "./components/textbook/textbook";

const server: string = "https://rs-lang-final-project.herokuapp.com";

const modalWindow: ModalWindow = new ModalWindow();
modalWindow.active();
const autorisationForm: AutorisationForm = new AutorisationForm();
const dataStorage: DataStorage = new DataStorage();
const startPageListener: StartPageListener = new StartPageListener();
const api: API = new API(server);
autorisationForm.buttonAutorisationForm();
const textbook: TextbookPage = new TextbookPage();
textbook.build()
const statistic: StatisticPage = new StatisticPage();
statistic.build();
const selectGame: SelectGamePage = new SelectGamePage();
selectGame.build();
const sprintGame: SprintGame = new SprintGame();
sprintGame.btnClick();
const audioGame: AudioGame = new AudioGame();
audioGame.btnClick();



// const nav = document.querySelector(".nav");
// const groups = document.querySelector(".groups") as HTMLElement;
// const pagination = document.querySelector("#pagination") as HTMLElement;

// nav?.addEventListener("click", async (event) => {
//   const btn = event.target as HTMLElement;
//   const item = btn.parentElement as HTMLElement;
//   const selectedNavItem = item.getAttribute("data-nav");
//   //TODO: add initial loading for nav items
//   switch (selectedNavItem) {
//     case "home":
//       console.log('Home: ', DataStorage.isUserAutorized);
//       break;

//     case "textbook":
//       const dataCards = await API.loadWordsFromServer(0, 0);
//       renderCards(dataCards as IWordsData[], DataStorage.isUserAutorized);
//       dynamicList(quantityGroups, "button", "groups_list__item", groups, englishLevel, "id");
//       dynamicList(visiblePages, "li", "pagination_number", pagination);
      
//       item.classList.add("active");
//       btn.classList.add("active");
//       const firstPaginationElement = pagination.querySelector(".pagination_number") as HTMLElement;
//       const firstGroupsElement = groups?.querySelector(".groups_list__item") as HTMLElement;
//       firstPaginationElement.classList.add("active-page");
//       firstGroupsElement.classList.add("active-group");

//       break;
//   }
// });
