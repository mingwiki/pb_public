import { render } from "preact"
import { ErrorBoundary, lazy, LocationProvider, Router } from "preact-iso"
import { Layout } from "./layout"
const Home = lazy(() => import("./pages/home"))
const NotFound = lazy(() => import("./pages/error"))
const Login = lazy(() => import("./pages/login"))
export function App() {
  return (
    <LocationProvider>
      <ErrorBoundary onError={(e) => console.log(e)}>
        <Layout>
          <Router>
            <Home path="/" />
            <Login path="/login" />
            {/* Fallback route for 404 Not Found */}
            <NotFound default />
          </Router>
        </Layout>
      </ErrorBoundary>
    </LocationProvider>
  )
}

render(<App />, document.getElementById("app"))
