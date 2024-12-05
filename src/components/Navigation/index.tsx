'use client'

import { Navbar, UnstyledButton, Stack, Text, Divider } from '@mantine/core'
import { 
  IconDashboard, 
  IconMessage, 
  IconBrandCampaignmonitor, 
  IconTemplate, 
  IconShieldLock,
  IconBuilding
} from '@tabler/icons-react'
import { usePathname, useRouter } from 'next/navigation'
import { TablerIconsProps } from '@tabler/icons-react'
import { UserRole } from '@/types'

interface NavItem {
  icon: (props: TablerIconsProps) => JSX.Element
  label: string
  path: string
  roles?: UserRole[]
}

// Mock current user - replace with actual auth context
const currentUser = {
  id: '1',
  name: 'Super Admin',
  email: 'super@example.com',
  role: 'super_admin' as UserRole
}

const navItems: NavItem[] = [
  { 
    icon: IconDashboard, 
    label: 'Dashboard', 
    path: '/' 
  },
  { 
    icon: IconMessage, 
    label: 'Messages', 
    path: '/messages' 
  },
  { 
    icon: IconBrandCampaignmonitor, 
    label: 'Campaigns', 
    path: '/campaigns' 
  },
  { 
    icon: IconTemplate, 
    label: 'Templates', 
    path: '/templates' 
  },
  { 
    icon: IconShieldLock, 
    label: 'Admin Tools', 
    path: '/admin',
    roles: ['super_admin', 'admin']
  },
  { 
    icon: IconBuilding, 
    label: 'Organizations', 
    path: '/admin/organizations',
    roles: ['super_admin']
  }
]

export function Navigation() {
  const router = useRouter()
  const pathname = usePathname()

  const filteredNavItems = navItems.filter(item => 
    !item.roles || item.roles.includes(currentUser.role)
  )

  return (
    <Navbar.Section grow p="xs">
      <Stack gap={0}>
        {filteredNavItems.map((item) => (
          <UnstyledButton
            key={item.path}
            onClick={() => router.push(item.path)}
            style={(theme) => ({
              display: 'block',
              width: '100%',
              padding: theme.spacing.xs,
              borderRadius: theme.radius.sm,
              color: pathname === item.path 
                ? 'var(--mantine-color-cyberpink-4)' 
                : 'var(--mantine-color-dark-0)',
              backgroundColor: pathname === item.path 
                ? 'var(--mantine-color-dark-6)' 
                : 'transparent',
              '&:hover': {
                backgroundColor: 'var(--mantine-color-dark-7)',
                transform: 'translateX(4px)',
                transition: 'transform 200ms ease',
              },
              transition: 'all 200ms ease',
              marginBottom: 4,
            })}
          >
            <Group gap="xs">
              <item.icon size={20} />
              <Text size="sm">{item.label}</Text>
            </Group>
          </UnstyledButton>
        ))}
      </Stack>

      <Divider my="sm" />
      <Stack gap={2} px="xs">
        <Text size="xs" c="dimmed">
          Logged in as: {currentUser.name}
        </Text>
        <Text size="xs" c="dimmed">
          Role: {currentUser.role}
        </Text>
      </Stack>
    </Navbar.Section>
  )
}
