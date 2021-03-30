import styled from '../../styles/styled-px2vw'
import IToast from '@common/types/IToast'
import Toast from '@common/components/ToastBox/Toast'

interface ToastBoxProps {
  toasts: IToast[]
  deleteToast(id: string): void
}

const StyledToastBox = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: max-content;
  bottom: 70px;
  display: flex;
  flex-wrap: wrap;
  z-index: 3000;
  box-sizing: border-box;
  justify-content: center;
  padding: 20px;
`

const ToastBox = ({ toasts, deleteToast }: ToastBoxProps) => {
  const onToastClick = (id: string) => {
    deleteToast(id)
  }

  return (
    <StyledToastBox>
      {toasts.map((toast) => (
        <Toast toast={toast} key={toast.id} onClick={onToastClick.bind(null, toast.id)} />
      ))}
    </StyledToastBox>
  )
}

export default ToastBox
