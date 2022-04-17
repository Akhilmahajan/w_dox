import SearchBar from '../inputs/SearchBar/SearchBar'
import styles from './HomeView.module.css'
import logo from '../../assets/images/white_logo.svg'
import { useState } from 'react'
import { Box, Modal, Typography } from '@mui/material'
import { Button as MaterialButton } from '@mui/material'
import MyImage from '../MyImage/MyImage'
import Button from '../Button/Button'

export default function HomeView() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    color: 'white',
    bgcolor: 'transparent',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  return (
    <>
      <div className={styles.homeView}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Coming Soon!
            </Typography>
            <Button onClick={handleClose}>Go Back</Button>
          </Box>
        </Modal>
        <div className={styles.container}>
          <div className={styles.logoWrapper}>
            <MyImage src={logo} alt="" placeholder="empty" />
          </div>
          <div className={styles.title}>
            WDOX DAO is the first decentralized regulation ecosystem within
            Web3.
          </div>
          <p className={styles.text}>
            We’re working to make Web3 a safer place, and we’re asking the
            community to play a major role. We want everyone to be involved in
            making the space more honest, more enjoyable, and easier to
            navigate, for all. The fraud ends here.{' '}
          </p>
          <div className={styles.searchBarWrapper}>
            <SearchBar placeholder="Search an NFT project" />
          </div>
          <div className={styles.button}>
            <MaterialButton
              sx={{ width: '100%', height: '100%', borderRadius: 0 }}
              variant="contained"
              onClick={handleOpen}
            >
              <span className={styles.buttonText}>Check Project Status</span>
            </MaterialButton>
          </div>
        </div>
      </div>
    </>
  )
}
