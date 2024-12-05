'use client'

import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { OrganizationProvider } from '@/contexts/OrganizationContext'
import { theme } from '@/config/theme'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Notifications />
      <OrganizationProvider>
        {children}
      </OrganizationProvider>
    </MantineProvider>
  )
}
