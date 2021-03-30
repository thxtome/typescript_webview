import styled from '../../styles/styled-px2vw'

interface BoxProps {
  width?: string
  height?: string
  children?: React.ReactNode
  vertical?: string
  horizontal?: string
  bg?: string
}

const StyledBox = styled.div<BoxProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  justify-content: ${(props) => `${props.vertical}`};
  align-items: ${(props) => `${props.horizontal}`};
  background: ${(props) => `${props.bg}`};
`

const Box = ({
  width = '100%',
  height = '100%',
  vertical = 'center',
  horizontal = 'center',
  bg = 'inherit',
  children,
}: BoxProps) => {
  const props = { width, height, vertical, horizontal, bg }
  return <StyledBox {...props}>{children}</StyledBox>
}

export default Box
