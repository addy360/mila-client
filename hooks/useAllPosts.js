const { useEffect, useState } = require("react");
const { fetchAllPosts } = require("../apiServices");

export const useAllposts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsfetching] = useState(false);
  useEffect(() => {
    getAllposts();
  }, []);

  const getAllposts = async () => {
    setIsfetching(true);
    const res = await fetchAllPosts();
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
