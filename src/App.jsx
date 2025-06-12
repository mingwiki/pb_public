import PocketBase from "pocketbase"
import { useEffect, useState } from "react"
import { Link, Route, Switch } from "wouter"

const pb = new PocketBase("https://zed.ink")

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-serif">
          Zed.Ink
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  )
}
const Users = () => {
  const [records, setRecords] = useState([])
  useEffect(() => {
    const getRecords = async () => {
      const records = await pb.collection("users").getList(1, 50, {})
      setRecords(records.items)
    }

    getRecords()
  }, [])

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Users</h1>
      <ul className="list-disc">
        {records.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.username}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
const Footer = () => {
  const [date, setDate] = useState()

  const getYear = () => setDate(new Date().getFullYear())
  useEffect(() => {
    getYear()
  }, [])
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content">
      <aside>ZED.INK © {date}</aside>
    </footer>
  )
}
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
export const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/">homepage is under development</Route>

        <Route path="/about">About Us</Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/users/:name">
          {(params) => <>Hello, {params.name}!</>}
        </Route>

        <Route>404: No such page!</Route>
      </Switch>
    </Layout>
  )
}
