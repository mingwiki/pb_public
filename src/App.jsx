import { Route, Switch } from "wouter"

function App() {
  return (
    <>
      <Switch>
        <Route path="/">homepage is under development</Route>

        <Route path="/about">About Us</Route>
        <Route path="/users/:name">
          {(params) => <>Hello, {params.name}!</>}
        </Route>

        <Route>404: No such page!</Route>
      </Switch>
    </>
  )
}

export default App
