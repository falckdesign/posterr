import { Component, Input } from '@angular/core';
import { Image } from '../../models/post.model';
import { PostConstants } from '../../constants/posts-constants';

@Component({
	selector: 'app-image-gallery',
	templateUrl: './image-gallery.component.html',
	styleUrls: ['./image-gallery.component.less']
})
export class ImageGalleryComponent {

	@Input() images!:Image[];

	photosFolder:string = PostConstants.PHOTOS_FOLDER;

}
