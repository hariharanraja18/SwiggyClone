import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/Components/Header';
import Body from './src/Components/Body';
import { createBrowserRouter, RouterProvider,  Outlet } from 'react-router-dom';
import Contact from './src/Components/Contact';
import About from './src/Components/About';
import Error from './src/Components/Error';
import RestaurantMenu from './src/Components/RestaurantMenu';

const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			<Outlet />
		</div>
	);
};

const Router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path:"/",
				element: <Body/>
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path:"/restaurants/:resId",
				element:<RestaurantMenu/>
			}
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={Router} />);
