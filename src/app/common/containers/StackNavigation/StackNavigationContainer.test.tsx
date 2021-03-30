import { render, cleanup } from '@testing-library/react'
import StackNavigation from './StackNavigationContainer'

const props = { width: '100%', height: '100%', display: 'block' }

test('renders StackNavigation Component without props', () => {
  const { unmount } = render(<StackNavigation {...props}>children</StackNavigation>)
  unmount()
})

test('renders StackNavigation Component with children', () => {
  const { getByText } = render(
    <StackNavigation {...props}>
      <span>children</span>
    </StackNavigation>
  )
  expect(getByText('children')).toBeInTheDocument()
})
