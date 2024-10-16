import { Inter } from 'next/font/google'
import { GlobalProvider } from './GlobalContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admit',
  icons: {
    icon: [
      '/admitLogoSolo.png', // Update this path to point to your new favicon
    ],
    apple: [
      '/admitLogoSolo.png' // Also update for apple touch icon
    ],
    shortcut: [
      '/admitLogoSolo.png' // Update the shortcut icon
    ]
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
        <div>
          {children}
        </div>
        </GlobalProvider>
      </body>
    </html>
  )
}
