import { StartPageListener } from "../startPageListener";
import "./statistics.scss"
import { DataStorage } from '../dataStorage';
import { API } from "../api";

export class StatisticPage {
    build(){
        if(StartPageListener.MAIN){
            const STATISTIC = document.createElement('div');
            STATISTIC.id = 'statistic'
            STATISTIC.innerHTML = `
            <div>
            <p>Статистика</p>
            <button class="get-statistic">Статистика за день</button>
            <div><p>Не хватает данных по статистике</p></div>
            </div>
            `;
            StartPageListener.MAIN.before(STATISTIC);
            STATISTIC.classList.add('display_none');
        }
        StartPageListener.listen();
        this.buttonClick();

    }
    buttonClick(){
        const onClick = (e:Event) => {
            if((<HTMLElement>e.target).innerHTML == 'Statistics'){
                if(StartPageListener.MAIN){
                    StartPageListener.MAIN.classList.add('display_none');
                    StartPageListener.STATISTIC?.classList.remove('display_none');
                    StartPageListener.SPRINT?.classList.add('display_none');
                    console.log(StartPageListener.STATISTIC?.children[0].children[2]);
                    document.querySelector('.get-statistic')?.addEventListener('click', getDataCtatistic);
                    }
            }
        }
        const getDataCtatistic = () => {
            if(DataStorage.userData){
                API.getUserStatisticFromServer(DataStorage.userData.userId);
            }
        }
        if(StartPageListener.NAV){
            StartPageListener.NAV.addEventListener('click', onClick);
        }
    }
}