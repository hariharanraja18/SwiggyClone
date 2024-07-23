import { render, screen } from '@testing-library/react';
import RestaurantCard, { WithPromoted } from '../RestaurantCard';
import MOCK_DATA from './mocks/ResCardMockData.json';
import '@testing-library/jest-dom';
test('should render Restaurantcard component with props', () => {
	render(<RestaurantCard resData={MOCK_DATA} />);

	const ResName = screen.getByText('Chinese Wok');

	expect(ResName).toBeInTheDocument();
});

test('should render Restaurantcard component with promoted label', () => {
	const Promoted = WithPromoted(RestaurantCard);
	render(<Promoted resData={MOCK_DATA} />);

	const ResName = screen.getByText('Open');

	expect(ResName).toBeInTheDocument();
});
