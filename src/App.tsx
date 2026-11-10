import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { PageShell } from '@/components/layout/PageShell'
import { Contact } from '@/pages/Contact'
import { Cv } from '@/pages/Cv'
import { Home } from '@/pages/Home'
import { Projects } from '@/pages/Projects'
import { WhoAmI } from '@/pages/WhoAmI'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageShell />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="cv" element={<Cv />} />
          <Route path="contact" element={<Contact />} />
          <Route path="who-am-i" element={<WhoAmI />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
