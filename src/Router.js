import { Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
// import Login from './components/Login';
import App from './components/App';
import NotFound from './layouts/NotFound';
// import Signup from './components/SignUp';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/l" element={<App />} errorElement={<NotFound />} />
      <Route errorElement={<NotFound />} />
    </>,
  ),
);

export default Router;
