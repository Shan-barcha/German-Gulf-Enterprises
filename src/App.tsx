import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/NavBar/navbar";
import Home from "./pages/home";

function App() {
  console.log("location", window.location.pathname);
  const pathname = window.location.pathname;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <div>
      {pathname !== "/" && <Navbar />}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
