import { render, screen } from '@testing-library/react'
import App from './App'

test('renders App', () => {
  const { unmount } = render(<App />)
  unmount()
})
