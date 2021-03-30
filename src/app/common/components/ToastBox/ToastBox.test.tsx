import { render, cleanup } from '@testing-library/react'
import Box from './Toast'

test('renders Box Component without props', () => {
  const { unmount } = render(<Box></Box>)
  unmount()
})

test('renders Box Component with children', () => {
  const { getByText } = render(
    <Box>
      <span>children</span>
    </Box>
  )
  expect(getByText('children')).toBeInTheDocument()
})
