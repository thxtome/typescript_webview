import styled from '@common/styles/styled-px2vw'
import IConfirm from '@common/types/IConfirm'

interface IConfirmProps {
  width?: string
  height?: string
  vertical?: string
  horizontal?: string
  confirm: IConfirm
}

interface StyledConfirmProps {
  width: string
  height: string
  vertical: string
  horizontal: string
}

const StyledConfirm = styled.div<StyledConfirmProps>`
  width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  height: max-content;
  display: block;
  justify-content: ${(props) => `${props.vertical}`};
  align-items: ${(props) => `${props.horizontal}`};
  background: #ffffff;
  border-radius: 5px;
`
const StyledTitle = styled.p`
  padding: 16px 8px 0px 8px;
  font-size: 16px;
  color: #1a1a1a;
  white-space: pre-line;
  text-align: center;
  font-family: NanumSquareB;
`

const StyledText = styled.p`
  padding: 16px 8px;
  font-size: 14px;
  text-align: center;
  color: #1a1a1a;
  white-space: pre-line;
  border-bottom: solid 1px #e8e8e8;
  text-align: center;
  font-family: NanumSquareR;
`

const StyledButton = styled.div`
  width: 100%;
  padding: 18px 0;
  font-family: NanumSquareR;
  font-size: 14px;
  text-align: center;
  color: #1a1a1a;
  border: none;
  background-color: transparent;
`

const Confirm = ({
  width = '250px',
  height = '100px',
  vertical = 'center',
  horizontal = 'center',
  confirm,
}: IConfirmProps) => {
  const props = { width, height, vertical, horizontal }
  return (
    <StyledConfirm {...props}>
      {confirm.title && <StyledTitle>{confirm.title}</StyledTitle>}
      <StyledText>{confirm.content}</StyledText>
      <StyledButton
        onClick={() => {
          confirm.onClick && confirm.onClick()
        }}
      >
        확인
      </StyledButton>
    </StyledConfirm>
  )
}

export default Confirm
