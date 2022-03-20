import AppLayout from "./components/AppLayout"
import { Route, Routes, Navigate } from "react-router-dom"
import Menu from "./components/Menu"

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Menu />} />
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
