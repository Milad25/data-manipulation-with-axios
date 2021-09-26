import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import FullComment from './pages/FullComment/FullComment';
import NewComment from './pages/NewComment/NewComment';

const routes = [
  { path: '/new-comment', component: NewComment },
  { path: '/comment/:id', component: FullComment },
  { path: '/', component: HomePage, exact: true },
  { path: '*', component: NotFoundPage },
];

export default routes;
