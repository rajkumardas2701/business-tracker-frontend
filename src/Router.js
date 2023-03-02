import { Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
// import Login from './components/Login';
import App from './components/App';
import NotFound from './layouts/NotFound';
// import Signup from './components/SignUp';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} errorElement={<NotFound />} />
      <Route component={NotFound} />
    </>,
  ),
);

export default Router;
