const MY_API_KEY = "AIzaSyCjUgcSw6w6jSE5f91xprxUuEakhjqb03A";

export const YOUTUBE_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${MY_API_KEY}`;

export const CHENNELS_DATA_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${MY_API_KEY}&id=`;

export const GET_VIDEO_DETAILS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${MY_API_KEY}&id=`;

export const GET_VIDEOS_BY_SEARCH = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=${MY_API_KEY}&q=`;

export const GET_COMMENTS_URL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&key=${MY_API_KEY}&videoId=`;

export const SEARCH_SUGGESTIONS_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${MY_API_KEY}&q=`;
