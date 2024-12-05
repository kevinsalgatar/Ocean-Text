'use client'

import { Center, Stack, Text, Button } from '@mantine/core'
import { IconAlertCircle, IconRefresh } from '@tabler/icons-react'

interface ErrorDisplayProps {
  message: string
  retryAction?: () => void
}

export function ErrorDisplay({ message, retryAction }: ErrorDisplayProps) {
  return (
    <Center h="100%" py="xl">
      <Stack align="center" gap="md">
        <IconAlertCircle size={40} color="var(--mantine-color-red-6)" />
        <Text size="lg" fw={500}>{message}</Text>
        {retryAction && (
          <Button
            variant="light"
            color="red"
            leftSection={<IconRefresh size={16} />}
            onClick={retryAction}
          >
            Try Again
          </Button>
        )}
      </Stack>
    </Center>
  )
}
