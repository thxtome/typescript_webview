//style
import styled from '@common/styles/styled-px2vw'

export interface NavigationBarProps {
  title: string
  icon: string
  onClick: () => void
}

const StyledNavigationBar = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: start;
  align-items: center;
  background: #ffffff;
  z-index: 2000;
`
const StyledNavigationBarTitle = styled.span`
  font-family: 'NanumSquareB';
  font-size: 20px;
  margin: auto;
  transform: translateX(-24.5px);
`

const StyledNavigationBarBackButton = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 24px;
`

const NavigationBar = ({ icon, title, onClick }: NavigationBarProps) => {
  return (
    <StyledNavigationBar>
      <StyledNavigationBarBackButton src={icon} onClick={onClick}></StyledNavigationBarBackButton>
      <StyledNavigationBarTitle>{title}</StyledNavigationBarTitle>
    </StyledNavigationBar>
  )
}

export default NavigationBar
