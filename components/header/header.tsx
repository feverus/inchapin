
import styles from './header.module.scss'
import BurgerMenu from './burgerMenu/burgerMenu'
import FlatSelect from './flatSelect/flatSelect'
import RequestCall from './requestCall/requestCall'
import Logo from './logo/logo'

export default function Header() {
  return (
    <header className={styles.header}>
      <BurgerMenu />
      <FlatSelect />
      <Logo />
      <div className={styles.phone}>
        <a href="tel:+74955272121">+7 495 527 21 21</a>
      </div>
      <RequestCall />
    </header>
  )
}
