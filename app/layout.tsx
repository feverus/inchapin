'use client'

import './globals.css'
import type { Metadata } from 'next'
import { ReduxProvider } from './provider'
import Scroll from '@/components/smoothScrollbar/smoothScrollbar'
import Header from '@/components/header/header'

export const metadata: Metadata = {
  title: 'Inchapin',
  description: 'Made by Evgeny Patsinko',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <ReduxProvider>
          <Header />
          <div id='scrollWrapper'>
            <Scroll />
            {children} 
          </div>
        </ReduxProvider>
      </body>
    </html>
  )
}
