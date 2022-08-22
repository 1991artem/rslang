import { AutorisationForm} from './components/autorisation/autorisation-form';
import "./styles/css/app.css"
import { API } from './components/api';
import { DataStorage } from './components/dataStorage';
import { StartPageListener } from './components/startPageListener';

const server: string = 'https://rs-lang-final-project.herokuapp.com';

const autorisationForm: AutorisationForm = new AutorisationForm();
const dataStorage: DataStorage = new DataStorage();
const startPageListener: StartPageListener = new StartPageListener();
const api: API = new API(server);
autorisationForm.buttonAutorisationForm();
API.loadWordsFromServer(0,0);
API.loadWordToIdFromServer('5e9f5ee35eb9e72bc21af713');


