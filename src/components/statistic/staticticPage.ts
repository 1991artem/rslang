import { StartPageListener } from "../startPageListener";
import { DataStorage } from '../dataStorage';
import { API } from "../api";
import { IStatistic, IResGame, IGameStatictic } from "../interfaces";

export class StatisticPage {
    build(){
        if(StartPageListener.MAIN){
            const STATISTIC = document.createElement('div');
            STATISTIC.id = 'statistic'
            STATISTIC.innerHTML = `
            <div>
            <p>Статистика</p>
            <button class="get-statistic">Статистика за день</button>
            <div class="statistic-result"><p>Не хватает данных по статистике</p></div>
            </div>
            `;
            StartPageListener.TEXTBOOK_CONTAINER?.after(STATISTIC);
            STATISTIC.classList.add('display_none');
        }
        StartPageListener.listen();
        this.buttonClick();

    }
    buttonClick(){
        const onClick = (e:Event) => {
            if((<HTMLElement>e.target).innerHTML == 'Statistics'){
                if(StartPageListener.MAIN){
                    StartPageListener.STATISTIC?.classList.remove('display_none');
                    StartPageListener.HERO_PAGE?.classList.add("display_none");
                    StartPageListener.ADVANTAGES_PAGE?.classList.add("display_none");
                    StartPageListener.ABOUT_PAGE?.classList.add("display_none");
                    StartPageListener.TEXTBOOK_CONTAINER?.classList.add('display_none')
                    StartPageListener.GAME_PAGE_WRAPPER?.classList.add('display_none');
                    document.querySelector('.get-statistic')?.addEventListener('click', getDataCtatistic);
                    }
            }
        }
        const getDataCtatistic = async () => {
            try{
                if(DataStorage.userData){
                    if(StartPageListener.STATISTIC){
                        let statistic: IStatistic = await API.getUserStatisticFromServer(DataStorage.userData.userId) as IStatistic;
                        console.log(statistic)
                        StartPageListener.STATISTIC.children[0].children[2].innerHTML = `
                        <p>Lern words: ${(<IStatistic>statistic).learnedWords}</p>
                        <p>Statistic "Sprint": ${this.sprintStatictic(statistic)}</p>
                        <p>Statistic "Audio": ${this.audiotStatictic(statistic)}</p>
                        `
                    }
                }
            } catch (e) {
                console.log('Error', e)
            }

        }
        if(StartPageListener.NAV){
            StartPageListener.NAV.addEventListener('click', onClick);
        }
    }

