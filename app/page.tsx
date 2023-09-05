import Image from 'next/image'
import styles from './page.module.scss'
import Header from '@/components/header/header'
import Welcome from '@/components/welcome/welcome'
import AboutProject from '@/components/aboutProject/aboutProject'

export default function Home() {
  return (<>
    <Header />
    <main>
      <Welcome />
      <AboutProject />
    </main>
  </>)
}