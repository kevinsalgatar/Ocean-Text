export interface Organization {
  id: string
  name: string
  status: 'active' | 'suspended' | 'pending'
  plan: 'basic' | 'professional' | 'enterprise'
}

export type UserRole = 'super_admin' | 'admin' | 'manager' | 'user'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  organizationId?: string
}

export interface Message {
  id: string
  recipient: string
  content: string
  status: 'delivered' | 'failed' | 'pending'
  timestamp: string
}

export interface Campaign {
  id: string
  name: string
  status: 'active' | 'draft' | 'completed' | 'scheduled'
  recipients: number
  delivered: number
  failed: number
  schedule: string
  progress: number
  description: string
  template: string
}

export interface Template {
  id: string
  name: string
  content: string
  category: string
  variables: string[]
  status: 'active' | 'draft' | 'archived'
  lastModified: string
  usageCount: number
  createdBy: string
}

export interface SystemHealth {
  status: 'healthy' | 'degraded' | 'critical'
  uptime: string
  cpuUsage: number
  memoryUsage: number
  queueSize: number
  activeConnections: number
}

export interface SystemLog {
  id: string
  timestamp: string
  level: 'info' | 'warning' | 'error' | 'debug'
  service: string
  message: string
  metadata?: Record<string, any>
}

export interface ProviderStatus {
  id: string
  name: string
  status: 'operational' | 'degraded' | 'down'
  latency: number
  successRate: number
  lastChecked: string
}

export interface QueueMetrics {
  pending: number
  processing: number
  failed: number
  completed: number
  avgProcessingTime: number
}
