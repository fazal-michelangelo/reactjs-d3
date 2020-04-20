import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import './timeline.css';
import MyD3Component from './DDDHooksChart';
import TimelineBubble from './timelineBubble';
import LollipopChart from './LollipopChart6';
import PerfectTimeline from './PerfectTimeline';
  
function App() {

    return (

        <div className="App">
            <Router>
                <div>
                    <ul style={{textAlign: 'left'}}>
                        <li>
                            <Link to="/">Force-Directed</Link>
                        </li>
                        <li>
                            <Link to="/about">Timeline-Bubble</Link>
                        </li>
                        <li>
                            <Link to="/lollipop-1">Lollipop-Chart-1</Link>
                        </li>
                        <li>
                            <Link to="/perfect-timeline">Perfect-Timeline</Link>
                        </li>
                    </ul>
                    <hr />
                    <Switch>
                        <Route exact path="/">
                            <MyD3Component />
                        </Route>
                        <Route path="/about">
                            <TimelineBubble />
                        </Route>
                        <Route path="/lollipop-1">
                            <LollipopChart />
                        </Route>
                        <Route path="/perfect-timeline">
                            <PerfectTimeline />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
