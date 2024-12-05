import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Organization } from '@/types'

interface OrganizationContextType {
  currentOrganization: Organization | null
  setCurrentOrganization: (org: Organization) => void
  organizations: Organization[]
  isLoading: boolean
}

// Mock data - replace with API calls in production
const mockOrganizations: Organization[] = [
  {
    id: '1',
    name: 'Acme Corp',
    status: 'active',
    plan: 'enterprise'
  },
  {
    id: '2',
    name: 'TechStart Inc',
    status: 'active',
    plan: 'professional'
  },
  {
    id: '3',
    name: 'Global Services Ltd',
    status: 'active',
    plan: 'basic'
  }
]

const OrganizationContext = createContext<OrganizationContextType | undefined>(undefined)

export function OrganizationProvider({ children }: { children: ReactNode }) {
  const [currentOrganization, setCurrentOrganization] = useState<Organization | null>(null)
  const [organizations, setOrganizations] = useState<Organization[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const fetchOrganizations = async () => {
      setIsLoading(true)
      try {
        // Replace with actual API call
        setOrganizations(mockOrganizations)
        // Set first organization as default if none selected
        if (!currentOrganization && mockOrganizations.length > 0) {
          setCurrentOrganization(mockOrganizations[0])
        }
      } catch (error) {
        console.error('Failed to fetch organizations:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchOrganizations()
  }, [])

  return (
    <OrganizationContext.Provider
      value={{
        currentOrganization,
        setCurrentOrganization,
        organizations,
        isLoading
      }}
    >
      {children}
    </OrganizationContext.Provider>
  )
}

export function useOrganization() {
  const context = useContext(OrganizationContext)
  if (context === undefined) {
    throw new Error('useOrganization must be used within an OrganizationProvider')
  }
  return context
}
