import { useEffect, useState } from 'react'
import { useOrganization } from '@/contexts/OrganizationContext'

export function useOrganizationData<T>(
  fetchData: (organizationId: string) => Promise<T>,
  defaultValue: T
) {
  const { currentOrganization } = useOrganization()
  const [data, setData] = useState<T>(defaultValue)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!currentOrganization) return

    const loadData = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const result = await fetchData(currentOrganization.id)
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch data'))
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [currentOrganization, fetchData])

  return { data, isLoading, error, setData }
}
