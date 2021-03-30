import React, { useState, useEffect, ReactElement } from 'react'

//component
import ModalNavigation from '@common/components/ModalNavigation'
import NavigationBar from '@common/components/NavigationBar'

//asset
import closeBtnSvg from '@asset/svg/btn_close_normal.svg'

//redux
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector, nanoid } from '@reduxjs/toolkit'
import { RootState } from '@common/redux/rootReducer'
import { close, init } from '@common/redux/modalSclice'

interface IProps {
  children: React.ReactElement[] | React.ReactElement
}

const ModalNavigationContanier = ({ children }: IProps) => {
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false)
  const dispatch = useDispatch()

  const onCloseBtnClick = () => {
    if (isTransitioning) {
      return
    }
    dispatch(close())
    setIsTransitioning(true)
    setTimeout(() => {
      setIsTransitioning(false)
    }, 300)
  }

  const stackSelector = createSelector(
    (state: RootState) => state.modalReducer.stack,
    (stack: ReactElement[]) =>
      stack.map((modal, idx) => {
        const cssProps = { in: true, timeout: 200, classNames: 'modal', key: idx }
        const bar = React.createElement(NavigationBar, {
          title: modal.props.title,
          onClick: onCloseBtnClick,
          icon: closeBtnSvg,
        })
        const div = React.createElement('div', { style: { width: '100%', height: '100%' } }, bar, modal)
        return React.createElement(CSSTransition, cssProps, div)
      })
  )

  const stack = useSelector(stackSelector)

  useEffect(() => {
    if (!Array.isArray(children)) {
      dispatch(init([children]))
    } else {
      dispatch(init(children))
    }
  }, [])
  console.log(stack)

  let props =
    stack.length > 0
      ? {
          width: '100vw',
          height: '100vh',
        }
      : {
          width: '0',
          height: '0',
        }

  return (
    <ModalNavigation {...props} onClick={onCloseBtnClick}>
      <TransitionGroup component={null}>{stack.slice(stack.length - 2, stack.length)}</TransitionGroup>
    </ModalNavigation>
  )
}

export default ModalNavigationContanier
