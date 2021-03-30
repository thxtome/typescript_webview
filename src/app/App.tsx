import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import StackNavigationContanier from '@common/containers/StackNavigation'
import Screen from '@common/components/Screen'
import Splash from '@common/pages/splash'
import { useState, useEffect } from 'react'
import ModalNavigationContanier from './common/containers/ModalNavigation'
import { close, open } from '@common/redux/modalSclice'
import { add } from '@common/redux/toastSclice'
import { open as openConfirm } from '@common/redux/confirmSclice'
import { useDispatch } from 'react-redux'
import IConfirm from '@common/types/IConfirm'
import ConfirmBoxContanier from './common/containers/ConfirmBox'
import ToastBoxContanier from './common/containers/ToastBox'

const toast1: string = '첫번째 토스트입니다.'

const confirm1: IConfirm = {
  title: '컨펌1',
  content: '첫번째 컨펌입니다.',
}
const confirm2: IConfirm = {
  title: '컨펌2',
  content: '두번째 컨펌입니다.',
  onClick: () => {
    alert('두번째 컨펌')
  },
}

function App() {
  const dispatch = useDispatch()

  const openConfirmWrap = (confirm: IConfirm) => {
    console.log(confirm)
    dispatch(openConfirm(confirm))
  }

  const onAddToastBtnClick = (content: string) => {
    dispatch(add(content))
  }

  const openModal = (modalName: string) => {
    dispatch(open(modalName))
  }

  const [showSplash, setShowSplash] = useState(false)
  useEffect(() => {
    const timeoutId: NodeJS.Timeout = setTimeout(() => {
      setShowSplash(false)
    }, 3000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return showSplash ? (
    <Splash></Splash>
  ) : (
    <BrowserRouter>
      <ul
        style={{
          padding: 0,
          margin: 0,
          position: 'fixed',
          bottom: 40,
          height: '40px',
          width: '100%',
          display: 'flex',
          zIndex: 2500,
        }}
      >
        <button>
          <NavLink to="/stack/b">Green</NavLink>
        </button>
        <button>
          <NavLink to="/stack/a">Red</NavLink>
        </button>
        <button onClick={openModal.bind(null, 'modalA')}>open modal1</button>
        <button onClick={openModal.bind(null, 'modalB')}>open modal2</button>
      </ul>
      <ul
        style={{
          padding: 0,
          margin: 0,
          position: 'fixed',
          bottom: 0,
          height: '40px',
          width: '100%',
          display: 'flex',
          zIndex: 2500,
        }}
      >
        <button onClick={openConfirmWrap.bind(null, confirm1)}>confirm1</button>
        <button onClick={openConfirmWrap.bind(null, confirm2)}>confirm2</button>
        <button onClick={onAddToastBtnClick.bind(null, toast1)}>toast1</button>
      </ul>
      <StackNavigationContanier initialRoute={'/stack/root'}>
        <Screen title={'root'} path={'/stack/root'} bg={'#6d8a71'}>
          1
        </Screen>
        <Screen title={'스크린A'} path={'/stack/a'} bg={'#8a6d71'}>
          1
        </Screen>
        <Screen title={'스크린B'} path={'/stack/b'} bg={'#d718a6'}>
          1
        </Screen>
      </StackNavigationContanier>
      <ModalNavigationContanier>
        <Screen title={'모달A'} modalName={'modalA'} bg={'#8a6d71'}>
          1
        </Screen>
        <Screen title={'모달B'} modalName={'modalB'} bg={'#d718a6'}>
          1
        </Screen>
      </ModalNavigationContanier>
      <ConfirmBoxContanier></ConfirmBoxContanier>
      <ToastBoxContanier></ToastBoxContanier>
    </BrowserRouter>
  )
}

export default App
