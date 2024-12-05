import { Modal, Paper, Text, Stack, TextInput, Button, Group } from '@mantine/core'
import { Template, Variable } from '@/types/template'
import { useState } from 'react'

interface TemplatePreviewModalProps {
  template: Template | null
  opened: boolean
  onClose: () => void
}

export default function TemplatePreviewModal({ template, opened, onClose }: TemplatePreviewModalProps) {
  const [variables, setVariables] = useState<Record<string, string>>({})

  if (!template) return null

  const previewContent = template.content.replace(
    /\{\{(\w+)\}\}/g,
    (match, variable) => variables[variable] || match
  )

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Template Preview"
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
        <Paper 
          p="md"
          radius="md"
          sx={theme => ({
            backgroundColor: theme.colors.dark[7],
            border: `1px solid ${theme.colors.dark[6]}`,
          })}
        >
          <Text size="sm" weight={500} mb="xs">Variables</Text>
          <Stack spacing="xs">
            {template.variables.map(variable => (
              <TextInput
                key={variable}
                label={variable}
                placeholder={`Enter ${variable}`}
                value={variables[variable] || ''}
                onChange={(e) => setVariables({
                  ...variables,
                  [variable]: e.target.value
                })}
                size="xs"
              />
            ))}
          </Stack>
        </Paper>

        <Paper 
          p="md"
          radius="md"
          sx={theme => ({
            backgroundColor: theme.colors.dark[7],
            border: `1px solid ${theme.colors.dark[6]}`,
          })}
        >
          <Text size="sm" weight={500} mb="xs">Preview</Text>
          <Text size="sm">{previewContent}</Text>
        </Paper>

        <Group position="right">
          <Button
            variant="light"
            onClick={onClose}
          >
            Close
          </Button>
        </Group>
      </Stack>
    </Modal>
  )
}
