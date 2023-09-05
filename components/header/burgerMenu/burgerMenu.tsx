import styles from './burgerMenu.module.scss'

const burgerIcon = 
  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="34" viewBox="0 0 38 34" fill="#2F80ED" >
    <rect x="0" y="7" width="38" height="2" id="topLine" />
    <rect x="0" y="15" width="38" height="2" />
    <rect x="0" y="23" width="38" height="2" id="bottomLine" />
  </svg>

export default function BurgerMenu() {
  return (
    <button className={styles.burgerMenu}>
      {burgerIcon}
      <span>меню</span>
    </button>
  )
}
