import { render ,screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import Contact from "../Contact"

describe('Contact block test cases', () => {
  
it('should have heading inside contact component', () => {
	//rendering
	render(<Contact />);
	//querying
	const heading = screen.getByRole('heading');
	//assertion
	expect(heading).toBeInTheDocument();
});

it('should have button inside contact component', () => {
	//rendering
	render(<Contact />);
	//querying
	const button = screen.getByRole('button');
	//assertion
	expect(button).toBeInTheDocument();
});

it('should have text box inside contact component', () => {
	//rendering
	render(<Contact />);
	//querying
	const inputText = screen.getByPlaceholderText('name');
	//assertion
	expect(inputText).toBeInTheDocument();
});

it('should have both text box inside contact component', () => {
	//rendering
	render(<Contact />);
	//querying
	const textbox = screen.getAllByRole('textbox');
	//assertion
	expect(textbox.length).toBe(2);
});
})