    static async workWithStatistic(array: IResGame[], game: string){
        let newTrueArray: string[] = [];
        let newFalseArray: string[] = [];
        let resultArray: string[] = [];
        array.forEach((element: IResGame)=>{
            if(element.result) {
                newTrueArray.push(element.word)
            } else {
                newFalseArray.push(element.word)
            }
        });

        try{
            if(DataStorage.userData) {
                let statistic: IStatistic = (await API.getUserStatisticFromServer(DataStorage.userData!.userId) as IStatistic);
                let wordArrayFromServer: string[] = [];
                let data: IStatistic = {} as IStatistic;
                let dataGame: IGameStatictic = {
                    miniRes: {
                        date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
                        true: newTrueArray.length,
                        false: newFalseArray.length,
                        longseries: 0,
                        truePercent: 0,
                    }
                };
                if(!statistic){
                    resultArray = wordArrayFromServer.concat(newTrueArray);
                    let filterArray: string[] = Array.from(new Set(resultArray));
                    data = {
                        learnedWords: filterArray.length,
                        optional: {
                            learnedWords: filterArray.join('+'),
                            audio: {} as IGameStatictic,
                            sprint: {} as IGameStatictic,
                        }
                    }
                    if(game === 'sprint'){
                        dataGame.miniRes.longseries = newTrueArray.length;
                        dataGame.miniRes.truePercent = Math.floor((newTrueArray.length / array.length)*100);
                    data.optional.sprint = dataGame;
                    }
                    if(game === 'audio'){
                        dataGame.miniRes.longseries = newTrueArray.length;
                        dataGame.miniRes.truePercent =  Math.floor((newTrueArray.length / array.length)*100);
                        data.optional.audio = dataGame;
                    }
                } else {
                    wordArrayFromServer = statistic.optional.learnedWords? statistic.optional.learnedWords.split(';'): [];
                    resultArray = statistic.optional.learnedWords? wordArrayFromServer.concat(newTrueArray):newTrueArray;
                    let filterArray: string[] = Array.from(new Set(resultArray));
                    data = {
                        learnedWords: filterArray.length,
                        optional: {
                            learnedWords: filterArray.join('+'),
                            audio: statistic.optional? statistic.optional.audio: {} as IGameStatictic,
                            sprint: statistic.optional? statistic.optional.sprint: {} as IGameStatictic,
                        }
                    }
                    if(game === 'sprint'){
                        if(statistic.optional.sprint){
                            dataGame.miniRes.longseries = statistic.optional.sprint.miniRes.longseries? (newTrueArray.length >= statistic.optional.sprint.miniRes.longseries ? newTrueArray.length : statistic.optional.sprint.miniRes.longseries) : newTrueArray.length;
                            dataGame.miniRes.truePercent = statistic.optional.sprint.miniRes.truePercent? ((statistic.optional.sprint.miniRes.truePercent + Math.floor((newTrueArray.length / array.length)*100) )/ 2) : Math.floor((newTrueArray.length / array.length)*100);
                        } else {
                            dataGame.miniRes.longseries = newTrueArray.length;
                            dataGame.miniRes.truePercent = Math.floor((newTrueArray.length / array.length)*100);
                        }
                    data.optional.sprint = dataGame;
                    }
                    if(game === 'audio'){
                    if(statistic.optional.audio){
                        dataGame.miniRes.longseries = statistic.optional.audio.miniRes.longseries? (newTrueArray.length >= statistic.optional.audio.miniRes.longseries ? newTrueArray.length : statistic.optional.audio.miniRes.longseries) : newTrueArray.length;
                        dataGame.miniRes.truePercent = statistic.optional.audio.miniRes.truePercent? ((statistic.optional.audio.miniRes.truePercent + Math.floor((newTrueArray.length / array.length)*100) )/ 2) : Math.floor((newTrueArray.length / array.length)*100);
                    } else {
                        dataGame.miniRes.longseries = newTrueArray.length;
                        dataGame.miniRes.truePercent = Math.floor((newTrueArray.length / array.length)*100);
                    }
                        data.optional.audio = dataGame;
                    }
                }
                console.log(JSON.stringify(data))
                await API.updateUserStatisticFromServer(DataStorage.userData?.userId, JSON.stringify(data))
            };
        } catch (e) {
            console.log('Error', e)
        }

    }
    sprintStatictic(stat: IStatistic):string {
        if(JSON.stringify(stat.optional.sprint) && (stat.optional.sprint as IGameStatictic).miniRes){
            return `
            <p>Date: ${(stat.optional.sprint as IGameStatictic).miniRes?.date}</p>
            <p>Done: ${(stat.optional.sprint as IGameStatictic).miniRes?.true}</p>
            <p>Mistakes: ${(stat.optional.sprint as IGameStatictic).miniRes?.false}</p>
            <p>Long series: ${(stat.optional.sprint as IGameStatictic).miniRes?.longseries}</p>
            <p>Done percent: ${(stat.optional.sprint as IGameStatictic).miniRes?.truePercent} %</p>
            `
        } else return 'Not result';
    }
    audiotStatictic(stat: IStatistic):string {
        if(JSON.stringify(stat.optional.audio) && (stat.optional.audio as IGameStatictic).miniRes){
            return `
            <p>Date: ${(stat.optional.audio as IGameStatictic).miniRes?.date}</p>
            <p>Done: ${(stat.optional.audio as IGameStatictic).miniRes?.true}</p>
            <p>Mistakes: ${(stat.optional.audio as IGameStatictic).miniRes?.false}</p>
            <p>Long series: ${(stat.optional.audio as IGameStatictic).miniRes?.longseries}</p>
            <p>Done percent: ${(stat.optional.audio as IGameStatictic).miniRes?.truePercent} %</p>
            `
        } else return 'Not result';
    }
}