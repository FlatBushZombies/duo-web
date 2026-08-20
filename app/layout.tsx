import type { Metadata } from 'next'
import { Baloo_2, Londrina_Solid } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const baloo2 = Baloo_2({
  subsets: ['latin'],
  variable: '--font-baloo',
  weight: ['400', '500', '600', '700', '800'],
})

const londrinaSolid = Londrina_Solid({
  subsets: ['latin'],
  variable: '--font-londrina',
  weight: ['300', '400', '900'],
})

export const metadata: Metadata = {
  title: 'Duo | Download & Watch Together',
  description: 'Duo matches you and your partner on movies you\'ll both love. Swipe, match, and enjoy the perfect movie night, every time.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${baloo2.variable} ${londrinaSolid.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
