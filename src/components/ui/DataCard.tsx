'use client'

import { Paper, PaperProps } from '@mantine/core'

interface DataCardProps extends PaperProps {
  children: React.ReactNode
}

export function DataCard({ children, ...props }: DataCardProps) {
  return (
    <Paper
      p="md"
      radius="md"
      bg="dark.7"
      style={{
        border: '1px solid var(--mantine-color-dark-6)',
      }}
      {...props}
    >
      {children}
    </Paper>
  )
}
