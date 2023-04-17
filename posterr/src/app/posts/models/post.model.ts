export interface Post {
	POST_ID:number;
	USER_NAME:string;
	USER_UNIQUE_NAME:string;
	TIME_POSTED:Date;
	USER_TEXT:string;
	QUOTED_POST_ID?:number;
}


export type PostFilter = '' | 'following';
