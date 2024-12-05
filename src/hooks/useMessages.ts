'use client'

import { useState, useEffect } from 'react'
import { showNotification } from '@/utils/notifications'

interface Message {
  id: string
  recipient: string
  content: string
  status: 'delivered' | 'failed' | 'pending'
  timestamp: string
}

const mockMessages: Message[] = [
  {
    id: '1',
    recipient: '+1234567890',
    content: 'Your verification code is 123456',
    status: 'delivered',
    timestamp: '2023-08-20 14:30'
  },
  {
    id: '2',
    recipient: '+9876543210',
    content: 'Your order #12345 has been shipped',
    status: 'pending',
    timestamp: '2023-08-20 14:25'
  },
  {
    id: '3',
    recipient: '+1122334455',
    content: 'Payment received for invoice #INV-001',
    status: 'failed',
    timestamp: '2023-08-20 14:20'
  }
]

export function useMessages() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(true)
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setMessages(mockMessages)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch messages'))
        showNotification.error('Failed to load messages')
      } finally {
        setIsLoading(false)
      }
    }

    fetchMessages()
  }, [])

  return { messages, isLoading, error }
}
