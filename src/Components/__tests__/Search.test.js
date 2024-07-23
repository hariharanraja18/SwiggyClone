const { render, screen, fireEvent } = require('@testing-library/react');
import { act } from 'react';
import Body from '../Body';
import MOCK_DATA from "./mocks/RestaurantMockData.json"
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(MOCK_DATA);
		},
	});
});

test('should check inputbox, Search and TopResataurant btn inside Body component', async () => {
	await act(async () => {
		render(
			<BrowserRouter>
				<Body />
			</BrowserRouter>
		);
	});
	const BeforeSearchCards = screen.getAllByTestId('card');
	expect(BeforeSearchCards.length).toBe(8);
	const SearchBtn = screen.getByRole('button', { name: 'Search' });

	// expect(SearchBtn).toBeInTheDocument();

	const SearchInput = screen.getByTestId('input');

	fireEvent.change(SearchInput, { target: { value: 'i' } });

	fireEvent.click(SearchBtn);

	const AfterSearchCards = screen.getAllByTestId('card');

	expect(AfterSearchCards.length).toBe(6);
});

test('should ', async () => {
	await act(async () => {
		render(
			<BrowserRouter>
				<Body />
			</BrowserRouter>
		);
	});
	const BeforeSearchCards = screen.getAllByTestId('card');
	expect(BeforeSearchCards.length).toBe(8);


	const TopratedRestaurant = screen.getByRole('button', {
		name: 'Top Restaurants',
	});
	fireEvent.click(TopratedRestaurant);
	const AfterClickingTopRated = screen.getAllByTestId('card');
	expect(AfterClickingTopRated.length).toBe(3);
});
