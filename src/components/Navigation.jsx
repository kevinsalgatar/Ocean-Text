
import { Navbar, UnstyledButton, Stack, Text } from '@mantine/core'
import { IconDashboard, IconMessage, IconBrandCampaignmonitor, IconTemplate, IconSettings } from '@tabler/icons-react'
import { useNavigate, useLocation } from 'react-router-dom'

const navItems = [
  { icon: IconDashboard, label: 'Dashboard', path: '/' },
  { icon: IconMessage, label: 'Messages', path: '/messages' },
  { icon: IconBrandCampaignmonitor, label: 'Campaigns', path: '/campaigns' },
  { icon: IconTemplate, label: 'Templates', path: '/templates' },
  { icon: IconSettings, label: 'Settings', path: '/settings' }
]

export default function Navigation() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Navbar width={{ base: 250 }} p="xs">
      <Navbar.Section grow mt="md">
        <Stack spacing={0}>
          {navItems.map((item) => (
            <UnstyledButton
              key={item.path}
              onClick={() => navigate(item.path)}
              sx={(theme) => ({
                display: 'block',
                width: '100%',
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color: location.pathname === item.path ? theme.colors.blue[7] : theme.colors.gray[7],
                backgroundColor: location.pathname === item.path ? theme.colors.blue[