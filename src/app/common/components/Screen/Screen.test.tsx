import { render, cleanup } from '@testing-library/react'
import Screen from './Screen'

test('renders StackNavigation Component without props', () => {
  const { unmount } = render(<Screen name=""></Screen>)
  unmount()
})

test('renders Screen Component with children', () => {
  const { getByText } = render(
    <Screen name="">
      <span>children</span>
    </Screen>
  )
  expect(getByText('children')).toBeInTheDocument()
})
