import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
const moment = require('moment');


const LollipopChart = (props) => {
    useEffect(() => {
        drawChart();
    });

    function drawChart() {

        var margin = { top: 30, right: 30, bottom: 70, left: 60 },
            width = 460 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;


        var dataVar = 'count';
        var xLable = 'timestamp';

            
        var data = [
            {
                "timestamp": "2010-10-20",
                "count": 62,
                "event": [{'evetType': 'this is the first event'},{'evetType': 'second event is printed here'}],
                "gender": "male",
                "peopleCount": 8,
                "label": "General count for datastructure",
                "description": "Raphael painted school of Athens for POP THE JULIUS SECOND and he was contemprory of michelangelo",
                "severity": 4
            },
            {
                "timestamp": "2011-10-20",
                "count": 123,
                "event": [{'evetType': 'this is the first event'},{'evetType': 'second event is printed here'}],
                "gender": "male",
                "peopleCount": 8,
                "label": "General count for datastructure",
                "description": "Raphael painted school of Athens for POP THE JULIUS SECOND and he was contemprory of michelangelo",
                "severity": 4
            },
            {
                "timestamp": "2012-10-20",
                "count": 96,
                "event": [{'evetType': 'this is the first event'},{'evetType': 'second event is printed here'}],
                "gender": "male",
                "peopleCount": 8,
                "label": "General count for datastructure",
                "description": "Raphael painted school of Athens for POP THE JULIUS SECOND and he was contemprory of michelangelo",
                "severity": 2
            },
            {
                "timestamp": "2013-10-20",
                "count": 336,
                "event": [{'evetType': 'this is the first event'},{'evetType': 'second event is printed here'}],
                "gender": "male",
                "peopleCount": 8,
                "label": "General count for datastructure",
                "description": "Raphael painted school of Athens for POP THE JULIUS SECOND and he was contemprory of michelangelo",
                "severity": 3
            },
            {
                "timestamp": "2014-10-20",
                "count": 169,
                "event": [{'evetType': 'this is the first event'},{'evetType': 'second event is printed here'}],
                "gender": "female",
                "peopleCount": 2,
                "label": "General count for datastructure",
                "description": "Raphael painted school of Athens for POP THE JULIUS SECOND and he was contemprory of michelangelo",
                "severity": 1
            },
            {
                "timestamp": "2015-10-20",
                "count": 288,
                "event": [{'evetType': 'this is the first event'},{'evetType': 'second event is printed here'}],
                "gender": "female",
                "peopleCount": 2,
                "label": "General count for datastructure",
                "description": "Raphael painted school of Athens for POP THE JULIUS SECOND and he was contemprory of michelangelo",
                "severity": 1
            },
            {
                "timestamp": "2016-10-20",
                "count": 169,
                "event": [{'evetType': 'this is the first event'},{'evetType': 'second event is printed here'}],
                "gender": "female",
                "peopleCount": 2,
                "label": "General count for datastructure",
                "description": "Raphael painted school of Athens for POP THE JULIUS SECOND and he was contemprory of michelangelo",
                "severity": 1
            },
            {
                "timestamp": "2017-10-20",
                "count": 99,
                "event": [{'evetType': 'this is the first event'},{'evetType': 'second event is printed here'}],
                "gender": "female",
                "peopleCount": 2,
                "label": "General count for datastructure",
                "description": "Raphael painted school of Athens for POP THE JULIUS SECOND and he was contemprory of michelangelo",
                "severity": 1
            },
            {
                "timestamp": "2018-10-20",
                "count": 15,
                "event": [{'evetType': 'this is the first event'},{'evetType': 'second event is printed here'}],
                "gender": "female",
                "peopleCount": 2,
                "label": "General count for datastructure",
                "description": "Raphael painted school of Athens for POP THE JULIUS SECOND and he was contemprory of michelangelo",
                "severity": 1
            },
            {
                "timestamp": "2019-10-20",
                "count": 210,
                "event": [{'evetType': 'this is the first event'},{'evetType': 'second event is printed here'}],
                "gender": "female",
                "peopleCount": 2,
                "label": "General count for datastructure",
                "description": "Raphael painted school of Athens for POP THE JULIUS SECOND and he was contemprory of michelangelo",
                "severity": 1
            },
        ];

        var empArr = [2, 4, 6, 8, 10, 12, 18, 24];
        var color = d3.scaleThreshold()
            .domain(empArr)
            .range(["#bdbdbd", "#9eaeba", "#3f80b2", "#2f79b0", "#106aad", "#0062ac"]);
            // .range(["#bdbdbd", "#9eaeba", "#7e9fb7", "#5e90b4", "#4f88b3", "#3f80b2", "#2f79b0", "#106aad", "#0062ac"]);


        const svg = d3.select(d3Container.current).append("svg").attr('id', 'Chart').attr("width", '100%').attr("height", 500).attr('transform', 'translate(0, 100)');

        // svg.append("svg")
        //     .attr("width", width + margin.left + margin.right)
        //     .attr("height", height + margin.top + margin.bottom)
        //     .attr('fill', '#0000ff')
        //     .append("g")
        //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scaleBand()
            .range([0, width])
            .padding(1);
        var xAxis = svg.append("g")
            .attr("transform", "translate(0," + height + ")")

        var xAxisVar = d3.scaleBand()
            .domain(['a', 'b', 'c', 'd', 'e'])
            .range([0, width]);

        x.domain(data.map(function (d) { return d[xLable]; }))

        svg.append("g")
            .attr('id', 'xAxisID')
            .attr("transform", "translate("+margin.left+"," + (height) + ")")
            .call(d3.axisBottom(xAxisVar).ticks(5))
            .selectAll("text")
            .attr("transform", "translate(-10,20)rotate(-45)")
            // .style("text-anchor", "end");


        var y = d3.scaleLinear()
            .range([height, 0]);
        var yAxis = svg.append("g")
        .attr('transform', 'translate(' + margin.left + ' , 0)')

        y.domain([0, d3.max(data, function (d) { return +d[dataVar]*1.2 })]);
        yAxis.transition().duration(1000)
        .call(d3.axisLeft(y))
        // .style('display', 'none');




    var j = svg.selectAll(".myLine")
    .data(data)
  j
    .enter()
    .append("line")
    .attr("class", "myLine")
    .merge(j)
    .transition()
    .attr('transform', 'translate('+margin.left+', 0)')
    .duration(1000)
      .attr("x1", function(d) { console.log(x(d.xLable)) ; return x(d[xLable]); })
      .attr("x2", function(d) { return x(d[xLable]); })
      .attr("y1", y(0))
      .attr("y2", function(d) { return y(d[dataVar]); })
      .attr("stroke", "grey")




        let bubbleGroup = svg.append('g').attr('id', 'bubble-group')


        bubbleGroup.transition()
        .attr('transform', 'translate('+ margin.left +', 0)')
        
        // data(data);

        let group = bubbleGroup.selectAll('g')
        .data(data)
        .enter()
        .append('g')


        group.append('text')
        .text('honey singh')
        .attr("x", function (d) { return x(d[xLable])+10 })
        .attr("y", function (d) { return y(d[dataVar]); })
        .style('font-size', '10px')


        group.append('circle')        
        .attr("cx", function (d) { return x(d[xLable]) })
        .attr("cy", function (d) { return y(d[dataVar]); })
        .attr("r", 7)


    }

    const d3Container = useRef(null);

    return (
        <div
            className="d3-lollipop-chart"
            width={996}
            height={444}
            ref={d3Container}
        ></div>
    );
}

export default LollipopChart;