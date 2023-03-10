import Link from 'next/link'
import './globals.css'
import styles from './page.module.scss'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.headerWrapper}>
            <Link href = "/" className={styles.headerItem}>
              Home
            </Link>
            <Link href = "/recipes" className={styles.headerItem}>
              Recipes
            </Link>
        </header>
        {children}
      </body>
    </html>
  )
}
