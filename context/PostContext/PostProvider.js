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

  const clearError = () => {
    dispatch({ type: POST_ACTIONS.ERROR_CLEAR });
  };

  const getPosts = async () => {
    dispatch({ type: POST_ACTIONS.FETCHING_POSTS });
    const res = await fetchAllPosts();
    if (!res.ok)
      return dispatch({
        type: POST_ACTIONS.ERROR,
        payload: "Failed to fetch posts",
      });

    dispatch({ type: POST_ACTIONS.FETCH_POSTS, payload: res.data });
  };

  const getNextPosts = async (next) => {
    dispatch({ type: POST_ACTIONS.FETCHING_POSTS });
    const res = await fetchAllPosts(next);
    if (!res.ok)
      return dispatch({
        type: POST_ACTIONS.ERROR,
        payload: "Failed to fetch next posts",
      });

    dispatch({ type: POST_ACTIONS.FETCH_NEXT, payload: res.data });
  };

  const getPost = async (endpoint) => {
    dispatch({ type: POST_ACTIONS.FETCHING_POST });
    const res = await fetchDetailedPost(endpoint);
    if (!res.ok)
      return dispatch({
        type: POST_ACTIONS.ERROR,
        payload: "Failed to fetch post detail",
      });

    dispatch({ type: POST_ACTIONS.FETCH_POST, payload: res.data });
  };

  const setSlug = (slug) => {
    dispatch({ type: POST_ACTIONS.SLUG, payload: slug });
  };

  const clearSlug = () => {
    dispatch({ type: POST_ACTIONS.SLUG_CLEAR });
  };

  return (
    <PostContext.Provider
      value={{
        ...state,
        getPosts,
        getPost,
        getNextPosts,
        clearError,
        setSlug,
        clearSlug,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
