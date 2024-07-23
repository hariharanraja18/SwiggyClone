import { render, screen, fireEvent } from '@testing-library/react';
const { act } = require('react');
const { default: RestaurantMenu } = require('../RestaurantMenu');
import { Provider } from 'react-redux';
import MOCK_DATA from './mocks/CartMockData.json';
import '@testing-library/jest-dom';
import appStore from '../../utils/appStore';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import Cart from '../Cart';

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(MOCK_DATA);
		},
	});
});
test('should load restaurant menu component', async () => {
	await act(async () =>
		render(
			<Provider store={appStore}>
				<BrowserRouter>
					<Header />
                    <Cart/>
					<RestaurantMenu />
				</BrowserRouter>
			</Provider>
		)
	);

	const Items = screen.getByText('Burger Momo [Moburg] - (6)');

	fireEvent.click(Items);

	const ItemList = screen.getAllByTestId('itemList');

	expect(ItemList.length).toBe(6);

	const AddButtons = screen.getAllByRole('button', { name: 'Add' });

	fireEvent.click(AddButtons[0]);

	const CartItem = screen.getByText('Cart - 1');

	expect(CartItem).toBeInTheDocument();

	fireEvent.click(AddButtons[1]);

	const CartItem2 = screen.getByText('Cart - 2');

	expect(CartItem2).toBeInTheDocument();

    fireEvent.click(CartItem2);

    const CartPageItems = screen.getAllByTestId("itemList")
    console.log(CartPageItems)

    expect(CartPageItems.length).toBe(8); //because all the components are rendered in a single page; 
});
