import { get } from 'utils/api';
import { AdminConstants } from 'utils/constants';
import { AdminPostsView } from './PostsView';
import TopNav from 'components/Others/Head/TopNav';
import usePostsHook from './PostsHook';

const AdminPosts = () => {
  const { posts } = usePostsHook();
  const deletePost = async (id) => {
    const result = await get(AdminConstants.POST_DELETE, [
      {
        key: 'id',
        value: id,
      },
    ]);
    if (result && result.id) {
      // reload the page
      location.reload();
    }
  };
  return (
    <>
      <TopNav activeIndex="post" />
      <AdminPostsView posts={posts} onDeletePost={deletePost}>
        <AdminPostsView.Summary posts={posts} />
      </AdminPostsView>
    </>
  );
};
export default AdminPosts;
