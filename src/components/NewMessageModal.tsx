import { Modal, TextInput, Textarea, Button, Stack } from '@mantine/core'

interface NewMessageModalProps {
  opened: boolean
  onClose: () => void
  onSubmit: (recipient: string, message: string) => void
}

export default function NewMessageModal({ opened, onClose, onSubmit }: NewMessageModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="New Message"
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
        <TextInput
          label="Recipient"
          placeholder="+1234567890"
          required
        />
        <Textarea
          label="Message"
          placeholder="Type your message here..."
          minRows={4}
          required
        />
        <Button
          fullWidth
          sx={theme => ({
            background: `linear-gradient(45deg, ${theme.colors.cyberpink[4]}, ${theme.colors.neonblue[4]})`,
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: `0 0 20px ${theme.colors.cyberpink[9]}`,
            },
          })}
        >
          Send Message
        </Button>
      </Stack>
    </Modal>
  )
}
