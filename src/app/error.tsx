'use client'

import { Center, Stack, Text, Button } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <Center h="100%">
      <Stack align="center" gap="md">
        <IconAlertCircle size={40} color="var(--mantine-color-red-6)" />
        <Text size="lg" fw={500}>Something went wrong!</Text>
        <Text size="sm" c="dimmed" maw={400} ta="center">
          {error.message || 'An unexpected error occurred. Please try again later.'}
        </Text>
        <Button 
          onClick={reset}
          variant="light"
          color="red"
        >
          Try again
        </Button>
      </Stack>
    </Center>
  )
}
