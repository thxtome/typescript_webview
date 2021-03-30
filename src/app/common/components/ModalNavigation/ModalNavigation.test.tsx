import { render, cleanup } from '@testing-library/react'
import StackNavigation from './ModalNavigation'

test('renders StackNavigation Component without props', () => {
  const { unmount } = render(<StackNavigation title=""></StackNavigation>)
  unmount()
})

test('renders StackNavigation Component with children', () => {
  const { getByText } = render(
    <StackNavigation title="">
      <span>children</span>
    </StackNavigation>
  )
  expect(getByText('children')).toBeInTheDocument()
})
