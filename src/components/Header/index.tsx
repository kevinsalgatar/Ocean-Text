'use client'

import { 
  Group, 
  Box,
  Text,
  Divider
} from '@mantine/core'
import { UserButton } from './UserButton'
import { OrganizationSelector } from './OrganizationSelector'

export function Header() {
  return (
    <Group 
      justify="space-between" 
      h="100%" 
      px="md"
    >
      <Box
        style={{
          background: 'linear-gradient(45deg, var(--mantine-color-cyberpink-4), var(--mantine-color-neonblue-4))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        <Text size="xl" fw={700}>SMS Gateway Platform</Text>
      </Box>

      <Group>
        <OrganizationSelector />
        <Divider orientation="vertical" />
        <UserButton />
      </Group>
    </Group>
  )
}
