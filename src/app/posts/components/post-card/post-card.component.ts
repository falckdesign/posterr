import { Component, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostConstants } from '../../constants/posts-constants';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.less']
})

export class PostCardComponent {
	avatarFolder:string = PostConstants.AVATAR_FOLDER;
	photosFolder:string = PostConstants.PHOTOS_FOLDER;
	previewsFolder:string = PostConstants.LINK_PREVIEW_FOLDER;

	@Input() post!:Post;


	OnCLickRepost() {

	}

	OnClickQuoteRepost() {

	}
}
