import { IWordsData, IUserDataToken, IUserData, IGetUserWords, IUserStatistic, IUserSettings } from './interfacec';
export class DataStorage {
    static allWordsStorage: IWordsData[] = [];
    static userData: IUserDataToken | null = null;
    static wordId: IWordsData | null = null;
    static allAgregatedWords: IWordsData | null = null;
    static getUsers: IUserData | null = null
    static userWords: IGetUserWords | null = null;
    static userStatistics: IUserStatistic | null = null;
    static userSettings: IUserSettings | null = null;
}