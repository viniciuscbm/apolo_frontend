import { render } from '@testing-library/react'
import App from './App'

it('renders learn react link', () => {
  const { getByText } = render(<App />)
  expect(getByText('Learn React')).toBeInTheDocument()
})
