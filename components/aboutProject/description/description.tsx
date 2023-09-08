import styles from './description.module.scss'
import VideoWidget from '../videoWidget/videoWidget'

export default function Description() {
  return (
    <div className={styles.description}>
      <div className={styles.brick}></div>
      <h1>
        <span>уютное и безопасное пространство для счастливой,</span>
        <span>спокойной и размеренной жизни</span>
      </h1>
      <div className={styles.text}>
        <span>Квартиры от 65 до 356 м<sup>2</sup> с чистовой отделкой,</span>
        <span>балконами, лоджиями и террасами В собственной ЗАКРЫТОЙ охраняемой территории.</span>
      </div>      
      <VideoWidget video={'https://www.youtube.com/watch?v=9eF3kupk-yg'} length={123} />
    </div>
  )
}
