import { useEffect, useState } from 'react';
import { get } from 'utils/api';
import { AdminConstants } from 'utils/constants';

const usePostsHook = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const result = await get(AdminConstants.POSTS_URI, [
        {
          key: 'useMock',
          value: 'true',
        },
      ]);
      result.sort((a, b) => {
        return new Date(b['created-time']) - new Date(a['created-time']);
      });
      setPosts(result);
    };
    fetchPosts();
  }, []);

  return { posts };
};

export default usePostsHook;
