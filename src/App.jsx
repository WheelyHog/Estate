import "./layout.scss"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "./routes/layout/layout.jsx";
import HomePage from "./routes/homePage/HomePage.jsx";
import ListPage from "./routes/listPage/ListPage.jsx";
import SinglePage from "./routes/singlePage/SinglePage.jsx";
import ProfilePage from "./routes/profilePge/ProfilePage.jsx";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <HomePage/>
                },
                {
                    path: "/list",
                    element: <ListPage/>
                },
                {
                    path: "/:id",
                    element: <SinglePage/>
                },
                {
                    path: "/profile",
                    element: <ProfilePage/>
                },

            ]
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default App