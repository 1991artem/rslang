import { API } from "./api";
export class Test {
    active(){
        const onClick = (event: Event) => {
            API.getUserFromServer('62ff6443e4e0c70016d5da56');
        }
            document.getElementById('test')?.addEventListener('click', onClick);
    }
}