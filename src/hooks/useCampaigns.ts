'use client'

import { useState, useEffect } from 'react'
import { showNotification } from '@/utils/notifications'

interface Campaign {
  id: string
  name: string
  status: 'active' | 'draft' | 'completed' | 'scheduled'
  recipients: number
  delivered: number
  failed: number
  schedule: string
  progress: number
  description: string
}

const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'Summer Sale Promotion',
    status: 'active',
    recipients: 1000,
    delivered: 750,
    failed: 50,
    schedule: '2023-08-20 15:00',
    progress: 75,
    description: 'Promotional campaign for summer sale with special discounts'
  },
  {
    id: '2',
    name: 'Welcome Series',
    status: 'scheduled',
    recipients: 500,
    delivered: 0,
    failed: 0,
    schedule: '2023-08-21 10:00',
    progress: 0,
    description: 'Automated welcome messages for new subscribers'
  },
  {
    id: '3',
    name: 'Customer Feedback',
    status: 'completed',
    recipients: 2000,
    delivered: 1950,
    failed: 50,
    schedule: '2023-08-19 09:00',
    progress: 100,
    description: 'Post-purchase feedback collection campaign'
  }
]

export function useCampaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchCampaigns = async () => {
      setIsLoading(true)
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setCampaigns(mockCampaigns)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch campaigns'))
        showNotification.error('Failed to load campaigns')
      } finally {
        setIsLoading(false)
      }
    }

    fetchCampaigns()
  }, [])

  return { campaigns, isLoading, error }
}
