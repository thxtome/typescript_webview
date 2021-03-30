import styled from '@common/styles/styled-px2vw'
import IToast from '@common/types/IToast'
import { useEffect } from 'react'

interface IToastProps {
  toast: IToast
  onClick(): void
}

const StyledGlobalToast = styled.div`
  width: calc(100% - 20px);
  padding: 20px;
  color: #fff;
  font-family: NanumSquareB;
  font-size: 16px;
  text-align: center;
  background: #041320;
  margin-top: 20px;
  border-radius: 5px;
`

const Toast = ({ toast, onClick }: IToastProps) => {
  useEffect(() => {
    const timeoutKey = setTimeout(() => {
      onClick()
    }, 3000)

    return () => {
      clearTimeout(timeoutKey)
    }
  }, [])
  return <StyledGlobalToast onClick={onClick}>{toast.content}</StyledGlobalToast>
}

export default Toast
