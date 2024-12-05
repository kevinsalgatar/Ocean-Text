'use client'

import { Button, ButtonProps } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'

interface ActionButtonProps extends Omit<ButtonProps, 'success'> {
  loading?: boolean
  success?: boolean
}

export function ActionButton({ 
  loading, 
  success, 
  children, 
  leftSection,
  ...props 
}: ActionButtonProps) {
  return (
    <Button
      variant={success ? 'light' : 'gradient'}
      gradient={{ from: 'cyberpink.4', to: 'neonblue.4', deg: 45 }}
      loading={loading}
      color={success ? 'teal' : undefined}
      leftSection={success ? <IconCheck size={16} /> : leftSection}
      {...props}
    >
      {success ? 'Done' : children}
    </Button>
  )
}
