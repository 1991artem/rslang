export interface IUserData {
    id?: string,
    name: string,
    email: string,
    password: string
}
export interface IWordsData {
        id: string,
        group: number,
        page: number,
        word: string,
        image: string,
        audio: string,
        audioMeaning: string,
        audioExample: string,
        textMeaning: string,
        textExample: string,
        transcription: string,
        wordTranslate: string,
        textMeaningTranslate: string,
        textExampleTranslate: string
}

export interface IDataToken {
    message: string,
    token: string,
    refreshToken: string,
    userId: string,
    name: string
}