const { useEffect, useState, useMemo, useCallback } = require("react");
const {
  fetchAllPosts,
  fetchDetailedPost,
  postContact,
} = require("../apiServices");

const useApi = (handler, init = true) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isFetching, setIsfetching] = useState(false);
  useEffect(() => {
    if (init) {
      queryData();
    }
  }, []);

  const queryData = async (url = null, data = null) => {
    setIsfetching(true);
    let res;
    if (data) {
      res = await handler(data);
    } else {
      res = url ? await handler(url) : await handler();
    }
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
    setError,
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
  const clb = useCallback(() => fetchDetailedPost(slug), [slug]);
  return useApi(clb);
};

export const useContact = () => {
  return useApi((data) => postContact(data), false);
};
