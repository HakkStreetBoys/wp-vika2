import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://localhost:8888/repeat-menu/wp-json/wp/v2/menu?menu_cat=9';
// const ROOT_URL = 'http://localhost:8888/repeat-menu/wp-json/wp/v2/menu?menu_cat=9';
const API_KEY = '?key=kombrewokvwogk';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}`);
  // const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  // const request = axios.get(`${ROOT_URL}`);
  console.log(request);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
