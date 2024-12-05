import { Modal, TextInput, Textarea, Button, Stack, Select, NumberInput } from '@mantine/core'
import { DateTimePicker } from '@mantine/dates'

interface NewCampaignModalProps {
  opened: boolean
  onClose: () => void
  onSubmit: (campaign: any) => void
}

export default function NewCampaignModal({ opened, onClose, onSubmit }: NewCampaignModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="New Campaign"
      size="lg"
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
          label="Campaign Name"
          placeholder="Enter campaign name"
          required
        />

        <Textarea
          label="Description"
          placeholder="Campaign description"
          minRows={3}
          required
        />

        <Select
          label="Template"
          placeholder="Select template"
          data={[
            { value: 'template1', label: 'Welcome Message' },
            { value: 'template2', label: 'Promotional Offer' },
            { value: 'template3', label: 'Event Reminder' },
          ]}
          required
        />

        <NumberInput
          label="Recipients"
          placeholder="Number of recipients"
          min={1}
          required
        />

        <DateTimePicker
          label="Schedule"
          placeholder="Select date and time"
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
          Create Campaign
        </Button>
      </Stack>
    </Modal>
  )
}
