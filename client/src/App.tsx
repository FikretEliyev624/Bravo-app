import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import AIRecommendationPage from './pages/AIRecommendationPage'
import CouponsPage from './pages/CouponsPage'
import HomePage from './pages/HomePage'
import MorePage from './pages/MorePage'

function ComingSoonPage() {
  return <div className="coming-soon">Tezlikle...</div>
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai" element={<AIRecommendationPage />} />
          <Route path="/coupons" element={<CouponsPage />} />
          <Route path="/more" element={<MorePage />} />
          <Route path="/campaigns" element={<ComingSoonPage />} />
          <Route path="*" element={<ComingSoonPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}
