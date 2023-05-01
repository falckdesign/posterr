export interface Post {
	POST_ID:number;
	USER_NAME:string;
	USER_UNIQUE_NAME:string;
	AVATAR_FILENAME:string;
	TIME_POSTED:Date;
	USER_TEXT:string;
	QUOTED_POST_ID?:number;
	IMAGES?:Image[]
	LINK_PREVIEW?:LinkPreview
}


export type PostFilter = '' | 'following';

export interface Image {
	FILENAME_FULL_SIZE:string,
	FILENAME_THUMBNAIL:string,
	DESCRIPTION?:string
}

export interface LinkPreview {
	THUMBNAIL_URL?:string,
	DOMAIN:string,
	LINK:string,
	TITLE:string,
	SUBTITLE?:string
}
