import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/NavBar/navbar";
import Home from "./pages/home";

function App() {
  console.log("location", window.location.pathname);
  const pathname = window.location.pathname;
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="bg-[url('/hero-image.jpg')] bg-no-repeat min-h-[800px] w-full bg-cover bg-black">
          <Navbar />
          <Home />
        </div>
      ),
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
