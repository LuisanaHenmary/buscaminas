import AppLayout from "./components/AppLayout"
import { Route, Routes, Navigate } from "react-router-dom"
import Menu from "./components/Menu"
import Game from "./components/Game"
import Credits from "./components/Credits"

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Menu />} />
          <Route path="game" element={<Game />} />
          <Route path="credits" element={<Credits />}  />
          <Route
            path="*"
            element={<Navigate
              replace
              to="/"
            />}
          />
        </Route>
      </Routes>

  )
}

export default App
