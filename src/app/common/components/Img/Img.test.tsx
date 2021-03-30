import { render } from '@testing-library/react'
import Img from './Img'

test('renders Img Component without props', () => {
  const { unmount } = render(<Img src={''}></Img>)
  unmount()
})
