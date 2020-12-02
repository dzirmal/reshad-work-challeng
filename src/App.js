import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Planets } from './components'

import GlobalStyle from './globalStyle'
import { Home } from './pages'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/planets' component={Planets} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  )
}

export default App
