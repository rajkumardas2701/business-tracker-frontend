import { Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
// import Login from './components/Login';
import App from './components/App';
import NotFound from './layouts/NotFound';
// import Signup from './components/SignUp';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route component={NotFound} />
      {/* errorElement={<NotFound />}  */}
    </>,
  ),
);

export default Router;
