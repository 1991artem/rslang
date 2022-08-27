import { StartPageListener } from "../startPageListener";
import "./sprint.scss"
import { DataStorage } from '../dataStorage';
import { API } from "../api";

export class SprintPage {
    build(){
        if(StartPageListener.MAIN){
            const SPRINT = document.createElement('div');
            SPRINT.id = 'sprint-game'
            SPRINT.innerHTML = `
            <div>
            <p>Игра "Спринт"</p>
            <select class="select-level-sprint" name="level-english">
                <option value="level-1" selected="selected">1</option>
            </select>
            <button class="sprint-game-btn">Lets go!!!</button>
            </div>
            `;
            StartPageListener.MAIN.before(SPRINT);
            SPRINT.classList.add('display_none');
        }
        StartPageListener.listen();
        this.buttonClick();

    }
    buttonClick(){
        const onClick = (e:Event) => {
            console.log(e.target)
            if((<HTMLElement>e.target).innerHTML == 'Games'){
                if(StartPageListener.MAIN){
                    StartPageListener.MAIN.classList.add('display_none');
                    StartPageListener.SPRINT?.classList.remove('display_none');
                    StartPageListener.STATISTIC?.classList.add('display_none');
                    }
            }
        }
        if(StartPageListener.NAV){
            StartPageListener.NAV.addEventListener('click', onClick);
        }
    }
}