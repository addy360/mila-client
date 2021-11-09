const { useEffect, useState } = require("react");
const { fetchAllPosts, fetchDetailedPost } = require("../apiServices");

const useApi = (handler) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isFetching, setIsfetching] = useState(false);
  useEffect(() => {
    queryData();
  }, []);

  const queryData = async (url = null) => {
    setIsfetching(true);
    const res = url ? await handler(url) : await handler();
    setIsfetching(false);
    if (!res.ok) {
      setError(res.originalError);
      return;
    }

    setData(res.data.data);
  };

  return {
    data,
    error,
    isFetching,
    queryData,
    setData,
  };
};

export const useAllposts = () => {
  return useApi(fetchAllPosts);
};

export const usePaginatedPosts = () => {
  const [nextUrl, setNextUrl] = useState(null);
  const { isFetching, data, error, queryData } = useApi(fetchAllPosts);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (data) {
      let url = data.next.split("?");
      url = url[url.length - 1];
      setNextUrl(`/?${url}`);
      setPosts((prev) => [...prev, ...data.posts]);
    }
  }, [data]);

  return {
    posts,
    queryData,
    isFetching,
    error,
    nextUrl,
  };
};

export const usePost = (slug) => {
  return useApi(() => fetchDetailedPost(slug));
};
