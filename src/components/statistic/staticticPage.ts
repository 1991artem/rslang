import { StartPageListener } from "../startPageListener";
import { DataStorage } from '../dataStorage';
import { API } from "../api";
import { IStatistic } from "../interfaces";

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
                    StartPageListener.SPRINT?.classList.add('display_none');
                    console.log(StartPageListener.STATISTIC?.children[0].children[2]);
                    document.querySelector('.get-statistic')?.addEventListener('click', getDataCtatistic);
                    }
            }
        }
        const getDataCtatistic = async () => {
            if(DataStorage.userData){
                if(StartPageListener.STATISTIC){
                    let statistic = await API.getUserStatisticFromServer(DataStorage.userData.userId);
                    StartPageListener.STATISTIC.children[0].children[2].innerHTML = (<IStatistic>statistic).learnedWords.toString()
                }
            }
        }
        if(StartPageListener.NAV){
            StartPageListener.NAV.addEventListener('click', onClick);
        }
    }
}