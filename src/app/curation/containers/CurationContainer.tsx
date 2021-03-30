import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@common/redux/rootReducer'
import { selectAsyncActionId } from '@common/helpers/toolkit'
import { increment, incrementByAmount } from '@curation/redux/curationSclice'
import curation from '../types/curation'

function CurationContainer() {
  const curationSelector = createSelector(
    (state: RootState) => state.curationReducer.curation,
    (curation: curation) => curation
  )

  const curation = useSelector(curationSelector)
  const dispatch = useDispatch()
  const action = incrementByAmount(3)
  console.log(selectAsyncActionId(action))

  const onIncrease = () => {
    dispatch(incrementByAmount(3, 'g'))
  }

  return (
    <div className="App">
      <header className="App-header" onClick={onIncrease}>
        <p>
          Edit{curation.pid_curation} <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default CurationContainer
