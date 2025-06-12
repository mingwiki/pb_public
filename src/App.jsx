import { useEffect, useState } from "react"
import { Link, Route, Switch } from "wouter"

const PublicLayout = ({ children }) => {
  const [date, setDate] = useState()

  const getYear = () => setDate(new Date().getFullYear())
  useEffect(() => {
    getYear()
  }, [])
  return (
    <div className="flex flex-col min-h-screen">
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
      <div className="flex-1">{children}</div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content">
        <aside>ZED.INK © {date}</aside>
      </footer>
    </div>
  )
}
export const App = () => {
  return (
    <>
      <Switch>
        <Route path="/">
          <PublicLayout>homepage is under development</PublicLayout>
        </Route>

        <Route path="/about">
          <PublicLayout>About Us</PublicLayout>
        </Route>
        <Route path="/users/:name">
          <PublicLayout> {(params) => <>Hello, {params.name}!</>}</PublicLayout>
        </Route>

        <Route>
          <PublicLayout>404: No such page!</PublicLayout>
        </Route>
      </Switch>
    </>
  )
}
