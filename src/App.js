import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Films, Home, People, Planets } from './pages'
import { Navbar } from './components'
import ScrollToTop from './helpers/ScrollToTop'

import GlobalStyle from './helpers/globalStyle'

function App() {
  return (
    <>
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
    </>
  )
}

export default App
