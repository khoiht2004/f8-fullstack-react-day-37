import { BrowserRouter, NavLink, Route, Routes } from "react-router"
import EditAvatar from "./pages/EditAvatar"
import UseRef from "./pages/UseRef"
import ReactMemo from "./pages/ReactMemo"

const styles = {
  link: {
    backgroundColor: "#fef3c6",
    padding: "6px"
  },
  list: {
    padding: "10px"
  }
}

const links = [
  { path: "edit-avatar", title: "EditAvatar" },
  { path: "use-ref", title: "UseRef" },
  { path: "react-memo", title: "ReactMemo" }
]

function HomePage() {
  return (
    <>
      <ul>
        {links.map((item, index) => {
          return (
            <li key={index} style={styles.list}>
              <NavLink to={item.path} style={styles.link}>{item.title}</NavLink>
            </li>
          )
        })}
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
          <Route path="react-memo" element={<ReactMemo />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
