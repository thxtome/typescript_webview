import styled from '../../styles/styled-px2vw'

interface ImgProps {
  width?: string
  height?: string
  src: string
}

const StyledImg = styled.img<ImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : 'auto')};
`

const Img = ({ width = '100vw', height, src }: ImgProps) => {
  const props = { width, height, src }
  return <StyledImg {...props} />
}

export default Img
