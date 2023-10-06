import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private activeUser$:BehaviorSubject<User> = new BehaviorSubject(new User());

	constructor(
		private httpClient: HttpClient
	) { }

	getActiveUser():BehaviorSubject<User> {
		console.log("activeUser$: ", this.activeUser$.getValue());
		if(!this.activeUser$?.getValue().hasOwnProperty('SESSION')){
			this.httpClient.get("assets/json/users.json").subscribe({
				next:(result)=>{
					let activeUser:User = Object.values(result).find((user)=>{
						//returns first user in list with property 'SESSION', just for test purposes
						console.log("service user: ", user.SESSION);
						return user.SESSION
					});
					this.activeUser$.next(activeUser);
				},
				error:(e)=>{
					throw e.error;
				}
			});
		}

		return this.activeUser$;
	}
}
