import styled from '../../styles/styled-px2vw'

export interface ModalNavigationProps {
  width: string
  height: string
  children?: React.ReactNode
  onClick: () => void
}

const StyledModalNavigation = styled.div<{ width: string; height: string }>`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  overflow: hidden;
  z-index: 2000;
  .modal-enter {
    position: fixed;
    transform: translateY(100vh);
  }

  .modal-enter-active {
    position: fixed;
    transform: translateY(0px);
    transition: 200ms;
  }

  .modal-exit {
    position: fixed;
    transform: translateY(0px);
  }

  .modal-exit-active {
    position: fixed;
    transform: translateY(100vh);
    transition: 200ms;
  }

  .modal-enter-done {
    position: fixed;
  }
`

const ModalNavigation = ({ width, height, children }: ModalNavigationProps) => {
  const props = { width, height, children }

  return <StyledModalNavigation {...props}>{children}</StyledModalNavigation>
}

export default ModalNavigation
