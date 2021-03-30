import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import { CSSTransition } from 'react-transition-group'
import React, { ReactElement } from 'react'

type ModalState = {
  modalName: string
  action: string
  stack: ReactElement[]
  children: ReactElement[]
}

const initialState: ModalState = {
  modalName: '',
  action: '',
  stack: [],
  children: [],
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    init: (state, action: PayloadAction<ReactElement[]>) => {
      state.children = action.payload
      return state
    },

    open: (state, action: PayloadAction<string>) => {
      console.log(action.payload)

      const modal = state.children.find((value) => value.props.modalName === action.payload)
      if (!modal) {
        return
      }
      console.log(modal)
      state.stack.push(modal)
      return state
    },

    close: (state) => {
      state.stack = [...state.stack.slice(0, -1)]
      return state
    },
  },
})

export const { open, close, init } = modalSlice.actions

export default modalSlice.reducer
