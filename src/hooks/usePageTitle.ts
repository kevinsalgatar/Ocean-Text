'use client'

import { usePathname } from 'next/navigation'

export function usePageTitle() {
  const pathname = usePathname()
  
  const titles: Record<string, string> = {
    '/': 'Dashboard',
    '/messages': 'Messages',
    '/campaigns': 'Campaigns',
    '/templates': 'Templates',
    '/admin': 'Admin Tools',
    '/admin/organizations': 'Organizations'
  }

  return titles[pathname] || 'SMS Gateway Platform'
}
