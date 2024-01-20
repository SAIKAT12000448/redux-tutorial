import { createBrowserRouter } from 'react-router-dom';
// import App from '../App';
import Home from '../Pages/Home';


const routes = createBrowserRouter([
  
    {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <div>Not found</div>,
      },
    
]);

export default routes;
