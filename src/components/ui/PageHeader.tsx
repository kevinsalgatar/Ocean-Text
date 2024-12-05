'use client'

import { Title, Group, Button, Stack } from '@mantine/core'
import { TablerIconsProps } from '@tabler/icons-react'

interface PageHeaderProps {
  title: string
  action?: {
    label: string
    icon: (props: TablerIconsProps) => JSX.Element
    onClick: () => void
  }
}

export function PageHeader({ title, action }: PageHeaderProps) {
  return (
    <Stack gap="lg">
      <Group justify="space-between">
        <Title 
          order={2}
          c="dark.0"
        >
          {title}
        </Title>
        {action && (
          <Button
            leftSection={<action.icon size={16} />}
            onClick={action.onClick}
            variant="gradient"
            gradient={{ from: 'cyberpink.4', to: 'neonblue.4', deg: 45 }}
          >
            {action.label}
          </Button>
        )}
      </Group>
    </Stack>
  )
}
