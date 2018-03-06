import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { storage } from './storage.service';
import 'rxjs';

@Injectable()
export class UserService {
    constructor(
        private http:Http,
        private store: storage 
    ){}

    get() {
        return this.http.get('https://randomuser.me/api/?results=100')
        .map((res : Response) => res.json().results);
    }

    abort(data){
        return data = data.map(e => {
            e.status = "Aborted";
            e.statusColor = "Aborted";
            return e;
        })
        // return this.http.post('https://httpbin.org/post', {data : data})
        // .map((res : Response) => res.json().results);
    }
    
    save(data){
        return this.http.post('https://httpbin.org/post', {data : data})
        .map((res : Response) => res.json().results);
    }
    delete(ids){
        var promise = ids.map(id => this.http.get(`https://httpbin.org/get?id=${id}`).map((res : Response) => res.json()).toPromise());
        return Promise.all(promise);
    }
    filter(nat){
        return this.http.get(`https://randomuser.me/api/?results=${Math.floor(Math.random() * 70) + 30}`)
        .map((res : Response) => res.json().results);
    }

    search(filter){
        var filterObj = {
            statuses : filter.status,
            searchText : '',
            eventName : filter.event,
            updateDate : '',
            officeName : filter.office,
            systemName : filter.system
        }

        //Please use your search URL and pass filter obj
        return this.http.get('https://randomuser.me/api/?results=100')
        .map((res : Response) => res.json().results);
    }
    


}