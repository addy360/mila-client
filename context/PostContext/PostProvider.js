import { useReducer } from "react";
import PostContext from ".";
import { fetchAllPosts, fetchDetailedPost } from "../../apiServices";
import { postReducer, POST_ACTIONS } from "./postReducer";

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, {
    posts: [],
    posts_loading: false,
    post: null,
    post_loading: false,
    error: null,
  });

  const getPosts = async () => {
    dispatch(POST_ACTIONS.FETCHING_POSTS);
    const res = await fetchAllPosts();
    if (!res.ok)
      return dispatch({
        type: POST_ACTIONS.ERROR,
        payload: "Failed to fetch posts",
      });

    dispatch({ type: POST_ACTIONS.FETCH_POSTS, payload: res.data });
  };

  const getPost = async (endpoint) => {
    dispatch({ type: POST_ACTIONS.FETCHING_POST });
    const res = await fetchDetailedPost(endpoint);
    if (!res.ok)
      return dispatch({
        type: POST_ACTIONS.ERROR,
        payload: "Failed to fetch posts",
      });

    dispatch({ type: POST_ACTIONS.FETCH_POST, post: action.payload });
  };

  return (
    <PostContext.Provider value={{ ...state, getPosts, getPost }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
