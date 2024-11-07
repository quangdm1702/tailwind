import { useRoutes } from "react-router-dom";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Educations from "./pages/Educations/Educations";
import Layout from "./components/Layout/Layout";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        { path: "/projects", element: <Projects /> },
        { path: "/educations", element: <Educations /> },
      ],
    },
    
  ]);

  return element;
}

export default App;