'use client'

import { AppShell } from '@mantine/core'
import { Navigation } from './Navigation'
import { Header } from './Header'

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      padding="md"
      navbar={{ width: 250, breakpoint: 'sm' }}
      header={{ height: 60 }}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Navbar>
        <Navigation />
      </AppShell.Navbar>
      <AppShell.Main
        style={{
          backgroundColor: 'var(--mantine-color-dark-8)',
          backgroundImage: 'linear-gradient(45deg, rgba(255, 0, 144, 0.1) 0%, rgba(0, 144, 255, 0.1) 100%)',
        }}
      >
        {children}
      </AppShell.Main>
    </AppShell>
  )
}
