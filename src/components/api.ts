import { IUserData, IUserDataToken, IWordsData, IGetUserWords, IUserStatistic, IUserSettings } from "./interfacec";
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

// ================================== USERS ===========================================================

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
        .catch((err) => console.log('create User Error', err));
}

static async getUserFromServer(id:string){
    await fetch(`${this.url}/users/${id}`, {method: 'GET', headers : API.header})
    .then((response) => this.errorHandler(response))
    .then((response) => response.json())
    .then((data: IUserData) => {
        DataStorage.getUsers = data;
        console.log(data);
    })
    .catch((err) => console.log('GET USER Error', err));
}

static async updateUserOnServer(id:string, data:string): Promise<void> {
    await fetch(`${this.url}/users/`, {method: 'PUT', headers : API.header, body: data})
        .catch((err) => console.log('create User Error', err));
}

static async deleteUserOnServer(id:string): Promise<void> {
    await fetch(`${this.url}/users/`, {method: 'DELETE', headers : API.header})
        .catch((err) => console.log('delete User Error', err));
}

static async getNewUserTokenFromServer(id:string){
    await fetch(`${this.url}/users/${id}/tokens`, {method: 'GET', headers : API.header})
    .then((response) => this.errorHandler(response))
    .then((response) => response.json())
    .then((data: IUserDataToken) => {
        DataStorage.userData = data;
        console.log(data);
    })
    .catch((err) => console.log('GET USER Error', err));
}

// ================================== Users/Words ===========================================================


static async getUserWordsFromServer(id:string){
    await fetch(`${this.url}/users/${id}/words`, {method: 'GET', headers : API.header})
    .then((response) => this.errorHandler(response))
    .then((response) => response.json())
    .then((data: IGetUserWords) => {
        DataStorage.userWords = data;
        console.log(data);
    })
    .catch((err) => console.log('GET USER WORDS Error', err));
}

static async createUsersWordsOnServer(userId:string,wordId:string, data:string): Promise<void> {
    await fetch(`${this.url}/users/${userId}/${wordId}`, {method: 'POST', headers : API.header, body: data})
        .then((response) => this.errorHandler(response))
        .catch((err) => console.log('create User Error', err));
}

static async getUserWordsByIdFromServer(userId:string, wordId:string){
    await fetch(`${this.url}/users/${userId}/words/${wordId}`, {method: 'GET', headers : API.header})
    .then((response) => this.errorHandler(response))
    .then((response) => response.json())
    .then((data: IGetUserWords) => {
        console.log(data);
    })
    .catch((err) => console.log('GET USER WORDS Error', err));
}

static async updateUserWordsOnServer(userId:string, wordId:string, data:string): Promise<void> {
    await fetch(`${this.url}/users/${userId}/words/${wordId}`, {method: 'PUT', headers : API.header, body: data})
        .catch((err) => console.log('create User Error', err));
}

static async deleteUserWordsOnServer(userId:string, wordId:string, data:string): Promise<void> {
    await fetch(`${this.url}/users/${userId}/words/${wordId}`, {method: 'DELETE', headers : API.header, body: data})
        .catch((err) => console.log('create User Error', err));
}


// ================================== Users/AggregatedWords ===========================================================

static async getAllUserAgregatedWordsFromServer(userId:string){
    await fetch(`${this.url}/users/${userId}/aggregatedWords`, {method: 'GET', headers : API.header})
    .then((response) => this.errorHandler(response))
    .then((response) => response.json())
    .then((data: IWordsData) => {
        DataStorage.allAgregatedWords = data;
        console.log(data);
    })
    .catch((err) => console.log('load agregated word Error', err));
}

static async getAllUserAgregatedWordsByIdFromServer(userId:string,  wordId:string){
    await fetch(`${this.url}/users/${userId}/aggregatedWords/${wordId}`, {method: 'GET', headers : API.header})
    .then((response) => this.errorHandler(response))
    .then((response) => response.json())
    .then((data: IWordsData) => {
        console.log(data);
    })
    .catch((err) => console.log('load agregated word Error', err));
}

// ================================== Users/Statistic ===========================================================

static async getUserStatisticFromServer(userId:string){
    await fetch(`${this.url}/users/${userId}/statistics`, {method: 'GET', headers : API.header})
    .then((response) => this.errorHandler(response))
    .then((response) => response.json())
    .then((data: IUserStatistic) => {
        DataStorage.userStatistics = data;
        console.log(data);
    })
    .catch((err) => console.log('load agregated word Error', err));
}

static async updateUserStatisticFromServer(userId:string,data:string): Promise<void> {
    await fetch(`${this.url}/users/${userId}/statistics`, {method: 'PUT', headers : API.header, body: data})
        .catch((err) => console.log('create User Error', err));
}

// ================================== Users/Setting ===========================================================

static async getUserSettingsFromServer(userId:string){
    await fetch(`${this.url}/users/${userId}/settings`, {method: 'GET', headers : API.header})
    .then((response) => this.errorHandler(response))
    .then((response) => response.json())
    .then((data: IUserSettings) => {
        DataStorage.userSettings = data;
        console.log(data);
    })
    .catch((err) => console.log('load agregated word Error', err));
}

static async updateUserSettingsFromServer(userId:string,data:string): Promise<void> {
    await fetch(`${this.url}/users/${userId}/settings`, {method: 'PUT', headers : API.header, body: data})
        .catch((err) => console.log('create User Error', err));
}



// ================================== GET WORDS ===========================================================

static async loadWordsFromServer(group:number, page:number){
    await fetch(`${this.url}/words?group=${group}&page=${page}`, {method: 'GET', headers : API.header})
    .then((response) => this.errorHandler(response))
    .then((response) => response.json())
    .then((data: IWordsData[]) => {
        DataStorage.allWordsStorage = data;
        console.log(data);
    })
    .catch((err) => console.log('load words Error', err));
}
static async loadWordToIdFromServer(id:string){
        await fetch(`${this.url}/words/${id}`, {method: 'GET', headers : API.header})
        .then((response) => this.errorHandler(response))
        .then((response) => response.json())
        .then((data: IWordsData) => {
            DataStorage.wordId = data;
            console.log(data);
        })
        .catch((err) => console.log('load word Error', err));
}
}

