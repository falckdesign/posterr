import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { FollowComponent } from './components/follow/follow.component';




@NgModule({
  declarations: [


    ProfileComponent,
      FollowComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
