import React, { useState, useEffect } from 'react'
import StackNavigation from '@common/components/StackNavigation'
import { useLocation, useHistory } from 'react-router-dom'
import { Location } from 'history'
import { nanoid } from '@reduxjs/toolkit'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

interface IStackNavigationProps {
  initialRoute: string
  children: React.ReactElement[] | React.ReactElement
}

const StackNavigationContanier = ({ initialRoute, children }: IStackNavigationProps) => {
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false)
  const [stack, setStack] = useState<React.ReactElement[]>([])
  const [title, setTitle] = useState<string>('')
  let location = useLocation()
  let history = useHistory()

  useEffect(() => {
    history.replace(initialRoute)
  }, [])

  useEffect(() => {
    updateStack()
  }, [location])

  const getPage = (location: Location): React.ReactElement | undefined => {
    if (!Array.isArray(children)) {
      return children.props.path === location.pathname ? children : undefined
    }
    return children.find((value) => value.props.path === location.pathname)
  }

  const isRootRoute = (location: Location): boolean => {
    return location.pathname === initialRoute
  }

  const updateStack = () => {
    const screen = getPage(location)
    if (!screen) {
      console.log('x')
      return
    }
    setTitle(screen.props.title)

    const cssProps = isRootRoute(location)
      ? { in: true, timeout: 0, classNames: 'root', key: nanoid(8) }
      : { in: true, timeout: 300, classNames: 'screen', key: nanoid(8) }

    const newScreen = React.createElement(CSSTransition, cssProps, screen)

    if (history.action === 'PUSH') {
      setStack([...stack, newScreen])
    } else {
      let newStack = [...stack.slice(0, -1)]
      console.log(newStack, 'newstack')

      if (history.action === 'REPLACE') {
        newStack.push(newScreen)
      }
      setStack(newStack)
    }
  }

  const onBackBtnClick = () => {
    if (isTransitioning) {
      return
    }

    setIsTransitioning(true)
    history.goBack()

    setTimeout(() => {
      setIsTransitioning(false)
    }, 300)
  }

  const props = {
    width: '100%',
    height: '100%',
    display: 'block',
    onClick: onBackBtnClick,
    isRoot: isRootRoute(location),
  }

  return stack.length > 0 ? (
    <StackNavigation {...props} onClick={onBackBtnClick} title={title}>
      <TransitionGroup component={null}>{stack.slice(stack.length - 2, stack.length)}</TransitionGroup>
    </StackNavigation>
  ) : (
    <></>
  )
}

export default StackNavigationContanier
