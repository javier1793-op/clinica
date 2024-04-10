import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './View/Page/Login'
import Registro from './View/Page/Registro'
import Dashboard from "./View/Page/Dashboard";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/registro",
      element: <Registro/>,
    },
    {
      path: "/*",
      element: <div>Pagina no encontrada</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
