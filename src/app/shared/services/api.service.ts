import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/posts/models/post.model';
import { Observable } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(
		private httpClient: HttpClient
	) { }

	getPosts():Observable<any>{
		return this.httpClient.get("assets/json/posts.json");
	}
}
