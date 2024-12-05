'use client'

import { useState } from 'react'
import { 
  Stack, 
  TextInput, 
  Textarea, 
  Button,
  Select,
  NumberInput,
  Group,
  SegmentedControl,
  Box,
  Text
} from '@mantine/core'
import { DateTimePicker } from '@mantine/dates'
import { BaseModal } from '@/components/ui/BaseModal'
import { showNotification } from '@/utils/notifications'

interface CampaignModalProps {
  isOpen: boolean
  onClose: () => void
  initialData?: {
    name: string
    description: string
    template?: string
    recipients?: number
    schedule?: Date
    status?: string
  }
}

const mockTemplates = [
  { value: 'welcome', label: 'Welcome Message' },
  { value: 'order', label: 'Order Confirmation' },
  { value: 'promo', label: 'Promotional Offer' },
]

export function CampaignModal({ isOpen, onClose, initialData }: CampaignModalProps) {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState(initialData?.name || '')
  const [description, setDescription] = useState(initialData?.description || '')
  const [template, setTemplate] = useState<string | null>(initialData?.template || null)
  const [recipients, setRecipients] = useState<number | ''>(initialData?.recipients || '')
  const [schedule, setSchedule] = useState<Date | null>(initialData?.schedule || null)
  const [status, setStatus] = useState(initialData?.status || 'draft')

  const validateForm = () => {
    if (!name) {
      showNotification.error('Campaign name is required')
      return false
    }
    if (!template) {
      showNotification.error('Please select a template')
      return false
    }
    if (!recipients) {
      showNotification.error('Number of recipients is required')
      return false
    }
    if (!schedule && status === 'scheduled') {
      showNotification.error('Schedule is required for scheduled campaigns')
      return false
    }
    return true
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      showNotification.success(
        initialData 
          ? 'Campaign updated successfully' 
          : 'Campaign created successfully'
      )
      onClose()
    } catch (error) {
      showNotification.error(
        'Failed to save campaign. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={initialData ? 'Edit Campaign' : 'New Campaign'}
    >
      <Stack gap="md">
        <TextInput
          label="Campaign Name"
          placeholder="Enter campaign name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          error={!name && 'Campaign name is required'}
        />

        <Textarea
          label="Description"
          placeholder="Campaign description"
          minRows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <Select
          label="Template"
          placeholder="Select a template"
          data={mockTemplates}
          value={template}
          onChange={setTemplate}
          required
          error={!template && 'Template is required'}
        />

        <NumberInput
          label="Recipients"
          placeholder="Number of recipients"
          min={1}
          value={recipients}
          onChange={setRecipients}
          required
          error={!recipients && 'Number of recipients is required'}
        />

        <DateTimePicker
          label="Schedule"
          placeholder="Select date and time"
          value={schedule}
          onChange={setSchedule}
          required={status === 'scheduled'}
          error={status === 'scheduled' && !schedule && 'Schedule is required'}
        />

        <Box>
          <Text size="sm" fw={500} mb="xs">Status</Text>
          <SegmentedControl
            fullWidth
            data={[
              { label: 'Draft', value: 'draft' },
              { label: 'Scheduled', value: 'scheduled' },
              { label: 'Active', value: 'active' }
            ]}
            value={status}
            onChange={setStatus}
          />
        </Box>

        <Group justify="flex-end" mt="md">
          <Button 
            variant="light" 
            color="gray" 
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            variant="gradient"
            gradient={{ from: 'cyberpink.4', to: 'neonblue.4', deg: 45 }}
            onClick={handleSubmit}
            loading={loading}
          >
            {initialData ? 'Save Changes' : 'Create Campaign'}
          </Button>
        </Group>
      </Stack>
    </BaseModal>
  )
}
