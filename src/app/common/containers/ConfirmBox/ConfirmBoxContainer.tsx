//types
import IConfirm from '@common/types/IConfirm'

//component
import ConfirmBox from '@common/components/ConfirmBox'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@common/redux/rootReducer'
import { close } from '@common/redux/confirmSclice'

const ConfirmBoxContanier = () => {
  const dispatch = useDispatch()
  const confirmSelector = createSelector(
    (state: RootState) => state.confirmReducer.confirms,
    (confirms: IConfirm[]) => {
      const confirm = confirms[0]
      const onConfirmBtnClick = () => {
        dispatch(close())
        confirm.onClick && confirm.onClick()
      }
      return confirm ? { ...confirm, onClick:onConfirmBtnClick } : null
    }
  )

  const confirm = useSelector(confirmSelector)

  return <ConfirmBox confirm={confirm}></ConfirmBox>
}

export default ConfirmBoxContanier
