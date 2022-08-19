import './components/styles/autorisation.scss';
import { AutorisationForm} from './components/autorisation/autorisation-form';
import { API } from './components/api';
import { DataStorage } from './components/dataStorage';
import { StartPageListener } from './components/startPageListener';

const server: string = 'https://rs-lang-final-project.herokuapp.com';
const user = {
    "name": "admin",
    "email": "admin@mail.ru",
    "password": "2022admin2022"
  }

const autorisationForm: AutorisationForm = new AutorisationForm();
const dataStorage: DataStorage = new DataStorage();
const startPageListener: StartPageListener = new StartPageListener();
const api: API = new API(server);
//API.signinUsersFromServer(JSON.stringify(user));
autorisationForm.buildAutorisationForm();


