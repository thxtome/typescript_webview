import { combineReducers } from '@reduxjs/toolkit'
import curationReducer from '@curation/redux/curationSclice'
import modalReducer from '@common/redux/modalSclice'
import confirmReducer from '@common/redux/confirmSclice'
import toastReducer from '@common/redux/toastSclice'

const reducer = combineReducers({ modalReducer, curationReducer, confirmReducer, toastReducer })

export type RootState = ReturnType<typeof reducer>
export default reducer
