import {createStore} from 'redux'
import RickPhoto from './img/rick.jpg'
import MortyPhoto from './img/morty.jpg'
import MrPoopybuttholePhoto from './img/mr-poopybutthole.jpg'
import PostImage1 from './img/photo17.jpg'
import PostImage2 from './img/photo11.jpg'
import PostImage3 from './img/photo13.jpg'

const posts = [
  {
    authorPhoto: RickPhoto,
    authorName: 'Rick Sanches',
    authorNickname: '@rick_C-137',
    postDate: new Date().toLocaleString("en-GB", {month: 'long', day: 'numeric'}),
    postText: 'If you stick with me, I’m gonna accomplish great things, Morty, and you’re gonna be part of’em',
    postImage: PostImage1,
    postComments: '482',
    postReposts: '146',
    postLikes: '887',
  },
  {
    authorPhoto: MortyPhoto,
    authorName: 'Morty Smith',
    authorNickname: '@morty',
    postDate: new Date().toLocaleString("en-GB", {month: 'long', day: 'numeric'}),
    postText: 'Holy cow, Rick! I didn’t know hanging out with you was making me smarter!',
    postImage: PostImage2,
    postComments: '354',
    postReposts: '132',
    postLikes: '733',
  },
  {
    authorPhoto: MrPoopybuttholePhoto,
    authorName: 'Mr Poopybutthole',
    authorNickname: '@poopybutthole',
    postDate: new Date().toLocaleString("en-GB", {month: 'long', day: 'numeric'}),
    postText: 'OooWeee!!!! ',
    postImage: PostImage3,
    postComments: '253',
    postReposts: '101',
    postLikes: '637',
  }
];
console.log('posts: ', posts);

const initialState = {
  posts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "load_post":
      return {
        ...state,
        posts
      };
      case 'new_post':
        return {
            ...state,
            posts: posts.concat(posts.push(action.payload))
        };
    default:
      return state;
  }
};

export const loadPosts = () => ({
  type: "load_post"
});

export const newPost = (post) => ({
  type: 'new_post',
  payload: post
});

const store = createStore(reducer);

export default store;