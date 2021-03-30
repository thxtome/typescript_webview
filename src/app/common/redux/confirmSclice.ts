import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IConfirm from '@common/types/IConfirm'

interface IConfirmState {
  confirms: IConfirm[]
}

const initialState: IConfirmState = {
  confirms: [],
}

export const confirmSlice = createSlice({
  name: 'confirm',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<IConfirm>) => {
      state.confirms.push(action.payload)
      return state
    },

    close: (state) => {
      state.confirms.pop()
      return state
    },
  },
})

export const { open, close } = confirmSlice.actions

export default confirmSlice.reducer
