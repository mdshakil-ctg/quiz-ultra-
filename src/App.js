import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from './layout/Main';
import Home from './components/Home/Home';
import CartDetails from './components/CartDetails/CartDetails';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path:'/quiz/:cartId',
          loader: async({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.cartId}`),
          element: <CartDetails></CartDetails>
        }
      ]
    }
  ]);
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
