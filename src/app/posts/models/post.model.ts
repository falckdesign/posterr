export interface PostBasic {
	POST_ID:number,
	POST_TYPE:PostType,
	USER_NAME:string,
	USER_UNIQUE_NAME:string,
	AVATAR_FILENAME:string,
	TIME_POSTED:Date,
	USER_TEXT:string,
	IMAGES?:Image[]
}

export interface Post extends PostBasic {
	ORIGINAL_POST?: PostBasic,
	LINK_PREVIEW?:LinkPreview
}

export interface Image {
	FILENAME_FULL_SIZE:string,
	FILENAME_THUMBNAIL:string,
	DESCRIPTION?:string
}

export interface LinkPreview {
	THUMBNAIL_URL?:string,
	DOMAIN:string,
	URL:string,
	TITLE:string,
	SUBTITLE?:string
}

export enum PostFilter {
	all = "ALL",
	following = "FOLLOWING"
};

export enum PostType {
	original = "",
	repost = "REPOST",
	quote = "QUOTE"
};
