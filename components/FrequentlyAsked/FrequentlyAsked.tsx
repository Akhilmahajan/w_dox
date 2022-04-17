import FrequentlyAskedCard from '../FrequentlyAskedCard/FrequentlyAskedCard'
import styles from './FrequentlyAsked.module.css'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import Button from '../Button/Button'

export default function FrequentlyAsked() {
  return (
    <div className={styles.main}>
      <div className={styles.sideNote}>FAQ</div>
      <div className={styles.container}>
        <div className={styles.heading}>Frequently Asked Questions</div>
        <FrequentlyAskedCard
          title="How to Apply for Pre-Sale."
          href="/#"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <FrequentlyAskedCard
          title="How to Apply for Pre-Sale."
          href="/#"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <FrequentlyAskedCard
          title="How to Apply for Pre-Sale."
          href="/#"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <FrequentlyAskedCard
          title="How to Apply for Pre-Sale."
          href="/#"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <div className={styles.questions}>
          <ChatBubbleIcon
            sx={{ color: 'white', width: '100px', height: '100px' }}
          />
          <div className={styles.bold}>Do you have more questions?</div>
          <div>Links to discord, etc?</div>
          <Button className={styles.button} variant="primary">
            Ask us a Question
          </Button>
        </div>
      </div>
    </div>
  )
}
