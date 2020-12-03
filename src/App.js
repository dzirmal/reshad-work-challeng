import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Films, Navbar, People, Planets, ScrollToTop } from './components'

import GlobalStyle from './globalStyle'
import { Home } from './pages'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/planets' component={Planets} />
        <Route path='/films' component={Films} />
        <Route path='/people' component={People} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  )
}

export default App
