import styled from '@common/styles/styled-px2vw'

interface ScreenProps {
  width?: string
  height?: string
  display?: string
  children?: React.ReactNode
  name: string
}

const StyledScreen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const Screen = ({ children }: ScreenProps) => {
  return <StyledScreen>{children}</StyledScreen>
}

export default Screen
