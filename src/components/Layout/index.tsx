import { AppShell } from '@mantine/core'
import Navigation from '../Navigation'
import Header from '../Header'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AppShell
      padding="md"
      navbar={<Navigation />}
      header={<Header />}
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colors.dark[8],
          backgroundImage: 'linear-gradient(45deg, rgba(255, 0, 144, 0.1) 0%, rgba(0, 144, 255, 0.1) 100%)',
        }
      })}
    >
      {children}
    </AppShell>
  )
}
