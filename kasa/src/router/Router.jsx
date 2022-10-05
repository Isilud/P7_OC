import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home, APropos, FicheLogement, NotFound } from '../pages'

function Router () {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route exact path="/1" element={<Home />} />
          <Route exact path="/2" element={<APropos />} />
          <Route exact path="/3" element={<FicheLogement />} />
          <Route exact path="/" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}
export default Router
