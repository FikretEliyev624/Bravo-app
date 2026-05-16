import type { PropsWithChildren } from 'react'
import BottomNav from './BottomNav'
import Header from './Header'

export default function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-shell__main">{children}</main>
      <BottomNav />
    </div>
  )
}
