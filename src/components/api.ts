import { IUserData, IUserDataToken, IWordsData, IGetUserWords, IUserStatistic, IStatistic, IUserSettings } from "./interfaces";
import { DataStorage } from "./dataStorage";
import { AutorisationForm } from "./autorisation/autorisation-form";

export class API {
  static url: string;
  //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmY2NDQzZTRlMGM3MDAxNmQ1ZGE1NiIsImlhdCI6MTY2MTMxOTk1NywiZXhwIjoxNjYxMzM0MzU3fQ.DZho5jalR2rIP1tTdtgPEKbEGvytAWQUTmOIaxsubjQ
  constructor(url: string) {
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

  static async signinUsersFromServer(data: string): Promise<void> {
    await fetch(`${this.url}/signin`, { method: "POST", headers: {"Content-Type": "application/json", 'Accept': "application/json",'Authorization': `Bearer ${API.getToken()}`}, body: data })
      .then((response) => this.errorHandler(response))
      .then((response) => response.json())
      .then((data: IUserDataToken) => {
        console.log(data);
        DataStorage.userData = data;
        if(!sessionStorage.getItem(`${data.userId}`)){
          sessionStorage.setItem(`${data.userId}`,JSON.stringify(data));
        } else {
          API.checkToken();
        }
        AutorisationForm.closeModalWindow();
      })
      .catch((err) => {
        console.log("Не удалось найти такого пользователя!!! Повторите попытку");
      });
  }
  static async createUsersOnServer(data: string): Promise<void> {
    await fetch(`${this.url}/users`, { method: "POST", headers: {"Content-Type": "application/json", 'Accept': "application/json",'Authorization': `Bearer ${API.getToken()}`}, body: data })
      .then((response) => this.errorHandler(response))
      .catch((err) => console.log("create User Error", err));
  }

  static async getUserFromServer(id: string) {
    await fetch(`${this.url}/users/${id}`, { method: "GET", headers:  {"Content-Type": "application/json", 'Accept': "application/json",'Authorization': `Bearer ${API.getToken()}`}})
      .then((response) => this.errorHandler(response))
      .then((response) => response.json())
      .then((data: IUserData) => {
        DataStorage.getUsers = data;
        console.log(data);
      })
      .catch((err) => {
        console.log("GET USER Error", err)
      });
  }

  static async updateUserOnServer(id: string, data: string): Promise<void> {
    await fetch(`${this.url}/users/`, { method: "PUT", headers: {"Content-Type": "application/json", 'Accept': "application/json",'Authorization': `Bearer ${API.getToken()}`}, body: data }).catch((err) =>
      console.log("create User Error", err)
    );
  }

  static async deleteUserOnServer(id: string): Promise<void> {
    await fetch(`${this.url}/users/`, { method: "DELETE", headers: {"Content-Type": "application/json", 'Accept': "application/json",'Authorization': `Bearer ${API.getToken()}`} }).catch((err) =>
      console.log("delete User Error", err)
    );
  }

  static async getNewUserTokenFromServer(id: string) {
    await fetch(`${this.url}/users/${id}/tokens`, { method: "GET", headers:  {"Content-Type": "application/json", 'Accept': "application/json",'Authorization': `Bearer ${DataStorage.userData?.refreshToken}`}})
      .then((response) => this.errorHandler(response))
      .then((response) => response.json())
      .then((data: IUserDataToken) => {
        DataStorage.newToken = data;
      })
      .catch((err) => console.log("GET USER Error", err));
  }

  // ================================== Users/Words ===========================================================

  static async getUserWordsFromServer(id: string) {
    await fetch(`${this.url}/users/${id}/words`, { method: "GET", headers: {"Content-Type": "application/json", 'Accept': "application/json",'Authorization': `Bearer ${API.getToken()}`} })
      .then((response) => this.errorHandler(response))
      .then((response) => response.json())
      .then((data: IGetUserWords) => {
        DataStorage.userWords = data;
        console.log(data);
      })
      .catch((err) => console.log("GET USER WORDS Error", err));
  }

  static async createUsersWordsOnServer(userId: string, wordId: string, data: string): Promise<void> {
    await fetch(`${this.url}/users/${userId}/${wordId}`, { method: "POST", headers:{"Content-Type": "application/json", 'Accept': "application/json",'Authorization': `Bearer ${API.getToken()}`}, body: data })
      .then((response) => this.errorHandler(response))
      .catch((err) => console.log("create User Error", err));
  }

  static async getUserWordsByIdFromServer(userId: string, wordId: string) {
    await fetch(`${this.url}/users/${userId}/words/${wordId}`, { method: "GET", headers: {"Content-Type": "application/json", 'Accept': "application/json",'Authorization': `Bearer ${API.getToken()}`} })
      .then((response) => this.errorHandler(response))
      .then((response) => response.json())
      .then((data: IGetUserWords) => {
        console.log(data);
      })
      .catch((err) => console.log("GET USER WORDS Error", err));
  }

  static async updateUserWordsOnServer(userId: string, wordId: string, data: string): Promise<void> {
    await fetch(`${this.url}/users/${userId}/words/${wordId}`, { method: "PUT", headers: {"Content-Type": "application/json", 'Accept': "application/json",'Authorization': `Bearer ${API.getToken()}`}, body: data }).catch((err) =>
      console.log("create User Error", err)
    );
  }

  static async deleteUserWordsOnServer(userId: string, wordId: string, data: string): Promise<void> {
    await fetch(`${this.url}/users/${userId}/words/${wordId}`, { method: "DELETE", headers: {"Content-Type": "application/json", 'Accept': "application/json",'Authorization': `Bearer ${API.getToken()}`}, body: data }).catch(
      (err) => console.log("create User Error", err)
    );
  }

  // ================================== Users/AggregatedWords ===========================================================

  static async getAllUserAgregatedWordsFromServer(userId: string) {
    await fetch(`${this.url}/users/${userId}/aggregatedWords`, { method: "GET", headers: {"Content-Type": "application/json", 'Accept': "application/json",'Authorization': `Bearer ${API.getToken()}`} })
      .then((response) => this.errorHandler(response))
      .then((response) => response.json())
      .then((data: IWordsData) => {
        DataStorage.allAgregatedWords = data;
        console.log(data);
      })
      .catch((err) => console.log("load agregated word Error", err));
  }

  static async getAllUserAgregatedWordsByIdFromServer(userId: string, wordId: string) {
    await fetch(`${this.url}/users/${userId}/aggregatedWords/${wordId}`, { method: "GET", headers: {"Content-Type": "application/json", 'Accept': "application/json",'Authorization': `Bearer ${API.getToken()}`} })
      .then((response) => this.errorHandler(response))
      .then((response) => response.json())
      .then((data: IWordsData) => {
        console.log(data);
      })
      .catch((err) => console.log("load agregated word Error", err));
  }

  // ================================== Users/Statistic ===========================================================

  static async getUserStatisticFromServer(userId: string): Promise<IStatistic | void> {
    return await fetch(`${this.url}/users/${userId}/statistics`, { method: "GET", headers: {"Content-Type": "application/json", 'Accept': "application/json",'Authorization': `Bearer ${API.getToken()}`} })
      .then((response) => this.errorHandler(response))
      .then((response) => response.json())
      .then((data: IStatistic) => {
        return data;
      })
      .catch((err) => console.log("load agregated word Error", err));
  }

  static async updateUserStatisticFromServer(userId: string, data: string): Promise<void> {
    await fetch(`${this.url}/users/${userId}/statistics`, { method: "PUT", headers: {"Content-Type": "application/json", 'Accept': "application/json",'Authorization': `Bearer ${API.getToken()}`}, body: data }).catch((err) =>
      console.log("create User Error", err)
    );
  }

  // ================================== Users/Setting ===========================================================

  static async getUserSettingsFromServer(userId: string) {
    await fetch(`${this.url}/users/${userId}/settings`, { method: "GET", headers: {"Content-Type": "application/json", 'Accept': "application/json",'Authorization': `Bearer ${API.getToken()}`} })
      .then((response) => this.errorHandler(response))
      .then((response) => response.json())
      .then((data: IUserSettings) => {
        DataStorage.userSettings = data;
        console.log(data);
      })
      .catch((err) => console.log("load agregated word Error", err));
  }

  static async updateUserSettingsFromServer(userId: string, data: string): Promise<void> {
    await fetch(`${this.url}/users/${userId}/settings`, { method: "PUT", headers: {"Content-Type": "application/json", 'Accept': "application/json",'Authorization': `Bearer ${API.getToken()}`}, body: data }).catch((err) =>
      console.log("create User Error", err)
    );
  }

  // ================================== GET WORDS ===========================================================

  static async loadWordsFromServer(group: number, page: number): Promise<IWordsData[]| void> {
    return await fetch(`${this.url}/words?group=${group}&page=${page}`, { method: "GET", headers: {"Content-Type": "application/json", 'Accept': "application/json",'Authorization': `Bearer ${API.getToken()}`} })
      .then((response) => this.errorHandler(response))
      .then((response) => response.json())
      .then((data: IWordsData[]) => {
        return data;
      })
      .catch((err) => console.log("Add User Error", err));
  }

  static async loadWordToIdFromServer(id: string) {
    await fetch(`${this.url}/words/${id}`, { method: "GET", headers: {"Content-Type": "application/json", 'Accept': "application/json",'Authorization': `Bearer ${API.getToken()}`} })
      .then((response) => this.errorHandler(response))
      .then((response) => response.json())
      .then((data: IWordsData) => {
        DataStorage.wordId = data;
        console.log(data);
      })
      .catch((err) => console.log("load word Error", err));
  }
  static checkToken(){
      if(DataStorage.userData?.userId){
        API.getNewUserTokenFromServer(DataStorage.userData?.userId)
        if(DataStorage.newToken){
          API.saveToken()
        }
    }
  }
  static saveToken(){
    if(DataStorage.userData){
      DataStorage.userData.refreshToken = <string>DataStorage.newToken?.refreshToken;
      DataStorage.userData.token = <string>DataStorage.newToken?.token;
      sessionStorage.setItem(`${DataStorage.userData.userId}`,JSON.stringify(DataStorage.userData));
      console.log(sessionStorage.getItem(DataStorage.userData.userId));
    }

  }
  static getToken(): string | undefined{
    if(DataStorage.userData){
      let user = sessionStorage.getItem(DataStorage.userData.userId);
      if(user){
        console.log(JSON.parse(user).token)
        return JSON.parse(user).token;
      }
    }
  }
}
