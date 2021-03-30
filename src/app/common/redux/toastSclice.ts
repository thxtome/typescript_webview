import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import IToast from '@common/types/IToast'

interface IToastState {
  toasts: IToast[]
}

const initialState: IToastState = {
  toasts: [],
}

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.toasts.push({ content: action.payload, id: nanoid(8) })
      return state
    },

    remove: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter((toast) => toast.id !== action.payload)
      return state
    },
  },
})

export const { add, remove } = toastSlice.actions

export default toastSlice.reducer
