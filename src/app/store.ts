import { configureStore } from '@reduxjs/toolkit'
import { sagaMiddleware } from '@common/redux/rootSaga'
import rootReducer from '@common/redux/rootReducer'
import rootSaga from '@common/redux/rootSaga'

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export default store
