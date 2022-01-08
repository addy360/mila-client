export const POST_ACTIONS = {
  FETCH_POSTS: "FETCH_POSTS",
  FETCHING_POSTS: "FETCHING_POSTS",
  FETCH_POST: "FETCH_POST",
  FETCHING_POST: "FETCHING_POST",
  ERROR: "ERROR",
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case POST_ACTIONS.FETCHING_POSTS:
      return {
        ...state,
        posts_loading: true,
        posts: [],
      };
    case POST_ACTIONS.FETCH_POSTS:
      console.log(`action.payload`, action.payload);
      return {
        ...state,
        posts: action.payload.data.posts,
        next: action.payload.data.next,
        base_url: action.payload.data.base_url,
        posts_loading: false,
      };

    case POST_ACTIONS.FETCHING_POST:
      return {
        ...state,
        post_loading: true,
        post: null,
      };

    case POST_ACTIONS.FETCH_POST:
      return {
        ...state,
        post_loading: false,
        post: action.payload,
      };

    case POST_ACTIONS.ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      break;
  }
};