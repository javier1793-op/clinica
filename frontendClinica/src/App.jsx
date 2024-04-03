import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './View/Page/Login'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Dashboard</div>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/registro",
      element: <div>Registrarse</div>,
    },
    {
      path: "/*",
      element: <div>Pagina no encontrada</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
