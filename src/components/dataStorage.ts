import { IWordsData, IUserDataToken, IUserData, IGetUserWords, IUserStatistic, IUserSettings, INewToken } from './interfaces';
export class DataStorage {
    static allWordsStorage: IWordsData[] = [];
    static userData: IUserDataToken | null = null;
    static newToken: INewToken | null = null;
    static wordId: IWordsData | null = null;
    static allAgregatedWords: IWordsData | null = null;
    static getUsers: IUserData | null = null
    static userWords: IGetUserWords | null = null;
    static userStatistics: IUserStatistic | null = null;
    static userSettings: IUserSettings | null = null;
}