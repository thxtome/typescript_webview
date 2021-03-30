import styled from '../../styles/styled-px2vw'
import BackDrop from '@common/components/Backdrop'
import IConfirm from '@common/types/IConfirm'
import Confirm from '@common/components/ConfirmBox/Confirm'

interface ConfirmBoxProps {
  confirm: IConfirm | null
}

const ConfirmBox = ({ confirm }: ConfirmBoxProps) => {
  return (
    confirm && (
      <BackDrop>
        <Confirm confirm={confirm} />
      </BackDrop>
    )
  )
}

export default ConfirmBox
