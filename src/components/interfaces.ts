export interface IUserData {
  id?: string;
  name: string;
  email: string;
  password: string;
}
export interface IWordsData {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
}

export interface IUserDataToken {
  message: string;
  name: string;
  refreshToken: string;
  token: string;
  userId: string;
}

export interface IGetUserWords {
  difficulty: string;
  optional: {};
}

export interface IGetUserWord {
  difficulty: string;
  id: string;
  wordId: string

}

export interface IUserStatistic {
  learnedWords: number;
  optional: {};
}

export interface IUserSettings {
  wordsPerDay: number;
  optional: {};
}
export interface INewToken {
  refreshToken: string;
  token: string;
}
export interface IResGame {
  word: string;
  wordTranslate: string;
  answer: string;
  result: boolean;
}
export interface IStatistic {
  id?: string;
  learnedWords: number;
  optional: {
    learnedWords?: string;
    sprint: IGameStatictic;
    audio: IGameStatictic;
  }
}
export interface IGameStatictic {
  miniRes: {
    date: string;
    true: number;
    false: number
    longseries?: number,
    truePercent?: number,
  }
}
export interface ICalculateResult {
  percent: number;
  mistakes: number
}