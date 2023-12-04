import { Component, Input } from '@angular/core';
import { Post, PostType, PostTypeList } from '../../models/post.model';
import { PostConstants } from '../../constants/posts-constants';

@Component({
	selector: 'app-post-quoted',
	templateUrl: './post-quoted.component.html',
	styleUrls: ['./post-quoted.component.less']
})

export class PostQuotedComponent {
	avatarFolder: string = PostConstants.AVATAR_FOLDER;
	protected PostTypeList:typeof PostTypeList = PostTypeList;
	public PostType:PostType = '';

	@Input() post!: Post;


	OnCLickRepost() {

	}

	OnClickQuoteRepost() {

	}
}
