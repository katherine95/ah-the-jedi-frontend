import Home from '../components/home/Home';
import SignUpView from '../views/SignUpView';
import LoginView from '../views/LoginView';
import Notfound from '../components/layout/Notfound';
import AccountActivatedView from '../views/AccountActivateView';
import EmailSentView from '../views/EmailSentView';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    id: 'home',
  },
  {
    path: '/api/users/activate',
    component: AccountActivatedView,
    id: 'signup',
  },
  {
    path: '/login',
    component: LoginView,
    id: 'login',
  },
  {
    path: '/signup',
    component: SignUpView,
    id: 'signup',
  },
  {
    path: '/emailsent',
    component: EmailSentView,
    id: 'emailsent',
  },
  {
    component: Notfound,
    id: 'notfound',
  },
];

export default routes;
