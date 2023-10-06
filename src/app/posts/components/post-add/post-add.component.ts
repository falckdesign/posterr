import { Component } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostConstants } from '../../constants/posts-constants';
import { User } from 'src/app/user/models/user.model';
import { UserService } from 'src/app/user/services/user.service';

@Component({
	selector: 'app-post-add',
	templateUrl: './post-add.component.html',
	styleUrls: ['./post-add.component.less']
})
export class PostAddComponent {
	public user:User = new User();
	public post!:Post;
	public postInput:string = "";
	public avatarFolder: string = PostConstants.AVATAR_FOLDER;

	constructor(
		private userService:UserService
	){
		this.userService.getActiveUser()?.subscribe({
			next:(user)=>{
				console.log("user: ", user);
				this.user = user;
			},
			error:(e)=>{
				throw e.error;
			}
		})
	}


}
