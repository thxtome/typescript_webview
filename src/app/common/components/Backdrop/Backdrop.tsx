import styled from '@common/styles/styled-px2vw'
import Box from '@common/components/Box'

interface BackdropProps {
  children: React.ReactNode
}

const StyledBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  z-index: 3000;
  position: absolute;
  top: 0;
  left: 0;
`

const Backdrop = ({ children }: BackdropProps) => {
  return <StyledBackdrop>{children}</StyledBackdrop>
}

export default Backdrop
