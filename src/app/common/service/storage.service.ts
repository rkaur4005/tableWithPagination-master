import {Injectable} from '@angular/core';

function _window() : any {
   return window;
}

@Injectable()
export class storage{
    win = _window();

    get(key){
        var tmp = this.win.sessionStorage.getItem(key);
        try{
            tmp = JSON.parse(tmp);
        } catch(e){
            console.log(e);
        }
        return tmp;
    }
    set(key, value){
        return this.win.sessionStorage.setItem(key, JSON.stringify(value));
    }

    flush(){
        this.win.sessionStorage.clear();
    }
}