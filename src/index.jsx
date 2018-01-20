import React from 'react'
import { render } from 'react-dom'
import { hashHistory, Router, Route, IndexRoute } from 'react-router'
import Root from './root.jsx'
import { Home, About, Works, Robots, Vanilla, VanillaSkeleton, Others, Tools, Society, WheelRobot } from './routes.jsx'

render((
  <Router history={hashHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="works" component={Works}/>
      <Route path="robots" component={Robots}/>
      <Route path="vanilla" component={Vanilla}/>
      <Route path="vanilla_skeleton" component={VanillaSkeleton}/>
      <Route path="wheel_robot" component={WheelRobot}/>
      <Route path="tools" component={Tools}/>
      <Route path="society" component={Society}/>
      <Route path="others" component={Others}/>
    </Route>
  </Router>
),
  document.getElementById("root-element")
);
