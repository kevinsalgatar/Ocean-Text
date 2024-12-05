import { notifications } from '@mantine/notifications'
import { IconCheck, IconX } from '@tabler/icons-react'

export const showNotification = {
  success: (message: string, title = 'Success') => {
    notifications.show({
      title,
      message,
      color: 'teal',
      icon: <IconCheck size={16} />,
      styles: (theme) => ({
        root: {
          backgroundColor: theme.colors.dark[7],
          borderColor: theme.colors.teal[5],
        },
        title: {
          color: theme.colors.teal[4],
        },
        description: {
          color: theme.colors.dark[0],
        },
        closeButton: {
          color: theme.colors.dark[2],
          '&:hover': {
            backgroundColor: theme.colors.dark[6],
          },
        },
      }),
    })
  },

  error: (message: string, title = 'Error') => {
    notifications.show({
      title,
      message,
      color: 'red',
      icon: <IconX size={16} />,
      styles: (theme) => ({
        root: {
          backgroundColor: theme.colors.dark[7],
          borderColor: theme.colors.red[5],
        },
        title: {
          color: theme.colors.red[4],
        },
        description: {
          color: theme.colors.dark[0],
        },
        closeButton: {
          color: theme.colors.dark[2],
          '&:hover': {
            backgroundColor: theme.colors.dark[6],
          },
        },
      }),
    })
  }
}
