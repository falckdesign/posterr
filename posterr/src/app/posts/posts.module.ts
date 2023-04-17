import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostAddComponent } from './components/post-add/post-add.component';
import { PostFullComponent } from './components/post-full/post-full.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PostAddComponent,
    PostFullComponent,
    PostListComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
	HttpClientModule
  ],
  exports: [

  ]
})
export class PostsModule { }
