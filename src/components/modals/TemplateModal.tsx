'use client'

import { useState } from 'react'
import { 
  Stack, 
  TextInput, 
  Textarea, 
  Button,
  Select,
  Group,
  Paper,
  ActionIcon,
  Text
} from '@mantine/core'
import { IconPlus, IconTrash } from '@tabler/icons-react'
import { BaseModal } from '@/components/ui/BaseModal'
import { showNotification } from '@/utils/notifications'

// ... existing interfaces ...

export function TemplateModal({ isOpen, onClose, initialData }: TemplateModalProps) {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState(initialData?.name || '')
  const [content, setContent] = useState(initialData?.content || '')
  const [category, setCategory] = useState<string | null>(initialData?.category || null)
  const [variables, setVariables] = useState<Variable[]>(
    initialData?.variables || []
  )

  const validateForm = () => {
    if (!name) {
      showNotification.error('Template name is required')
      return false
    }
    if (!category) {
      showNotification.error('Please select a category')
      return false
    }
    if (!content) {
      showNotification.error('Template content is required')
      return false
    }
    
    // Validate variables
    const invalidVariables = variables.filter(v => !v.name || !v.type)
    if (invalidVariables.length > 0) {
      showNotification.error('All variables must have a name and type')
      return false
    }

    // Check if all variables used in content are defined
    const contentVariables = content.match(/\{\{([^}]+)\}\}/g)?.map(v => v.slice(2, -2)) || []
    const definedVariables = variables.map(v => v.name)
    const undefinedVariables = contentVariables.filter(v => !definedVariables.includes(v))
    
    if (undefinedVariables.length > 0) {
      showNotification.error(`Undefined variables: ${undefinedVariables.join(', ')}`)
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
          ? 'Template updated successfully' 
          : 'Template created successfully'
      )
      onClose()
    } catch (error) {
      showNotification.error(
        'Failed to save template. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={initialData ? 'Edit Template' : 'New Template'}
    >
      <Stack gap="md">
        {/* ... existing form fields ... */}

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
            {initialData ? 'Save Changes' : 'Create Template'}
          </Button>
        </Group>
      </Stack>
    </BaseModal>
  )
}
