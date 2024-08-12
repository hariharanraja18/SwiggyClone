import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/Components/Header';
import Body from './src/Components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './src/Components/Contact';
import About from './src/Components/About';
import Error from './src/Components/Error';
import RestaurantMenu from './src/Components/RestaurantMenu';
import UserContext from './src/utils/UserContext';
import appStore from './src/utils/appStore';
import { Provider } from 'react-redux';
import Cart from './src/Components/Cart';
import Footer from './src/Components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AppLayout = () => {
	const [userName, SetUserName] = useState(null);
	useEffect(() => {
		const data = {
			name: 'hariharan',
		};
		SetUserName(data.name);
	}, []);
	return (
		<Provider store={appStore}>
			<UserContext.Provider value={{ LoggedInUser: userName, SetUserName }}>
				<div className="app">
					<Header />
					<Outlet />
					<Footer/>
				</div>
			</UserContext.Provider>
		</Provider>
	);
};

const Router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <Body />,
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
				path: '/cart',
				element: <Cart />,
			},
			{
				path: '/restaurants/:resId',
				element: <RestaurantMenu />,
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={Router} />);
