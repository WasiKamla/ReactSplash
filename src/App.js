import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Search from "./pages/Search"
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}
export default App
