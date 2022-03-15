import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Cart', () => {
  render(<App />);
  const element = document.querySelector('.checkout');
  expect(element).toBeInTheDocument();
});
test('render butttons', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('item').length).toBe(4);
});
test('click buttton', () => {
  const { getByTestId } = render(<App />);
  const button = screen.getAllByRole('button');
  fireEvent.click(button[0]);
  expect(getByTestId('total')).toHaveTextContent('£0.5');
});
test('click buttton and check offer', () => {
  const { getByTestId } = render(<App />);
  const button = screen.getAllByRole('button');
  fireEvent.click(button[0]);
  fireEvent.click(button[0]);
  fireEvent.click(button[0]);
  expect(getByTestId('total')).toHaveTextContent('£1.3');
});
test('click buttton add and remove', () => {
  const { getByTestId } = render(<App />);
  const button = screen.getAllByRole('button');
  fireEvent.click(button[0]);
  fireEvent.click(button[1]);
  fireEvent.click(button[0]);
  expect(getByTestId('total')).toHaveTextContent('£0.5');
});