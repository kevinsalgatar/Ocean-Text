'use client'

import { Skeleton, Table, Stack } from '@mantine/core'

interface LoadingTableProps {
  rows?: number
  columns?: number
}

export function LoadingTable({ rows = 5, columns = 4 }: LoadingTableProps) {
  return (
    <Stack gap="md">
      <Skeleton height={36} radius="sm" />
      <Table>
        <Table.Thead>
          <Table.Tr>
            {Array(columns).fill(0).map((_, i) => (
              <Table.Th key={i}>
                <Skeleton height={20} width={100} />
              </Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {Array(rows).fill(0).map((_, i) => (
            <Table.Tr key={i}>
              {Array(columns).fill(0).map((_, j) => (
                <Table.Td key={j}>
                  <Skeleton height={20} width={j === 0 ? 150 : 100} />
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Stack>
  )
}
