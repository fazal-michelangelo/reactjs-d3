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

        var data = [
            {
                "timestamp": "2010-10-20",
                "count": 12,
                "event": [{'evetType': 'this is the first event'},{'evetType': 'second event is printed here'}],
                "gender": "male",
                "peopleCount": 8,
                "label": "General count for datastructure",
                "description": "Raphael painted school of Athens for POP THE JULIUS SECOND and he was contemprory of michelangelo",
                "severity": 4
            },
            {
                "timestamp": "2011-10-20",
                "count": 1123,
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
                "count": 3236,
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
                "count": 2169,
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

        let toggleAxisBoolean = true;
        let axisDisplay = 'block';

        svg.append('text')
        .attr('id', 'toggleAxis')
        .text('Toggle Axis')
        .attr('transform', 'translate(100, 100)')

        // svg.append("svg")
        //     .attr("width", width + margin.left + margin.right)
        //     .attr("height", height + margin.top + margin.bottom)
        //     .attr('fill', '#0000ff')
        //     .append("g")
        //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        d3.select('#toggleAxis').on('click',function() {
            toggleAxisBoolean = !toggleAxisBoolean
            if(toggleAxisBoolean) {
                d3.select('#xAxisID').style('display', 'block');
            } else {
                d3.select('#xAxisID').style('display', 'none');
            }
        })


//         var svg = d3.select("body")
//   .append("svg")
//   .attr("width", 500)
//   .attr("height", 100);

// var data = d3.range(200);

// var xScale = d3.scaleBand()
//   .domain(data.map(function(d){ return d}))
//   .range([10, 490]);

// var xAxis = d3.axisBottom(xScale)
//   .tickValues(xScale.domain().filter(function(d,i){ return !(i%10)}));

// var gX = svg.append("g").call(xAxis);


        var x = d3.scaleBand()
        .domain(data.map(function (d) { return d.timestamp; }))
            .range([0, width])
            .padding(1);
        var xAxis = svg.append("g")
            .attr("transform", "translate(0," + height + ")")

        var xAxisVar = d3.scaleBand()
            .domain(['01-2010', '04-2012', '08-2018', '12-2020'])
            .range([0, width]);

        // x.domain(data.map(function (d) { return d.timestamp; }))

        var xAxis = d3.axisBottom(x)
  .tickValues(x.domain().filter(function(d,i){ return !(i%5)}));

        svg.append("g")
            .attr('id', 'xAxisID')
            .attr("transform", "translate("+margin.left+"," + (height) + ")")
            .call(xAxis)
            // .call(d3.axisBottom(x).ticks(5))
            // .call(d3.axisBottom(x).ticks(5))
            .selectAll("text")
            // .attr("transform", "translate(-10,20)rotate(-90)")
            .style("text-anchor", "start")
            .attr('x', 10)
            .style('display', 'block' )


        var y = d3.scaleLinear()
            .range([height, 0]);
        var yAxis = svg.append("g")
        .attr('transform', 'translate(' + margin.left + ' , 0)')

        y.domain([0, d3.max(data, function (d) { return +d['count']*1.2 })]);
        yAxis.transition().duration(1000)
        .call(d3.axisLeft(y))
        .style('display', 'none');


        let count_only = [];

        for(var i = 0; i < data.length; i++) {
            count_only.push(data[i].count)
        }

        var max_count = d3.max(d3.values(count_only));
        var radius = d3.scaleSqrt()
            .domain([0, max_count])
            .range([3, 64]);




        var u = svg.selectAll("circle")
            .data(data)

        u
            .enter()
            .append('g')
            .append("circle")
            .attr('fill-opacity', 0.5)
            .attr('class', function (data) { return ('circle-category circle-' + data.count) })
            .attr('id', function (data) {
                return 'circle-' + data.id
            })

            .on('mouseover', function (d, i) {
                d3.select(this)
                .attr("r", function (d) { return radius(d.count) + 20 })
                .attr('fill-opacity', 1)
                
                d3.select(this.parentNode).append('text')                
                .attr("x", function (d) { return x(d.timestamp) })
                .attr("y", function (d) { return y(d['count']) })
                .text(function(d) { return d['count'] });

                // d3.select('#'+d.g)
                // d3.select("#04-2013")
                // .style('display', 'none')

                d3.select("#xAxisVerticalLine"+i).style("display", "block");

            })

            .on('mouseout', function (d, i) {
                d3.select(this)
                .attr("r", function (d) { return radius(d.count)})
                .attr('fill-opacity', 0.5)

                d3.select(this.parentNode).select('text').remove();

                d3.select("#xAxisVerticalLine"+i).style("display", "none");
            })

            .merge(u)
            .transition()
            .attr('transform', 'translate('+ margin.left +', -80)')
            .duration(1000)
            .attr("cx", function (d) { return x(d.timestamp) })
            .attr("cy", function (d) { return y(0) })


            .attr("r", function (d) {
                return radius(d.count)
            })

            // .attr("r", function (d) { return Math.round((Math.pow(d['count'], 1)) * Math.PI / 2) })

            .style("fill", function (d) {
                return d.count ? color(d.count) : undefined;
            })

            d3.selectAll("g.tick line")
            .attr('y2', 20)


    var j = svg.selectAll(".myLine")
      .data(data)
    j
      .enter()
      .append("line")
      .attr('id', function(d, i) {return "xAxisVerticalLine"+i})
      .attr("class", "myLine")
      .merge(j)
      .transition()
      .attr('transform', 'translate('+margin.left+', 0)')
      .duration(1000)
        .attr("x1", function(d) { console.log(x(d.timestamp)) ; return x(d.timestamp); })
        .attr("x2", function(d) { return x(d.timestamp); })
        .attr("y1", y(0))
        .attr("y2", function(d) { return y(200) })
        // .attr("y2", function(d) { return y(d['count']); })
        .attr("stroke", "grey")
        .style('display', 'none')


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