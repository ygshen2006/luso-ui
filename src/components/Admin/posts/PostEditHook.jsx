import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { get } from 'utils/api';
import { AdminConstants } from 'utils/constants';

const usePostEdit = () => {
  const [post, setPost] = useState({
    id: '',
    title: '',
    'cover-image': '',
    content: '',
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const result = await get(AdminConstants.POST_URI, [
          {
            key: 'useMock',
            value: 'true',
          },
          {
            key: 'id',
            value: id,
          },
        ]);

        setPost(result);
      }
    };
    fetchData();
  }, []);

  return { post };
};

export default usePostEdit;
