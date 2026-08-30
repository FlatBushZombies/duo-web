import type { Metadata, Viewport } from 'next'
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

const SITE_URL = 'https://duoapp.com'
const SITE_NAME = 'Duo'
const TITLE = 'Duo | Watch Together, Choose Together'
const DESCRIPTION =
  "Duo matches you and your partner on movies you'll both love. Swipe, match, and enjoy the perfect movie night, every time — free on iOS and Android."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Duo',
  },
  description: DESCRIPTION,
  keywords: [
    'movie matching app',
    'couples movie night app',
    'what to watch app',
    'swipe movies',
    'movie night planner',
    'couples app',
    'Duo app',
  ],
  applicationName: SITE_NAME,
  authors: [{ name: 'Duo' }],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/duo-icon.png',
        width: 500,
        height: 500,
        alt: 'Duo app icon',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/duo-icon.png'],
  },
  icons: {
    icon: '/duo-icon.png',
    shortcut: '/favicon.ico',
    apple: '/duo-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#fefcf7',
  colorScheme: 'light',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/duo-icon.png`,
  sameAs: [],
}

const appJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE_NAME,
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'iOS, Android',
  description: DESCRIPTION,
  url: SITE_URL,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
        />
      </head>
      <body className={`${baloo2.variable} ${londrinaSolid.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
