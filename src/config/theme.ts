import { createTheme } from '@mantine/core'

export const theme = createTheme({
  colors: {
    dark: [
      '#C1C2C5',
      '#A6A7AB',
      '#909296',
      '#5C5F66',
      '#373A40',
      '#2C2E33',
      '#25262B',
      '#1A1B1E',
      '#141517',
      '#101113',
    ],
    cyberpink: [
      '#FFE0F0',
      '#FFB8E2',
      '#FF7AC6',
      '#FF2EA6',
      '#FF0090',
      '#DB007A',
      '#B70066',
      '#960054',
      '#750041',
      '#5C0033',
    ],
    neonblue: [
      '#E0F0FF',
      '#B8E2FF',
      '#7AC6FF',
      '#2EA6FF',
      '#0090FF',
      '#007ADB',
      '#0066B7',
      '#005496',
      '#004175',
      '#00335C',
    ],
  },
  primaryColor: 'cyberpink',
  defaultGradient: {
    from: 'cyberpink.4',
    to: 'neonblue.4',
    deg: 45,
  }
})
