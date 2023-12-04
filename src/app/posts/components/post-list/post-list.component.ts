import { Component, OnInit } from '@angular/core';
import { Post, PostFilter, PostFilterList } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';
import { UserService } from 'src/app/user/services/user.service';
import { User } from 'src/app/user/models/user.model';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.less']
})

export class PostListComponent implements OnInit {
	postFilterList = PostFilterList;
	activePostsFilter:PostFilter = '';
	postsList!:Post[];
	activeUser!:User;

	constructor(
		private postsService: PostsService,
		private userService: UserService
	){

	}

	ngOnInit(): void {
		this.postsService.getPosts().subscribe({
			next:(posts:Post[])=>{
				this.postsList = posts.filter((post:Post)=>{
					//return post.
				});
			},
			error: (error=>{
				throw error;
			})
		});
	}

	OnClickFilter(selectedFiler:string):void{
		const _selectedFiler:PostFilter = selectedFiler as PostFilter;
		this.activePostsFilter = _selectedFiler;
	}
}
