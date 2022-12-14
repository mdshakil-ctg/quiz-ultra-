
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from './layout/Main';
import Home from './components/Home/Home';
import CartDetails from './components/CartDetails/CartDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blogs from './components/Blogs/Blogs';
import Statistics from './components/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          loader: async() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path:'/quiz/:cartId',
          loader: async({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.cartId}`),
          element: <CartDetails></CartDetails>
        },
        {
          path:'/statistics',
          loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics></Statistics>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        }
      ]
    },
    {
      path:'/*',
      element: <ErrorPage></ErrorPage>
    }
  ]);
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
