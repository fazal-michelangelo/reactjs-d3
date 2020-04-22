import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import './timeline.css';
import MyD3Component from './DDDHooksChart';
// import TimelineBubble from './timelineBubble';
import TimelineBubble from './LollipopChart3';
import LollipopChartV1 from './LollipopChart5';
import LollipopChartV2 from './LollipopChart6';
import PerfectTimeline from './PerfectTimeline';
import LineAreaChart from './LineAreaChart';
  
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
                            <Link to="/timeline-bubble">Timeline-Bubble</Link>
                        </li>
                        <li>
                            <Link to="/timeline-v1">Timeline-v1</Link>
                        </li>
                        <li>
                            <Link to="/timeline-v2">Timeline-v2</Link>
                        </li>
                        <li>
                            <Link to="/perfect-timeline">Perfect-timeline</Link>
                        </li>
                        <li>
                            <Link to="/line-area-chart">Line-Area-Chart</Link>
                        </li>
                        {/* <li>
                            <Link to="/sankey-chart">sankey-chart</Link>
                        </li> */}
                    </ul>
                    <hr />
                    <Switch>
                        <Route exact path="/">
                            <MyD3Component />
                        </Route>
                        <Route path="/timeline-bubble">
                            <TimelineBubble />
                        </Route>
                        <Route path="/timeline-v1">
                            <LollipopChartV1 />
                        </Route>
                        <Route path="/timeline-v2">
                            <LollipopChartV2 />
                        </Route>
                        <Route path="/perfect-timeline">
                            <PerfectTimeline />
                        </Route>
                        <Route path="/line-area-chart">
                            <LineAreaChart />
                        </Route>                        
                        {/* <Route path="/perfect-timeline">
                            <SankeyChart />
                        </Route> */}
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
