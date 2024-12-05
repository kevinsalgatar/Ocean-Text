'use client'

import { Center, Loader, Text, Stack } from '@mantine/core'

interface LoadingOverlayProps {
  message?: string
}

export function LoadingOverlay({ message = 'Loading...' }: LoadingOverlayProps) {
  return (
    <Center h="100%" py="xl">
      <Stack align="center" gap="sm">
        <Loader size="lg" type="bars" color="var(--mantine-color-cyberpink-4)" />
        <Text size="sm" c="dimmed">{message}</Text>
      </Stack>
    </Center>
  )
}
