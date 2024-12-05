import { Modal, Text, Stack, Badge, Code } from '@mantine/core'
import { Message } from '@/types/message'

interface MessageDetailsModalProps {
  message: Message | null
  opened: boolean
  onClose: () => void
}

export default function MessageDetailsModal({ message, opened, onClose }: MessageDetailsModalProps) {
  if (!message) return null

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Message Details"
      centered
      overlayProps={{
        opacity: 0.55,
        blur: 3,
      }}
      sx={theme => ({
        '.mantine-Modal-title': {
          color: theme.colors.dark[0],
          fontWeight: 600,
        },
      })}
    >
      <Stack spacing="md">
        <div>
          <Text size="sm" weight={500} color="dimmed">Message ID</Text>
          <Code>{message.id}</Code>
        </div>
        
        <div>
          <Text size="sm" weight={500} color="dimmed">Recipient</Text>
          <Text>{message.recipient}</Text>
        </div>

        <div>
          <Text size="sm" weight={500} color="dimmed">Content</Text>
          <Text>{message.content}</Text>
        </div>

        <div>
          <Text size="sm" weight={500} color="dimmed">Status</Text>
          <Badge 
            color={
              message.status === 'delivered' ? 'teal' : 
              message.status === 'failed' ? 'red' : 
              'yellow'
            }
            variant="light"
          >
            {message.status}
          </Badge>
        </div>

        <div>
          <Text size="sm" weight={500} color="dimmed">Timestamp</Text>
          <Text>{message.timestamp}</Text>
        </div>
      </Stack>
    </Modal>
  )
}
