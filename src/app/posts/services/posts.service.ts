import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { Observable, map } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class PostsService {

	constructor(
		private api: ApiService
	) { }

	getPosts(): Observable<any> {
		return this.api.getPosts();

	}
}
