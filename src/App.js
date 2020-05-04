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
import LineAreaChart from './LineAreaChart4';

// import lineAreaData from './ip17.json';
// import lineAreaData from './ip19.json';
import lineAreaData from './ip20.json';
import SankeyChart from './SankeyChart';
  
function App() {


    var anyDataVal = [
        {
            color: "red",
            value: "#f00"
        },
        {
            color: "green",
            value: "#0f0"
        },
        {
            color: "blue",
            value: "#00f"
        },
        {
            color: "cyan",
            value: "#0ff"
        },
        {
            color: "magenta",
            value: "#f0f"
        },
        {
            color: "yellow",
            value: "#ff0"
        },
        {
            color: "black",
            value: "#000"
        }
    ];

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
                        <li>
                            <Link to="/sankey-chart">sankey-chart</Link>
                        </li>
                    </ul>
                    <hr />
                    <Switch>
                        <Route exact path="/">
                            <MyD3Component />
                        </Route>
                        <Route exact path="/timeline-bubble">
                            <TimelineBubble />
                        </Route>
                        <Route exact path="/timeline-v1">
                            <LollipopChartV1 />
                        </Route>
                        <Route exact path="/timeline-v2">
                            <LollipopChartV2 />
                        </Route>
                        <Route exact path="/perfect-timeline">
                            <PerfectTimeline />
                        </Route>
                        <Route exact path="/line-area-chart">
                            <LineAreaChart getData={lineAreaData} />
                        </Route>                        
                        <Route path="/sankey-chart">
                            <SankeyChart />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
