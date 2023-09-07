'use client'

import styles from './page.module.scss'
import Welcome from '@/components/welcome/welcome'
import AboutProject from '@/components/aboutProject/aboutProject'
import RequestCallForm from '@/components/requestCallForm/requestCallForm'

export default function Home() {
  return (<>   
      <main>
        <Welcome />
        <AboutProject />
      </main>
      <RequestCallForm />    
  </>)
}