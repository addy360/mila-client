const { useEffect, useState } = require("react");
const { fetchAllPosts, fetchDetailedPost } = require("../apiServices");

const useApi = (handler) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsfetching] = useState(false);
  useEffect(() => {
    queryData();
  }, []);

  const queryData = async () => {
    setIsfetching(true);
    const res = await handler();
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
  };
};

export const useAllposts = () => {
  return useApi(fetchAllPosts);
};

export const usePost = (slug) => {
  return useApi(() => fetchDetailedPost(slug));
};
