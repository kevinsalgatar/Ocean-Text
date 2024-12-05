'use client'

import { useState } from 'react'
import { 
  Stack, 
  TextInput, 
  Textarea, 
  Button,
  Select,
  Text,
  Group
} from '@mantine/core'
import { BaseModal } from '@/components/ui/BaseModal'
import { showNotification } from '@/utils/notifications'

interface MessageModalProps {
  isOpen: boolean
  onClose: () => void
  initialData?: {
    recipient: string
    content: string
    template?: string
  }
}

const mockTemplates = [
  { value: 'welcome', label: 'Welcome Message' },
  { value: 'order', label: 'Order Confirmation' },
  { value: 'promo', label: 'Promotional Offer' },
]

export function MessageModal({ isOpen, onClose, initialData }: MessageModalProps) {
  const [loading, setLoading] = useState(false)
  const [template, setTemplate] = useState<string | null>(initialData?.template || null)
  const [recipient, setRecipient] = useState(initialData?.recipient || '')
  const [content, setContent] = useState(initialData?.content || '')

  const handleSubmit = async () => {
    if (!recipient || !content) {
      showNotification.error('Please fill in all required fields')
      return
    }

    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      showNotification.success(
        initialData 
          ? 'Message updated successfully' 
          : 'Message sent successfully'
      )
      onClose()
    } catch (error) {
      showNotification.error(
        'Failed to send message. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={initialData ? 'Edit Message' : 'New Message'}
    >
      <Stack gap="md">
        <TextInput
          label="Recipient"
          placeholder="+1234567890"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
          error={!recipient && 'Recipient is required'}
        />

        <Select
          label="Template"
          placeholder="Select a template"
          data={mockTemplates}
          value={template}
          onChange={setTemplate}
          clearable
        />

        <Textarea
          label="Message Content"
          placeholder="Type your message here..."
          minRows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          error={!content && 'Message content is required'}
        />

        <Text size="xs" c="dimmed">
          Character count: {content.length}
        </Text>

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
            {initialData ? 'Save Changes' : 'Send Message'}
          </Button>
        </Group>
      </Stack>
    </BaseModal>
  )
}
