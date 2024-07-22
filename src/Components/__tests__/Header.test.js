import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

test('should render Header component with a login button', () => {
	render(
		<Provider store={appStore}>
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		</Provider>
	);

	const loginButton = screen.getByRole('button', { name: 'Login' });

	expect(loginButton).toBeInTheDocument();
});

test('should render Header component with a cart - 0', () => {
	render(
		<Provider store={appStore}>
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		</Provider>
	);

	const cart = screen.getByText('Cart - 0');

	expect(cart).toBeInTheDocument();
});

test('should render Header component with a cart', () => {
	render(
		<Provider store={appStore}>
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		</Provider>
	);

	const cart = screen.getByText(/Cart/);

	expect(cart).toBeInTheDocument();
});

test('should change login button to logout button onclick', () => {
	render(
		<Provider store={appStore}>
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		</Provider>
	);

	const loginButton = screen.getByRole('button', { name: 'Login' });

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole('button',{name:'Logout'});

    expect(logoutButton).toBeInTheDocument();
});
