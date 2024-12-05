'use client'

import { Skeleton, Stack } from '@mantine/core'
import { DataCard } from './DataCard'

export function LoadingCard() {
  return (
    <DataCard>
      <Stack gap="md">
        <Skeleton height={24} width="60%" />
        <Skeleton height={8} />
        <Skeleton height={8} />
        <Skeleton height={8} width="80%" />
        <Stack gap="xs">
          <Skeleton height={20} width={100} />
          <Skeleton height={32} radius="xl" />
        </Stack>
      </Stack>
    </DataCard>
  )
}
