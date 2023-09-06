import styles from './aboutProject.module.scss'
import Cover from './cover/cover'
import Description from './description/description'

export default function AboutProject() {
  return (
    <section className={styles.about}>
      <Cover />
      <Description />
    </section>
  )
}
