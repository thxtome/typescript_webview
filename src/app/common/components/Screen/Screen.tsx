import styled from '@common/styles/styled-px2vw'
import { CSSTransition } from 'react-transition-group'
import { useState, useEffect } from 'react'
interface ScreenProps {
  width?: string
  height?: string
  display?: string
  children?: React.ReactNode
  title: string
  path?: string
  modalName?: string
  bg: string
}

const StyledScreen = styled.div<{ bg: string }>`
  padding: 0 6.4vw;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  background: ${(props) => props.bg};
`

const Screen = ({ bg, children }: ScreenProps) => {
  return <StyledScreen bg={bg}>{children}</StyledScreen>
}

export default Screen
