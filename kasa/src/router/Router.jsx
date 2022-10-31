import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home, APropos, FicheLogement, NotFound } from '../pages'

function Router () {
  return (
    <React.StrictMode>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/APropos" element={<APropos />} />
        <Route
          exact
          path="/FicheLogement/:logementId"
          element={<FicheLogement />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.StrictMode>
  )
}
export default Router
