const GOOGLE_API_KEY = "AIzaSyAPuiHti5Miqxm_iefqbX6eSWpdb6UY6Gw";
// const GOOGLE_API_KEY = "AIzaSyAPuiHti5Miqxm_iefqbX6eSWpdb6UY6Gd";

export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SERACH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVECHAT_COUNT = 10;