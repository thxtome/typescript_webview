import createSagaMiddleware from 'redux-saga'
import { takeLatest, all, fork, put, call, takeEvery } from 'redux-saga/effects'
import { increment, decrement, incrementByAmount } from '@curation/redux/curationSclice'

export const sagaMiddleware = createSagaMiddleware()

function* fetchCuration() {
  yield put(increment())
  try {
    // const products = yield call(fetchApi, '/products')
  } catch (error) {
    yield put(decrement())
  }
  yield put(increment())
}

function* curationSaga() {
  yield takeEvery(incrementByAmount, fetchCuration)
}

export default curationSaga
