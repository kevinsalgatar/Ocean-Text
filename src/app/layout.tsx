import type { Metadata } from 'next'
import { ColorSchemeScript } from '@mantine/core'
import { Providers } from '@/providers'
import { Shell } from '@/components/Shell'

export const metadata: Metadata = {
  title: 'SMS Gateway Platform',
  description: 'Enterprise SMS Gateway Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>
          <Shell>{children}</Shell>
        </Providers>
      </body>
    </html>
  )
}
