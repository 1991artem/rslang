import { IWordsData, IUserDataToken } from './interfacec';
export class DataStorage {
    static allWordsStorage: IWordsData[] = [];
    static userData: IUserDataToken | null = null;
    static wordId: IWordsData | null = null;
}