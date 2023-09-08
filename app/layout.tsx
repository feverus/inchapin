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
      <head>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2f80ed"/>
        <meta name="msapplication-TileColor" content="#2f80ed"/>
        <meta name="theme-color" content="#2f80ed"/>
      </head>
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
