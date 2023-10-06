import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { FollowComponent } from './components/follow/follow.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [


    ProfileComponent,
      FollowComponent,
  ],
  imports: [
    CommonModule,
	HttpClientModule
  ]
})
export class UserModule { }
