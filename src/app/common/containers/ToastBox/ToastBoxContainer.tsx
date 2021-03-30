//style
import styled from '../../styles/styled-px2vw'

//types
import IToast from '@common/types/IToast'

//component
import ToastBox from '@common/components/ToastBox'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@common/redux/rootReducer'
import { remove } from '@common/redux/toastSclice'

const ToastBoxContainer = () => {
  const dispatch = useDispatch()
  const deleteToast = (id: string) => {
    dispatch(remove(id))
  }
  const toastSelecotr = createSelector(
    (state: RootState) => state.toastReducer.toasts,
    (toasts: IToast[]) => toasts
  )
  const toasts = useSelector(toastSelecotr)

  return toasts.length > 0 ? <ToastBox toasts={toasts} deleteToast={deleteToast}></ToastBox> : <></>
}

export default ToastBoxContainer
