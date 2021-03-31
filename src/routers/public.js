import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import LoginComponent from "../components/Login/index"

const PublicRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginComponent} />
        <Route path="/login" component={LoginComponent} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default PublicRouter;