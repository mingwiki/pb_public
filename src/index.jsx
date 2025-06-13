import { render } from "preact";
import { LocationProvider, Router } from "preact-iso";
import { Home } from "./pages/public";
export function App() {
  return (
    <LocationProvider>
      <main>
        <Router>
          <Home path="/" />
          <Home default />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
