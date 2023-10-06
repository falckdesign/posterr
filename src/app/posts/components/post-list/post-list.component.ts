import { Component, OnInit } from '@angular/core';
import { Post, PostFilter } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';
import { UserService } from 'src/app/user/services/user.service';
import { User } from 'src/app/user/models/user.model';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.less']
})

export class PostListComponent implements OnInit {
	postsFilter:any = PostFilter;
	postsList!:Post[];
	activeUser!:User;

	constructor(
		private postsService: PostsService,
		private userService: UserService
	){

	}

	ngOnInit(): void {
		this.postsService.getPosts().subscribe({
			next:(posts)=>{
				this.postsList = posts;
			},
			error: (error=>{
				throw error;
			})
		});
	}

	OnClickFilter(selectedFiler:PostFilter):void{
		this.postsFilter = selectedFiler;
	}
}
