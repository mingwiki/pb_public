import { render } from "preact"
import { ErrorBoundary, lazy, LocationProvider, Router } from "preact-iso"
import { Layout } from "./layout"
const Home = lazy(() => import("./pages/home"))
const NotFound = lazy(() => import("./pages/error"))

export function App() {
  return (
    <LocationProvider>
      <ErrorBoundary onError={(e) => console.log(e)}>
        <Layout>
          <Router>
            <Home path="/" />
            <NotFound default />
          </Router>
        </Layout>
      </ErrorBoundary>
    </LocationProvider>
  )
}

render(<App />, document.getElementById("app"))
