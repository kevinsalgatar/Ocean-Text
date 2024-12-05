import { AppShell } from '@mantine/core'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Messages from './pages/Messages'
import Campaigns from './pages/Campaigns'
import Templates from './pages/Templates'
import Settings from './pages/Settings'

export default function App() {
  return (
    <AppShell
      padding="md"
      navbar={<Navigation />}
      header={<Header />}
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colors.gray[0]
        }
      })}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </AppShell>
  )
}
