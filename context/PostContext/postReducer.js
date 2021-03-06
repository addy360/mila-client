export const POST_ACTIONS = {
  FETCH_POSTS: "FETCH_POSTS",
  FETCHING_POSTS: "FETCHING_POSTS",
  FETCH_NEXT: "FETCH_NEXT",
  FETCH_POST: "FETCH_POST",
  FETCHING_POST: "FETCHING_POST",
  ERROR: "ERROR",
  ERROR_CLEAR: "ERROR_CLEAR",
  SLUG: "SLUG",
  SLUG_CLEAR: "SLUG_CLEAR",
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case POST_ACTIONS.FETCHING_POSTS:
      return {
        ...state,
        posts_loading: true,
        error: null,
      };
    case POST_ACTIONS.FETCH_POSTS:
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
        error: null,
      };

    case POST_ACTIONS.FETCH_POST:
      return {
        ...state,
        post_loading: false,
        post: action.payload.data.post,
      };

    case POST_ACTIONS.ERROR:
      return {
        ...state,
        error: action.payload,
        posts_loading: false,
        post_loading: false,
      };

    case POST_ACTIONS.FETCH_NEXT:
      return {
        ...state,
        posts_loading: false,
        posts: [...state.posts, ...action.payload.data.posts],
        next: action.payload.data.next,
      };

    case POST_ACTIONS.ERROR_CLEAR:
      return {
        ...state,
        error: null,
      };

    case POST_ACTIONS.SLUG:
      return {
        ...state,
        slug: action.payload,
      };

    case POST_ACTIONS.SLUG_CLEAR:
      return {
        ...state,
        slug: null,
      };

    default:
      return state;
  }
};
