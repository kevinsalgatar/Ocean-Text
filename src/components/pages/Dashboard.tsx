'use client'

import { 
  Title, 
  SimpleGrid, 
  Paper, 
  Text, 
  Group,
  RingProgress,
  Stack
} from '@mantine/core'
import { 
  IconMessage, 
  IconUsers, 
  IconBolt, 
  IconChartBar 
} from '@tabler/icons-react'

const stats = [
  { title: 'Messages Sent', value: '24.7K', icon: IconMessage, color: 'cyan' },
  { title: 'Active Users', value: '1,294', icon: IconUsers, color: 'blue' },
  { title: 'Delivery Rate', value: '99.8%', icon: IconBolt, color: 'teal' },
  { title: 'Campaigns', value: '156', icon: IconChartBar, color: 'grape' }
]

export function DashboardPage() {
  return (
    <Stack gap="lg">
      <Title 
        order={2}
        c="dark.0"
      >
        Dashboard
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
        {stats.map((stat) => (
          <Paper
            key={stat.title}
            p="md"
            radius="md"
            bg="dark.7"
            style={{
              border: '1px solid var(--mantine-color-dark-6)',
            }}
          >
            <Group justify="space-between" mb="xs">
              <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
                {stat.title}
              </Text>
              <stat.icon size={20} color={`var(--mantine-color-${stat.color}-4)`} />
            </Group>

            <Group align="flex-end" gap="xs">
              <Text size="xl" fw={700}>
                {stat.value}
              </Text>
              <Text size="sm" c="dimmed">
                last 24h
              </Text>
            </Group>
          </Paper>
        ))}
      </SimpleGrid>

      <SimpleGrid cols={{ base: 1, lg: 2 }} mt="md">
        <Paper
          p="md"
          radius="md"
          bg="dark.7"
          style={{
            border: '1px solid var(--mantine-color-dark-6)',
          }}
        >
          <Title order={3} size="h4" mb="md">Delivery Performance</Title>
          <Group>
            <RingProgress
              size={160}
              roundCaps
              thickness={8}
              sections={[
                { value: 40, color: 'cyan' },
                { value: 25, color: 'orange' },
                { value: 15, color: 'grape' }
              ]}
              label={
                <Text ta="center" size="lg" fw={700}>
                  98.5%
                </Text>
              }
            />
            <Stack gap="xs">
              <Group gap="xs">
                <Box w={12} h={12} bg="cyan" style={{ borderRadius: '2px' }} />
                <Text size="sm">Delivered (40%)</Text>
              </Group>
              <Group gap="xs">
                <Box w={12} h={12} bg="orange" style={{ borderRadius: '2px' }} />
                <Text size="sm">Pending (25%)</Text>
              </Group>
              <Group gap="xs">
                <Box w={12} h={12} bg="grape" style={{ borderRadius: '2px' }} />
                <Text size="sm">Failed (15%)</Text>
              </Group>
            </Stack>
          </Group>
        </Paper>

        <Paper
          p="md"
          radius="md"
          bg="dark.7"
          style={{
            border: '1px solid var(--mantine-color-dark-6)',
          }}
        >
          <Title order={3} size="h4" mb="md">Recent Activity</Title>
          <Stack gap="xs">
            {[1, 2, 3, 4].map((i) => (
              <Group key={i} justify="space-between" py="xs">
                <Stack gap={4}>
                  <Text size="sm" fw={500}>Campaign "Summer Sale" completed</Text>
                  <Text size="xs" c="dimmed">2000 messages sent • 98% delivered</Text>
                </Stack>
                <Text size="xs" c="dimmed">2h ago</Text>
              </Group>
            ))}
          </Stack>
        </Paper>
      </SimpleGrid>
    </Stack>
  )
}
