import createSagaMiddleware from 'redux-saga'
import { takeLatest, all, fork } from 'redux-saga/effects'
import { increment, incrementByAmount } from '@curation/redux/curationSclice'
import curationSaga from '@curation/redux/curationSaga'

export const sagaMiddleware = createSagaMiddleware()

function* hello() {
  yield takeLatest(incrementByAmount, () => {
    console.log('hello')
  })
}

function* rootSaga() {
  yield all([fork(hello), fork(curationSaga)])
}

export default rootSaga
