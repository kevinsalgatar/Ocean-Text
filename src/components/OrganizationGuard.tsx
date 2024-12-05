import { ReactNode } from 'react'
import { useOrganization } from '@/contexts/OrganizationContext'
import { Center, Text, Button, Stack } from '@mantine/core'

interface OrganizationGuardProps {
  children: ReactNode
}

export default function OrganizationGuard({ children }: OrganizationGuardProps) {
  const { currentOrganization, isLoading } = useOrganization()

  if (isLoading) {
    return (
      <Center h={200}>
        <Text>Loading organization...</Text>
      </Center>
    )
  }

  if (!currentOrganization) {
    return (
      <Center h={200}>
        <Stack align="center" spacing="md">
          <Text>No organization selected</Text>
          <Button
            variant="light"
            sx={theme => ({
              background: `linear-gradient(45deg, ${theme.colors.cyberpink[4]}, ${theme.colors.neonblue[4]})`,
            })}
          >
            Select Organization
          </Button>
        </Stack>
      </Center>
    )
  }

  return <>{children}</>
}
