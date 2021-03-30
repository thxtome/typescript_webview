import { render, cleanup } from '@testing-library/react'
import NavigationBar from './NavigationBar'

const NavigationBarProps = {
  icon: '',
  title: '',
  onClick: () => {},
}

test('renders StackNavigation Component without props', () => {
  const { unmount } = render(<NavigationBar {...NavigationBarProps}></NavigationBar>)
  unmount()
})

test('renders StackNavigation Component with children', () => {
  const { getByText } = render(<NavigationBar {...NavigationBarProps}></NavigationBar>)
  expect(getByText('children')).toBeInTheDocument()
})
