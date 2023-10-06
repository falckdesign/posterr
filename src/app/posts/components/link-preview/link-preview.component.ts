import { Component, Input } from '@angular/core';
import { LinkPreview } from '../../models/post.model';
import { PostConstants } from '../../constants/posts-constants';

@Component({
	selector: 'app-link-preview',
	templateUrl: './link-preview.component.html',
	styleUrls: ['./link-preview.component.less']
})

export class LinkPreviewComponent {
	@Input() linkPreview!:LinkPreview;

	previewsFolder:string = PostConstants.LINK_PREVIEW_FOLDER;

}
