import { useState } from 'react'
import { 
  Modal, 
  TextInput, 
  Textarea, 
  Button, 
  Stack, 
  Select,
  Paper,
  Text,
  Group,
  ActionIcon
} from '@mantine/core'
import { IconPlus, IconTrash } from '@tabler/icons-react'
import { Variable } from '@/types/template'

interface NewTemplateModalProps {
  opened: boolean
  onClose: () => void
  onSubmit: (template: any) => void
}

export default function NewTemplateModal({ opened, onClose, onSubmit }: NewTemplateModalProps) {
  const [variables, setVariables] = useState<Variable[]>([])

  const addVariable = () => {
    setVariables([...variables, { 
      name: '', 
      defaultValue: '', 
      type: 'text' 
    }])
  }

  const removeVariable = (index: number) => {
    setVariables(variables.filter((_, i) => i !== index))
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="New Template"
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
          label="Template Name"
          placeholder="Enter template name"
          required
        />

        <Select
          label="Category"
          placeholder="Select category"
          data={[
            { value: 'onboarding', label: 'Onboarding' },
            { value: 'transactional', label: 'Transactional' },
            { value: 'marketing', label: 'Marketing' },
            { value: 'notifications', label: 'Notifications' },
          ]}
          required
        />

        <Textarea
          label="Content"
          placeholder="Template content with {{variables}}"
          minRows={4}
          required
        />

        <Paper 
          p="md"
          radius="md"
          sx={theme => ({
            backgroundColor: theme.colors.dark[7],
            border: `1px solid ${theme.colors.dark[6]}`,
          })}
        >
          <Group position="apart" mb="md">
            <Text size="sm" weight={500}>Variables</Text>
            <Button 
              size="xs"
              leftIcon={<IconPlus size={14} />}
              onClick={addVariable}
              variant="light"
            >
              Add Variable
            </Button>
          </Group>

          {variables.map((variable, index) => (
            <Group key={index} mb="xs" align="flex-end">
              <TextInput
                label="Name"
                placeholder="variable_name"
                size="xs"
                sx={{ flex: 1 }}
                value={variable.name}
                onChange={(e) => {
                  const newVariables = [...variables]
                  newVariables[index].name = e.target.value
                  setVariables(newVariables)
                }}
              />
              <Select
                label="Type"
                size="xs"
                sx={{ width: 100 }}
                value={variable.type}
                onChange={(value) => {
                  const newVariables = [...variables]
                  newVariables[index].type = value as Variable['type']
                  setVariables(newVariables)
                }}
                data={[
                  { value: 'text', label: 'Text' },
                  { value: 'number', label: 'Number' },
                  { value: 'date', label: 'Date' },
                  { value: 'name', label: 'Name' },
                  { value: 'custom', label: 'Custom' },
                ]}
              />
              <TextInput
                label="Default"
                placeholder="Default value"
                size="xs"
                sx={{ flex: 1 }}
                value={variable.defaultValue}
                onChange={(e) => {
                  const newVariables = [...variables]
                  newVariables[index].defaultValue = e.target.value
                  setVariables(newVariables)
                }}
              />
              <ActionIcon 
                color="red" 
                onClick={() => removeVariable(index)}
                sx={{ marginBottom: 2 }}
              >
                <IconTrash size={16} />
              </ActionIcon>
            </Group>
          ))}
        </Paper>

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
          Create Template
        </Button>
      </Stack>
    </Modal>
  )
}
