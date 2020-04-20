import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { lab } from 'd3';
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
        var textVal = 'label';

            
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

        const svg = d3.select(d3Container.current).append("svg").attr('id', 'Chart').attr("width", '100%').attr("height", 500).attr('transform', 'translate(0, 100)');


        var x = d3.scaleBand()
        .domain(data.map(function (d) { return d[xLable]; }))
            .range([0, width])
            .padding(1);

            var xAxis = d3.axisBottom(x)
            .tickValues(x.domain().filter(function(d,i){ return !(i%5)}));


        svg.append("g")
            .attr('id', 'xAxisID')
            .attr("transform", "translate("+margin.left+"," + (height) + ")")
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "start")
            .attr('x', 20)

            d3.selectAll("g.tick line")
            .attr('y2', 20)

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
      .attr("x1", function(d) { return x(d[xLable]); })
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
        .text(function(d) {return d[textVal]})
        .attr("x", function (d) { return x(d[xLable])+10 })
        .attr("y", function (d) { return y(d[dataVar]); })
        .style('font-size', '10px')


        group.append('circle')        
        .attr("cx", function (d) { return x(d[xLable]) })
        .attr("cy", function (d) { return y(d[dataVar]); })
        .attr("r", 7)

        .on('mouseover', function(d) {

            console.log('School of Athens')
            // d3.select(this.parentNode).append('text')                
            //     .attr("x", function (d) { return x(d.group) })
            //     .attr("y", function (d) { return y(d['var1']); })
            //     .text(function(d) { return d[textVal] });
        })


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