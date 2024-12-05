'use client'

import { useState } from 'react'
import { Stack, SimpleGrid } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { LoadingCard } from '@/components/ui/LoadingCard'
import { CampaignModal } from '@/components/modals/CampaignModal'
import { useModal } from '@/hooks/useModal'
import { useCampaigns } from '@/hooks/useCampaigns' // We'll create this

export function CampaignsPage() {
  const campaignModal = useModal()
  const { campaigns, isLoading, error } = useCampaigns()

  if (error) {
    return (
      <ErrorDisplay 
        message="Failed to load campaigns" 
        retryAction={() => window.location.reload()} 
      />
    )
  }

  return (
    <Stack gap="lg">
      <PageHeader 
        title="Campaigns"
        action={{
          label: "New Campaign",
          icon: IconPlus,
          onClick: campaignModal.open
        }}
      />

      <SimpleGrid cols={{ base: 1, md: 2, xl: 3 }} spacing="lg">
        {isLoading ? (
          Array(6).fill(0).map((_, i) => <LoadingCard key={i} />)
        ) : (
          // Existing campaign cards
        )}
      </SimpleGrid>

      <CampaignModal 
        isOpen={campaignModal.isOpen} 
        onClose={campaignModal.close}
      />
    </Stack>
  )
}
