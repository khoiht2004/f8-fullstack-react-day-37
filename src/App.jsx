import { BrowserRouter, NavLink, Route, Routes } from "react-router"
import EditAvatar from "./pages/EditAvatar"
import UseRef from "./pages/UseRef"

const styles = {
  link: {
    backgroundColor: "#fef3c6",
    padding: "6px"
  },
  list: {
    padding: "10px"
  }
}


function HomePage() {
  return (
    <>
      <ul>
        <li style={styles.list}>
          <NavLink to="edit-avatar" style={styles.link}>Edit Avatar</NavLink>
        </li>
        <li style={styles.list}>
          <NavLink to="use-ref" style={styles.link}>UseRef</NavLink>
        </li>
      </ul>
    </>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="edit-avatar" element={<EditAvatar />} />
          <Route path="use-ref" element={<UseRef />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
