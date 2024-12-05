import { Center, Stack, Text, Button } from '@mantine/core'
import { IconQuestionMark } from '@tabler/icons-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Center h="100%">
      <Stack align="center" gap="md">
        <IconQuestionMark size={40} color="var(--mantine-color-yellow-6)" />
        <Text size="lg" fw={500}>Page not found</Text>
        <Text size="sm" c="dimmed" maw={400} ta="center">
          The page you are looking for might have been removed or is temporarily unavailable.
        </Text>
        <Button 
          component={Link}
          href="/"
          variant="light"
        >
          Return to dashboard
        </Button>
      </Stack>
    </Center>
  )
}
