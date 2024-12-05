'use client'

import { useState } from 'react'
import { Stack, Table, TextInput, Badge, ActionIcon, Menu, Text, Group } from '@mantine/core'
import { 
  IconSearch, 
  IconDotsVertical, 
  IconEye, 
  IconTrash, 
  IconRepeat,
  IconPlus
} from '@tabler/icons-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { DataCard } from '@/components/ui/DataCard'
import { LoadingTable } from '@/components/ui/LoadingTable'
import { ErrorDisplay } from '@/components/ui/ErrorDisplay'
import { MessageModal } from '@/components/modals/MessageModal'
import { useModal } from '@/hooks/useModal'
import { useMessages } from '@/hooks/useMessages'

export function MessagesPage() {
  const messageModal = useModal()
  const { messages, isLoading, error } = useMessages()
  const [search, setSearch] = useState('')

  if (error) {
    return (
      <ErrorDisplay 
        message="Failed to load messages" 
        retryAction={() => window.location.reload()} 
      />
    )
  }

  const filteredMessages = messages.filter(message => 
    message.recipient.includes(search) || 
    message.content.toLowerCase().includes(search.toLowerCase())
  )

  const getStatusColor = (status: 'delivered' | 'failed' | 'pending') => {
    switch (status) {
      case 'delivered':
        return 'teal'
      case 'failed':
        return 'red'
      case 'pending':
        return 'yellow'
      default:
        return 'gray'
    }
  }

  return (
    <Stack gap="lg">
      <PageHeader 
        title="Messages"
        action={{
          label: "New Message",
          icon: IconPlus,
          onClick: messageModal.open
        }}
      />

      <DataCard>
        <Stack gap="md">
          <TextInput
            placeholder="Search messages..."
            leftSection={<IconSearch size={16} />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {isLoading ? (
            <LoadingTable columns={5} rows={5} />
          ) : (
            <Table.ScrollContainer minWidth={800}>
              <Table striped highlightOnHover withTableBorder>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Recipient</Table.Th>
                    <Table.Th>Message</Table.Th>
                    <Table.Th>Status</Table.Th>
                    <Table.Th>Timestamp</Table.Th>
                    <Table.Th>Actions</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {filteredMessages.map(message => (
                    <Table.Tr key={message.id}>
                      <Table.Td>{message.recipient}</Table.Td>
                      <Table.Td>
                        <Text lineClamp={1} size="sm">
                          {message.content}
                        </Text>
                      </Table.Td>
                      <Table.Td>
                        <Badge 
                          color={getStatusColor(message.status)}
                          variant="light"
                        >
                          {message.status}
                        </Badge>
                      </Table.Td>
                      <Table.Td>
                        <Text size="sm">{message.timestamp}</Text>
                      </Table.Td>
                      <Table.Td>
                        <Menu shadow="md" position="bottom-end">
                          <Menu.Target>
                            <ActionIcon variant="subtle" color="gray">
                              <IconDotsVertical size={16} />
                            </ActionIcon>
                          </Menu.Target>

                          <Menu.Dropdown>
                            <Menu.Item leftSection={<IconEye size={14} />}>
                              View Details
                            </Menu.Item>
                            <Menu.Item leftSection={<IconRepeat size={14} />}>
                              Resend
                            </Menu.Item>
                            <Menu.Item 
                              leftSection={<IconTrash size={14} />}
                              color="red"
                            >
                              Delete
                            </Menu.Item>
                          </Menu.Dropdown>
                        </Menu>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </Table.ScrollContainer>
          )}
        </Stack>
      </DataCard>

      <MessageModal 
        isOpen={messageModal.isOpen} 
        onClose={messageModal.close}
      />
    </Stack>
  )
}
