const Chat = lazy(() => import('../components/Ebay/Chat'));
const ChatProvider = lazy(() => import('../Provider/ChatProvider'));

import Customers from 'components/Others/Customers/Index';
import HomeComponent from '../components/Others/Home';
import { lazy } from 'react';
const AboutComponent = lazy(() => import('../components/Others/About/Index'));
const EventsComponent = lazy(() => import('../components/Others/Events'));
const NotFoundComponent = lazy(() => import('../components/Others/NotFound'));
const ServicesComponent = lazy(
  () => import('../components/Others/About/Services'),
);
const PostComponent = lazy(
  () => import('../components/Others/Post/PostContainer'),
);
const PostsComponent = lazy(
  () => import('../components/Others/Post/PostsContainer'),
);
const ContactsComponent = lazy(
  () => import('../components/Others/Contacts/Index'),
);

const Products = lazy(() => import('../components/Others/Products/Index'));

export const publicRoutes = [
  {
    path: '/',
    element: <HomeComponent />,
  },
  {
    path: 'index',
    element: <HomeComponent />,
  },
  {
    path: 'index.html',
    element: <HomeComponent />,
  },
  {
    path: 'about',
    element: <AboutComponent />,
    children: [
      {
        path: 'services',
        element: <ServicesComponent />,
      },
    ],
  },
  {
    path: 'contacts',
    element: <ContactsComponent />,
  },
  {
    path: 'products',
    element: <Products />,
  },
  {
    path: 'customers',
    element: <Customers />,
  },
  {
    path: 'events',
    element: <EventsComponent />,
  },
  {
    path: 'posts',
    element: <PostsComponent />,
  },
  {
    path: 'post/:id',
    element: <PostComponent />,
  },
  {
    path: 'chats',
    element: <ChatProvider />,
    children: [
      {
        path: '',
        element: <Chat />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundComponent />,
  },
];
