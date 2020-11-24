import { render } from '@testing-library/react';
import App from './App';

it('renders click me button', () => {
  const { getByText } = render(<App />);
  expect(getByText('click me')).toBeInTheDocument();
});
