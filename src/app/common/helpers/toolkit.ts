import { PayloadAction, nanoid, CaseReducer, Action } from '@reduxjs/toolkit'

type asyncMeta = {
  id: string
  position?: string
}

interface AsyncAction extends Action {
  meta: asyncMeta
}

export const createAsyncAction = (reducer: CaseReducer<any, PayloadAction<any>>) => {
  return {
    reducer,
    prepare: (payload?: any, position: string = 'l') => {
      return { payload: payload, meta: { id: nanoid(8), position } }
    },
  }
}

export const selectAsyncActionId = (action: AsyncAction) => {
  return action.meta.position
}

