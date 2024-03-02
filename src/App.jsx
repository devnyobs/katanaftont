import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./main.css";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Watch from "./pages/Watch";
import Book from "./pages/Book";
import Sermon from "./pages/Sermon";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Singlesermon from "./pages/Singlesermon";
import Singleevent from "./pages/Singleevent";
import Singlewatch from "./pages/Singlewatch";
import Admin from "./pages/Admin";


const Therouter = createBrowserRouter([
  {
    path: "/",
    element: <Routing />,
    errorElement: <PageError />,
    children: [
      {
        path: "",
        children: [
          { path: "", element: <Home /> },
          { path: ":id", element: <Singlesermon /> },
        ],
      },
      {
        path: "event",
        children: [
          { path: "", element: <Event /> },
          { path: ":id", element: <Singleevent /> },
        ],
      },
      {
        path: "watch",
        children: [
          { path: "", element: <Watch /> },
          { path: ":id", element: <Singlewatch /> },
        ],
      },
      { path: "book", element: <Book /> },
      { path: "prayer", element: <Sermon /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "admin", element: <Admin /> },
    ],
  },
]);

function PageError() {
  return (
    <>
      <h2> une erreur est survenue veillez verifier l'url </h2>
    </>
  );
}

function Routing() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return <RouterProvider router={Therouter} />;
}

export default App;
