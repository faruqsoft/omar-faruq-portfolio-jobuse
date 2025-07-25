import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/skills",
                element: <Skills />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
]);

export default router;
