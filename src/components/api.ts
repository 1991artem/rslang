import { IUserData } from "./interfacec";
import { DataStorage } from './dataStorage';

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
        .then((data: IUserData[]) => {
            DataStorage.UserStorage = data;
            console.log(data);
        })
        .catch((err) => console.log('Signin Error', err));
}
static async addUsersToServer(data:string): Promise<void> {
    await fetch(`${this.url}/signin`, {method: 'POST', headers : API.header, body: data})
        .then((response) => this.errorHandler(response))
        .then((response) => response.json())
        .then((data: IUserData[]) => {
            DataStorage.UserStorage = data;
            console.log(data);
        })
        .catch((err) => console.log('Add User Error', err));
}
}