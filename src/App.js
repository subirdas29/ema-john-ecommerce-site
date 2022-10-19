import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Inventory from './component/inventory/Inventory';
import Orders from './component/Orders/Orders';
import Shop from './component/Shop/Shop';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';
import Main from './Layouts/Main';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import Shipping from './component/shipping/Shipping';
import PrivateRoutes from './routes/PrivateRoutes';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
         path:'/',
         loader: async () => fetch('products.json'),
         element: <Shop></Shop>
        },
        {
          path:'shop',
          loader: async () => fetch('products.json'),
          element: <Shop></Shop>
         },
        {
          path:'/orders',
          loader:productsAndCartLoader,
          element:<PrivateRoutes>
            <Orders></Orders>
          </PrivateRoutes>
        },
        {
          path:'inventory',
          element:<Inventory></Inventory>
        },
        {
          path:'shipping',
          element:<Shipping></Shipping>
        },
        {
          path:"about",
          element:<About></About>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },

      ]
    },
    
  ]);
  return (
    <div className="App">
    <RouterProvider router={router} />
  
    </div>
  );
}

export default App;
