import { 
  Menu,
  UnstyledButton,
  Avatar,
  Text,
  Group,
  Box
} from '@mantine/core'
import { 
  IconUser,
  IconLogout,
  IconSwitchHorizontal,
  IconChevronDown,
  IconKey,
  IconBell
} from '@tabler/icons-react'
import { User } from '@/types'

// Mock current user - replace with actual auth context
const currentUser: User = {
  id: '1',
  name: 'Super Admin',
  email: 'super@example.com',
  role: 'super_admin'
}

export default function UserButton() {
  const roleColor = {
    super_admin: 'pink',
    admin: 'blue',
    manager: 'teal',
    user: 'gray'
  }[currentUser.role] || 'gray'

  return (
    <Menu 
      position="bottom-end" 
      withArrow
      width={200}
      shadow="md"
    >
      <Menu.Target>
        <UnstyledButton
          sx={(theme) => ({
            padding: '8px',
            borderRadius: theme.radius.md,
            color: theme.colors.dark[0],
            '&:hover': {
              backgroundColor: theme.colors.dark[6],
            },
          })}
        >
          <Group spacing="xs">
            <Avatar 
              src={null}
              alt={currentUser.name} 
              radius="xl" 
              size={30}
              color={roleColor}
            >
              {currentUser.name.charAt(0)}
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Text size="sm" weight={500}>
                {currentUser.name}
              </Text>
              <Text size="xs" color="dimmed">
                {currentUser.email}
              </Text>
            </Box>
            <IconChevronDown size={16} />
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown
        sx={theme => ({
          backgroundColor: theme.colors.dark[7],
          border: `1px solid ${theme.colors.dark[5]}`,
        })}
      >
        <Menu.Label
          sx={theme => ({
            color: theme.colors.dark[2],
          })}
        >
          {currentUser.role.replace('_', ' ').toUpperCase()}
        </Menu.Label>

        <Menu.Item 
          icon={<IconUser size={14} />}
          sx={theme => ({
            color: theme.colors.dark[0],
            '&:hover': {
              backgroundColor: theme.colors.dark[6],
            },
          })}
        >
          My Profile
        </Menu.Item>

        <Menu.Item 
          icon={<IconKey size={14} />}
          sx={theme => ({
            color: theme.colors.dark[0],
            '&:hover': {
              backgroundColor: theme.colors.dark[6],
            },
          })}
        >
          API Keys
        </Menu.Item>

        <Menu.Item 
          icon={<IconBell size={14} />}
          sx={theme => ({
            color: theme.colors.dark[0],
            '&:hover': {
              backgroundColor: theme.colors.dark[6],
            },
          })}
        >
          Notifications
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item 
          icon={<IconSwitchHorizontal size={14} />}
          sx={theme => ({
            color: theme.colors.dark[0],
            '&:hover': {
              backgroundColor: theme.colors.dark[6],
            },
          })}
        >
          Switch Account
        </Menu.Item>
        
        <Menu.Item 
          icon={<IconLogout size={14} />}
          sx={theme => ({
            color: theme.colors.red[4],
            '&:hover': {
              backgroundColor: theme.colors.dark[6],
            },
          })}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
