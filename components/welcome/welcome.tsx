import Image from 'next/image'
import styles from './welcome.module.scss'

export default function Welcome() {
  return (
    <section className={styles.welcome}>
      <div className={styles.image}>
      <Image
        src="/images/welcomeImage.jpg"
        fill
        alt="Изображение нашего лучшего дома"
      />
      </div>
      <div className={styles.slogan}>
      Дом бизнес-класса<br/>для ценителей роскоши
      </div>
      <div className={styles.name}>
      <Image
        src="/svgs/inchapin-welcome.svg"
        fill
        alt="Изображение нашего лучшего дома"
      />
      </div>
    </section>
  )
}