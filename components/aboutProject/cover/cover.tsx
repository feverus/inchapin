import Image from 'next/image'
import styles from './cover.module.scss'

export default function Cover() {
  return (
    <div className={styles.cover}>
      <div className={styles.topText}>
        О проекте
      </div>
      <div className={styles.image}>
        <Image
          src="/images/aboutCover.jpg"          
          width='733'
          height='900'
          style={{
            width: '100%',
            height: 'auto',
          }}
          alt="Иллюстрация"
        />
      </div>
      <div className={styles.badge}>
        <Image
          src="/svgs/badge-cover.svg"
          fill
          alt=""
        />        
      </div>      
    </div>
  )
}
