//style
import styled from '@common/styles/styled-px2vw'
import backBtnSvg from '@asset/svg/btn_back2_normal.svg'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

//component
import NavigationBar from '@common/components/NavigationBar'

export interface StackNavigationProps {
  width?: string
  height?: string
  display?: string
  children?: React.ReactNode
  stack?: React.ReactNode[]
  title: string
  isRoot: boolean
  onClick: () => void
}

const StyledStackNavigation = styled.div<{ width: string; height: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  z-index: 1000;

  .screen-enter {
    position: fixed;
    transform: translateX(375px);
    top: 45px;
    height: calc(100% - 45px);
  }

  .screen-enter-active {
    position: fixed;
    transform: translateX(0px);
    transition: 300ms;
    top: 45px;
    height: calc(100% - 45px);
  }

  .screen-exit {
    position: fixed;
    transform: translateX(0px);
    top: 45px;
    height: calc(100% - 45px);
  }

  .screen-exit-active {
    position: fixed;
    transform: translateX(375px);
    transition: 300ms;
    top: 45px;
    height: calc(100% - 45px);
  }

  .screen-enter-done {
    top: 45px;
    height: calc(100% - 45px);
  }

  .bar-enter {
    position: fixed;
    transform: translateX(375px);
  }

  .bar-enter-active {
    position: fixed;
    transition: 300ms;
    transform: translateX(0px);
  }

  .bar-exit {
    position: fixed;
    transform: translateX(0px);
  }

  .bar-exit-active {
    position: fixed;
    transition: 300ms;
    transform: translateX(375px);
  }

  .root-enter-done {
    position: fixed;
    top: 0;
  }

  .root-exit {
    position: fixed;
    top: 0;
  }

  .root-exit-active {
    position: fixed;
    top: 0;
  }
`

const StackNavigation = ({
  width = '100vw',
  height = '100vh',
  title,
  isRoot,
  onClick,
  children,
}: StackNavigationProps) => {
  const props = { width, height, title, children }
  const barProps = { icon: backBtnSvg, onClick, title }
  return (
    <StyledStackNavigation {...props}>
      <TransitionGroup component={null}>
        {!isRoot ? (
          <CSSTransition in={true} timeout={300} classNames="bar" key={'stack'}>
            <NavigationBar {...barProps}></NavigationBar>
          </CSSTransition>
        ) : (
          <></>
        )}
      </TransitionGroup>
      {children}
    </StyledStackNavigation>
  )
}

export default StackNavigation
