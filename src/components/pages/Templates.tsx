// ... existing imports ...
import { TemplateModal } from '@/components/modals/TemplateModal'
import { useModal } from '@/hooks/useModal'

export function TemplatesPage() {
  const templateModal = useModal()
  // ... existing code ...

  return (
    <Stack gap="lg">
      <PageHeader 
        title="Templates"
        action={{
          label: "New Template",
          icon: IconPlus,
          onClick: templateModal.open
        }}
      />
      
      {/* ... existing content ... */}

      <TemplateModal 
        isOpen={templateModal.isOpen} 
        onClose={templateModal.close}
      />
    </Stack>
  )
}
