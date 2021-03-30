import { render, cleanup } from '@testing-library/react'
import Splash from './Splash'

test('renders splash page with img', () => {
  const { getByRole } = render(<Splash></Splash>)
  const logoImg = getByRole('img')
  expect(logoImg).toBeInTheDocument()
})
