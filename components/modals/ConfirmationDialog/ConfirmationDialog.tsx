import { ReactChild } from 'react'
import Modal from '../Modal/Modal'
import styles from './ConfirmationDialog.module.css'

interface IConfirmationDialog {
  show: boolean;
  children: string | ReactChild | ReactChild[];
  modalWidth: string;
  modalHeight: string;
  style: object;
  handleClose: () => void | null;
  handleAction: () => void;
}

export default function ConfirmationDialog({
  show,
  style,
  children,
  modalWidth,
  modalHeight,
  handleAction,
  handleClose
}: IConfirmationDialog) {
  return (
    <Modal width={modalWidth} height={modalHeight} show={show}>
      <div style={style} className={styles.container}>
        <div className={styles.question}>{children}</div>
        <div className={styles.actions}>
          <button className={styles.closeButton} type="button" onClick={handleClose}>
            close
          </button>
          <button className={styles.actionButton} type="button" onClick={handleAction}>
            Yes
          </button>
        </div>
      </div>
    </Modal>
  )
}
