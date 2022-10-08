import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Inventory from './component/inventory/Inventory';
import Orders from './component/Orders/Orders';
import Shop from './component/Shop/Shop';
import Main from './Layouts/Main';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
         path:'/',
         element: <Shop></Shop>
        },
        {
          path:'shop',
          element: <Shop></Shop>
         },
        {
          path:'/orders',
          element:<Orders></Orders>
        },
        {
          path:'inventory',
          element:<Inventory></Inventory>
        },
        {
          path:"about",
          element:<About></About>
        }

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
