import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import Navs from '../../components/Navs/Navs'
import Timer from '../../components/Timer/Timer'
import styles from './Presale.module.css'

export default function Presale() {
  return (
    <>
      <div className={styles.presale}>
        <Navs />
        <div className={styles.main}>
          <h1>Presale Countdown</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          similique aliquam quia, molestias nostrum voluptate pariatur, officia
          magnam eligendi, totam fugit expedita nobis? Quae quasi incidunt ab
          dolorem rerum adipisci?
          <Button
            style={{ margin: '20px' }}
            onClick={() => {
              console.log('')
            }}
            variant="primary"
          >
            Buy WDOX
          </Button>
          <Timer />
        </div>
        <Footer />
      </div>
    </>
  )
}
