import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import curation from '../types/curation'
import { createAsyncAction } from '@common/helpers/toolkit'

type CurationState = {
  curation: curation
}

const initialState: CurationState = {
  curation: { pid_curation: 0 },
}

export const curationSlice = createSlice({
  name: 'curation',
  initialState,
  reducers: {
    increment: (state) => {
      state.curation.pid_curation += 1
      return state
    },

    decrement: (state) => {
      state.curation.pid_curation -= 1
      return state
    },

    incrementByAmount: createAsyncAction((state, action: PayloadAction<number>) => {
      state.curation.pid_curation = state.curation.pid_curation + action.payload
      return state
    }),
  },
})

export const { increment, decrement, incrementByAmount } = curationSlice.actions

export default curationSlice.reducer
