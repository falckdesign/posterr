import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostAddComponent } from './components/post-add/post-add.component';
import { PostFullComponent } from './components/post-full/post-full.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { HttpClientModule } from '@angular/common/http';
import { LinkPreviewComponent } from './components/link-preview/link-preview.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { PostQuotedComponent } from './components/post-quoted/post-quoted.component';
import { FormsModule } from '@angular/forms';
import { PostControlsComponent } from './components/post-controls/post-controls.component';



@NgModule({
  declarations: [
    PostAddComponent,
    PostFullComponent,
    PostListComponent,
    PostCardComponent,
    LinkPreviewComponent,
    ImageGalleryComponent,
    PostQuotedComponent,
    PostControlsComponent
  ],
  imports: [
    CommonModule,
	HttpClientModule,
	FormsModule
  ],
  exports: [

  ]
})
export class PostsModule { }
