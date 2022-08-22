import { AutorisationForm } from "./components/autorisation/autorisation-form";
import "./styles/css/app.css";
import { API } from "./components/api";
import { DataStorage } from "./components/dataStorage";
import { StartPageListener } from "./components/startPageListener";
import { renderCards } from "./components/textbook/textbook";
import { IWordsData } from "./components/interfacec";

const server: string = "https://rs-lang-final-project.herokuapp.com";

const autorisationForm: AutorisationForm = new AutorisationForm();
const dataStorage: DataStorage = new DataStorage();
const startPageListener: StartPageListener = new StartPageListener();
const api: API = new API(server);
autorisationForm.buttonAutorisationForm();

API.loadWordToIdFromServer("5e9f5ee35eb9e72bc21af713");

const nav = document.querySelector(".nav");
const btn = document.querySelector(".btn-word");
const audio = document.getElementById('sound')

btn?.addEventListener("click", (event: Event) => {
    const btnWord = event.target as Element;
    // if(btnWord.getAt){
    //     console.log('sound')
    // }
});

nav?.addEventListener("click", async (event) => {
  const btn = event.target as HTMLElement;
  const selectedNavItem = btn.getAttribute("data-nav");
  //TODO: add
  switch (selectedNavItem) {
    case "home":
      console.log(selectedNavItem);
      break;

    case "textbook":
      const dataCards = await API.loadWordsFromServer(0, 0);
      renderCards(dataCards as IWordsData[]);
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
