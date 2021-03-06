import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    constructor(private http: Http) {
        console.log('Post Service');
    }

    getPosts() {
        return this.http.get('http://localhost:4200/api/blog/posts')
            .map(res => res.json());
    }
}