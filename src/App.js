import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    }
  ])
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
