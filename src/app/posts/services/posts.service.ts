import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Observable } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class PostsService {



	constructor(
		private api: ApiService
	) { }


	loadPosts(): Observable<any>{
		return this.api.get("assets/json/posts.json");
	}

	getPosts(): Observable<any> {
		return this.api.get("assets/json/posts.json");
		//const postList =
		//let filteredList = postList.filter((post)=>{});
		//return filteredList;
	}

	filterPosts(){

	};
}
