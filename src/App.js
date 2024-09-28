
import { createBrowserRouter, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import ResturantMenu from "./components/ResturantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
function App() {
  return (
    <Provider store={appStore}>
    <div className="">
    <Header/>
    <Outlet/>
    </div>
    </Provider>
  );
}

 export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
       path:"/",
      element:<Body/>
      },
      {
      path: "/about",
      element: <About/>
    },
    {
      path: "/contact",
      element: <Contact/>
    },
     {
      path: "/cart",
       element: <Cart/>
     },
    
    {
    path: "/resturantMenu/:resId",
    element: <ResturantMenu/>
  }]
  }
  
  // {
  //   path: "/",
  //   element: "<App/>"
  // },
  // {
  //   path: "/",
  //   element: "<App/>"
  // },

]);

export default App;
