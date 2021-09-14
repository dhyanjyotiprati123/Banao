import React from 'react'
import "./Style/main.css"
import Home from './Pages/Home'
import { Switch, Route } from 'react-router'
import Timeline from './Pages/Timeline'

const App = () => {
  return (
    <div>
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route exact path="/user">
         <Timeline />
       </Route>
     </Switch>
    </div>
  )
}

export default App
