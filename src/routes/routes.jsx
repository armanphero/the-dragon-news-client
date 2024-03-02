import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import NewsDetails from "../pages/newsDetails/newsDetails";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MainContent from "../pages/MainContent/MainContent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                children: [
                    {
                        path: '/',
                        element: <MainContent />,
                        loader: () => fetch('https://the-dragon-news-server-j5xx3eywh-armans-projects-cd84b623.vercel.app/news')
                    },
                    {
                        path: '/category/:id',
                        element: <MainContent />,
                        loader: ({params}) => fetch(`https://the-dragon-news-server-j5xx3eywh-armans-projects-cd84b623.vercel.app/category/${params.id}`)
                    }
                ]
            },
            {
                path: '/news/:id',
                loader: ({ params }) => fetch(`https://the-dragon-news-server-j5xx3eywh-armans-projects-cd84b623.vercel.app/news/${params.id}`),
                element: <PrivateRoute><NewsDetails /></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    }
]);

export default router;