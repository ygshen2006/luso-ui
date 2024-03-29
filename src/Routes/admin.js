import { lazy } from 'react';

const AdminPostContainer = lazy(
  () => import('../components/Admin/posts/PostsContainer'),
);
const PostEditContainer = lazy(
  () => import('../components/Admin/posts/PostEditContainer'),
);

export const adminRoutes = [
  {
    path: 'admin',
    element: null,
    children: [
      {
        path: '/admin/posts',
        element: <AdminPostContainer />,
      },
      {
        path: '/admin/post/edit/:id?',
        element: <PostEditContainer />,
      },
    ],
  },
];
