import { Component, Input } from '@angular/core';
import { Post, PostType } from '../../models/post.model';
import { PostConstants } from '../../constants/posts-constants';

@Component({
	selector: 'app-post-card',
	templateUrl: './post-card.component.html',
	styleUrls: ['./post-card.component.less']
})

export class PostCardComponent {
	avatarFolder: string = PostConstants.AVATAR_FOLDER;
	public postType:PostType = '';

	@Input() post!: Post;

}
