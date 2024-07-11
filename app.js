import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/Components/Header';
import Body from './src/Components/Body';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Contact from './src/Components/Contact';
import About from './src/Components/About';
import Error from './src/Components/Error';

const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			<Body />
		</div>
	);
};

const Router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout/>,
		errorElement: <Error/>
	},
	{
		path:"/about",
		element:<About/>
	},
	{
		path:"/contact",
		element:<Contact/>
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={Router}/>);
