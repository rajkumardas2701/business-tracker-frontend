import { Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import App from './components/App';
import NotFound from './layouts/NotFound';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} errorElement={<NotFound />} />
      <Route errorElement={<NotFound />} />
    </>,
  ),
);

export default Router;
