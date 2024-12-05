'use client'

import { Modal, ModalProps } from '@mantine/core'

interface BaseModalProps extends Omit<ModalProps, 'opened'> {
  isOpen: boolean
  onClose: () => void
}

export function BaseModal({ 
  isOpen, 
  onClose, 
  title, 
  children,
  size = 'lg',
  ...props 
}: BaseModalProps) {
  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      title={title}
      size={size}
      centered
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      styles={{
        title: {
          color: 'var(--mantine-color-dark-0)',
          fontWeight: 600,
        },
        header: {
          backgroundColor: 'var(--mantine-color-dark-7)',
        },
        body: {
          backgroundColor: 'var(--mantine-color-dark-7)',
        },
      }}
      {...props}
    >
      {children}
    </Modal>
  )
}
