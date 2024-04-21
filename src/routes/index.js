import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Blog from "../pages/Blog/Blog";


export const routes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/home",
				element: <Home />
			},
			{
				path: "/shop",
				element: <Shop />
			},
			{
				path: "/blog",
				element: <Blog />
			}
		]
	},
	{
		path: "*",
		element: <NotFound />
	}
])