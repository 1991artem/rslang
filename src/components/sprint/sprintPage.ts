import { StartPageListener } from "../startPageListener";
import "./sprint.scss"

export class SprintPage {
    build(){
        if(StartPageListener.MAIN){
            const SPRINT = document.createElement('div');
            SPRINT.classList.add('display_none');
            SPRINT.id = 'sprint-game'
            SPRINT.innerHTML = `
            <div class="sprintGameInfo">
            <p>Игра "Спринт"</p>
            <p>Тренировка Спринт поможет тебе проверить знаешь ли ты правильный перевод.
            Игра длится 1 минуту или пока не закончаться слова.</p>
            <p>Чтобы дать ответ, кликай по нему мышкой или нажимай клавиши-стрелки</p>
            <p>Выберите уровень сложности</p>
            <select class="select-level-sprint" name="level-english">
                <option value="level-1" selected="selected">1 уровень сложности</option>
                <option value="level-2" selected="selected">2 уровень сложности</option>
                <option value="level-3" selected="selected">3 уровень сложности</option>
                <option value="level-4" selected="selected">4 уровень сложности</option>
                <option value="level-5" selected="selected">5 уровень сложности</option>
                <option value="level-6" selected="selected">6 уровень сложности</option>
            </select>
            <button class="sprint-game-btn">Lets go!!!</button>
            </div>
            `;
            StartPageListener.MAIN.before(SPRINT);
        }
        StartPageListener.listen();
        this.buttonClick();

    }
    buttonClick(){
        const onClick = (e:Event) => {
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