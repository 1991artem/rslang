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
            <div class="wrapper statistic-wrapper">
            <h2 class="section-title">Statistics</h2>
            <button class="get-statistic">Today's stats</button>
            <div class="statistic-result"></div>
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
            if((<HTMLElement>e.target).innerHTML == 'Statistics' || (<HTMLElement>e.target).id == 'statistic-main-card'){
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
                        StartPageListener.STATISTIC.children[0].children[2].innerHTML = `
                        <p class="card-title stat-title stat-grid-item1">Words learned: ${(<IStatistic>statistic).learnedWords}</p>
                        <p class="card-title stat-title sprint-grid-padding">Sprint: ${this.sprintStatictic(statistic)}</p>
                        <p class="card-title stat-title audio-grid-padding">Audio Challenge: ${this.audiotStatictic(statistic)}</p>
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
        if(document.querySelector('#statistic-main-card')){
            document.querySelector('#statistic-main-card')?.addEventListener('click', onClick)
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
                let statistic: IStatistic | undefined = (await API.getUserStatisticFromServer(DataStorage.userData!.userId) as IStatistic);
                let date = `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`;
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
                    if(statistic){
                        if((statistic.optional.audio && statistic.optional.sprint) && (statistic.optional.audio.miniRes.date != date && statistic.optional.sprint.miniRes.date != date)){
                            data = {
                                learnedWords: 0,
                                optional: {
                                    learnedWords: " ",
                                    audio: {} as IGameStatictic,
                                    sprint: {} as IGameStatictic,
                                }
                            }
                            await API.updateUserStatisticFromServer(DataStorage.userData?.userId, JSON.stringify(data));
                            statistic = (await API.getUserStatisticFromServer(DataStorage.userData!.userId) as IStatistic);
                        }
                        if(!statistic.optional.audio || statistic.optional.audio.miniRes.date != date){
                            let data = {
                            learnedWords: filterArray.length,
                            optional: {
                                learnedWords: filterArray.join('+'),
                                audio: {} as IGameStatictic,
                                sprint: statistic.optional? statistic.optional.sprint: {} as IGameStatictic,
                            }
                        }
                        await API.updateUserStatisticFromServer(DataStorage.userData?.userId, JSON.stringify(data));
                        statistic = (await API.getUserStatisticFromServer(DataStorage.userData!.userId) as IStatistic);
                    }
                    if(!statistic.optional.sprint || statistic.optional.sprint.miniRes.date != date){
                        let data = {
                        learnedWords: filterArray.length,
                        optional: {
                            learnedWords: filterArray.join('+'),
                            audio: statistic.optional? statistic.optional.audio: {} as IGameStatictic,
                            sprint: {} as IGameStatictic,
                        }
                    }
                    await API.updateUserStatisticFromServer(DataStorage.userData?.userId, JSON.stringify(data));
                    statistic = (await API.getUserStatisticFromServer(DataStorage.userData!.userId) as IStatistic);
                }
                }
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
                await API.updateUserStatisticFromServer(DataStorage.userData?.userId, JSON.stringify(data))
            };
        } catch (e) {
            console.log('Error', e)
        }

    }
    sprintStatictic(stat: IStatistic):string {
        if(JSON.stringify(stat.optional.sprint) && (stat.optional.sprint as IGameStatictic).miniRes){
            return `
            <div class="statistic-info_sprint">
            <p class="paragraph-text"><span class="stat-span">Date:</span> ${(stat.optional.sprint as IGameStatictic).miniRes?.date}</p>
            <p class="paragraph-text"><span class="stat-span">Done:</span> ${(stat.optional.sprint as IGameStatictic).miniRes?.true}</p>
            <p class="paragraph-text"><span class="stat-span">Mistakes:</span> ${(stat.optional.sprint as IGameStatictic).miniRes?.false}</p>
            <p class="paragraph-text"><span class="stat-span">In a row:</span> ${(stat.optional.sprint as IGameStatictic).miniRes?.longseries}</p>
            <p class="paragraph-text"><span class="stat-span">Accuracy:</span> ${(stat.optional.sprint as IGameStatictic).miniRes?.truePercent} %</p>
            </div>
            `
        } else return `
            <div class="statistic-info_sprint">
            <p class="paragraph-text"><span class="stat-span">Date:</span> Not result</p>
            <p class="paragraph-text"><span class="stat-span">Done:</span> 0 </p>
            <p class="paragraph-text"><span class="stat-span">Mistakes:</span> 0 </p>
            <p class="paragraph-text"><span class="stat-span">In a row:</span> 0 </p>
            <p class="paragraph-text"><span class="stat-span">Accuracy:</span> 0 %</p>
            </div>
            `;
    }
    audiotStatictic(stat: IStatistic):string {
        if(JSON.stringify(stat.optional.audio) && (stat.optional.audio as IGameStatictic).miniRes){
            return `
            <div class="statistic-info_audio">
            <p class="paragraph-text"><span class="stat-span">Date:</span> ${(stat.optional.audio as IGameStatictic).miniRes?.date}</p>
            <p class="paragraph-text"><span class="stat-span">Done:</span> ${(stat.optional.audio as IGameStatictic).miniRes?.true}</p>
            <p class="paragraph-text"><span class="stat-span">Mistakes:</span> ${(stat.optional.audio as IGameStatictic).miniRes?.false}</p>
            <p class="paragraph-text"><span class="stat-span">In a row:</span> ${(stat.optional.audio as IGameStatictic).miniRes?.longseries}</p>
            <p class="paragraph-text"><span class="stat-span">Accuracy:</span> ${(stat.optional.audio as IGameStatictic).miniRes?.truePercent} %</p>
            </div>
            `
        } else return `
            <div class="statistic-info_sprint">
            <p class="paragraph-text"><span class="stat-span">Date:</span> Not result</p>
            <p class="paragraph-text"><span class="stat-span">Done:</span> 0 </p>
            <p class="paragraph-text"><span class="stat-span">Mistakes:</span> 0 </p>
            <p class="paragraph-text"><span class="stat-span">In a row:</span> 0 </p>
            <p class="paragraph-text"><span class="stat-span">Accuracy:</span> 0 %</p>
            </div>
            `;
    }
}
