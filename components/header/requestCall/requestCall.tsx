'use client'

import styles from './requestCall.module.scss'
import { useDispatch } from "react-redux"
import { setRequestCallFormOpened } from "@/store/setSlice"

export default function RequestCall() {
  const dispatch = useDispatch()

  return (
    <button
      className={styles.textButton}
      onClick={() => dispatch(setRequestCallFormOpened())}
    >
      <span>Заказать звонок</span>
    </button>
  )
}
