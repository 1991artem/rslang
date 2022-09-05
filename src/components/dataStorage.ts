import { IWordsData, IUserDataToken, IUserData, IGetUserWords, IUserStatistic, IUserSettings, INewToken, IGetUserWord } from './interfaces';
export class DataStorage {
    static allWordsStorage: IWordsData[] = [];
    static isUserAutorized: boolean = false;
    static userData: IUserDataToken | null = null;
    static newToken: INewToken | null = null;
    static wordId: IWordsData | null = null;
    static allAgregatedWords: IWordsData[] | null = null;
    static allAgregatedByIdWords: IWordsData[]| null = null;
    static getUsers: IUserData | null = null
    static userWords: IGetUserWord[] | null = null;
    static userStatistics: IUserStatistic | null = null;
    static userSettings: IUserSettings | null = null;
    static wordForGame: IWordsData[] | null = null;
}