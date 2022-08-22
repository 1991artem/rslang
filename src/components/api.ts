import { IUserData, IUserDataToken, IWordsData } from "./interfacec";
import { DataStorage } from './dataStorage';
import { AutorisationForm } from './autorisation/autorisation-form';

export class API {
    static url: string;
    static header:{} = {'Content-Type': 'application/json','Accept': 'application/json'};
    constructor(url: string){
        API.url = url;
    }
    static errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status > 404) console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
}
static async signinUsersFromServer(data:string): Promise<void> {
    await fetch(`${this.url}/signin`, {method: 'POST', headers : API.header, body: data})
        .then((response) => this.errorHandler(response))
        .then((response) => response.json())
        .then((data: IUserDataToken) => {
            console.log(data);
            DataStorage.userData = data;
            AutorisationForm.closeModalWindow();
        })
        .catch((err) => {
            console.log('Не удалось найти такого пользователя!!! Повторите попытку');
        });
}
static async createUsersOnServer(data:string): Promise<void> {
    await fetch(`${this.url}/users`, {method: 'POST', headers : API.header, body: data})
        .then((response) => this.errorHandler(response))
        .then((response) => response.json())
        .then((data: IUserData) => {
            console.log(data);
        })
        .catch((err) => console.log('Add User Error', err));
}
static async loadWordsFromServer(group:number, page:number){
    await fetch(`${this.url}/words?group=${group}&page=${page}`, {method: 'GET', headers : API.header})
    .then((response) => this.errorHandler(response))
    .then((response) => response.json())
    .then((data: IWordsData[]) => {
        console.log(data);
    })
    .catch((err) => console.log('Add User Error', err));
}
static async loadWordToIdFromServer(id:string){
        await fetch(`${this.url}/words/${id}`, {method: 'GET', headers : API.header})
        .then((response) => this.errorHandler(response))
        .then((response) => response.json())
        .then((data: IWordsData) => {
            DataStorage.wordId = data;
            console.log(data);
        })
        .catch((err) => console.log('Add User Error', err));
}
}