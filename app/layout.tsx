import './globals.css'
import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}
