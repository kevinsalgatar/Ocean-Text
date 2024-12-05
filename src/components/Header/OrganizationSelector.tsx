import { 
  Select, 
  Group, 
  ActionIcon,
  Tooltip
} from '@mantine/core'
import { 
  IconBuilding, 
  IconRefresh
} from '@tabler/icons-react'
import { useOrganization } from '@/contexts/OrganizationContext'

// Mock current user - replace with actual auth context
const currentUser = {
  id: '1',
  name: 'Super Admin',
  email: 'super@example.com',
  role: 'super_admin' as const
}

export default function OrganizationSelector() {
  const { 
    currentOrganization, 
    setCurrentOrganization, 
    organizations,
    isLoading 
  } = useOrganization()

  const canSwitchOrganizations = ['super_admin', 'admin'].includes(currentUser.role)

  if (!canSwitchOrganizations) return null

  return (
    <Group>
      <Select
        placeholder="Select organization"
        icon={<IconBuilding size={14} />}
        value={currentOrganization?.id}
        onChange={(value) => {
          const org = organizations.find(o => o.id === value)
          if (org) setCurrentOrganization(org)
        }}
        data={organizations.map(org => ({
          value: org.id,
          label: org.name
        }))}
        sx={{ width: 200 }}
        disabled={isLoading}
      />
      <Tooltip label="Refresh organizations">
        <ActionIcon 
          variant="subtle" 
          onClick={() => {
            // Implement refresh logic
          }}
          sx={theme => ({
            color: theme.colors.dark[0],
            '&:hover': {
              backgroundColor: theme.colors.dark[6],
            },
          })}
        >
          <IconRefresh size={18} />
        </ActionIcon>
      </Tooltip>
    </Group>
  )
}
