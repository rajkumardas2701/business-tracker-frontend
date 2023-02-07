import { Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import App from './components/App';
import NotFound from './layouts/NotFound';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<App />} />
      <Route component={NotFound} />
    </>,
  ),
);

export default Router;
