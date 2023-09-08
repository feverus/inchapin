import Image from 'next/image'
import styles from './welcome.module.scss'
import WelcomeImage from './welcomeImage'

export default function Welcome() {
  return (
    <section className={styles.welcome}>
      <div className={styles.image}>
        <WelcomeImage />
      </div>
      <div className={styles.slogan}>
        Дом бизнес-класса<br />для ценителей роскоши
      </div>
      <div className={styles.name}>
        <Image
          src="/svgs/inchapin-welcome.svg"
          fill
          alt="" />
      </div>
    </section>
  );
}

