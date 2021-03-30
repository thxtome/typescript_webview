import { render, cleanup } from '@testing-library/react'
import Toast from '@common/components/ToastBox'

test('renders Box Component without props', () => {
  const { unmount } = render(<Toast></Toast>)
  unmount()
})

test('renders Box Component with children', () => {
  const { getByText } = render(
    <Toast>
      <span>children</span>
    </Toast>
  )
  expect(getByText('children')).toBeInTheDocument()
})
