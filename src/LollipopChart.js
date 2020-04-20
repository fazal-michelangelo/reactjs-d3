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
                "group": "2010-10-20",
                "count": 12,
                "event": [{'evetType': 'this is the first event'},{'evetType': 'second event is printed here'}],
                "gender": "male",
                "peopleCount": 8,
                "label": "General count for datastructure",
                "description": "Raphael painted school of Athens for POP THE JULIUS SECOND and he was contemprory of michelangelo",
                "severity": 4,
                "color": "#07743a"
            },
            {
                "group": "2011-10-20",
                "count": 1123,
                "event": [{'evetType': 'this is the first event'},{'evetType': 'second event is printed here'}],
                "gender": "male",
                "peopleCount": 8,
                "label": "General count for datastructure",
                "description": "Raphael painted school of Athens for POP THE JULIUS SECOND and he was contemprory of michelangelo",
                "severity": 4,
                "color": "#02402f"
            },
            {
                "group": "2012-10-20",
                "count": 96,
                "event": [{'evetType': 'this is the first event'},{'evetType': 'second event is printed here'}],
                "gender": "male",
                "peopleCount": 8,
                "label": "General count for datastructure",
                "description": "Raphael painted school of Athens for POP THE JULIUS SECOND and he was contemprory of michelangelo",
                "severity": 2,
                "color": "#f1e0f6"
            },
            {
                "group": "2013-10-20",
                "count": 3236,
                "event": [{'evetType': 'this is the first event'},{'evetType': 'second event is printed here'}],
                "gender": "male",
                "peopleCount": 8,
                "label": "General count for datastructure",
                "description": "Raphael painted school of Athens for POP THE JULIUS SECOND and he was contemprory of michelangelo",
                "severity": 3,
                "color": "#fdff3e"
            },
            {
                "group": "2014-10-20",
                "count": 169,
                "event": [{'evetType': 'this is the first event'},{'evetType': 'second event is printed here'}],
                "gender": "female",
                "peopleCount": 2,
                "label": "General count for datastructure",
                "description": "Raphael painted school of Athens for POP THE JULIUS SECOND and he was contemprory of michelangelo",
                "severity": 1,
                "color": "#fded9e"
            },
            {
                "group": "2015-10-20",
                "count": 288,
                "event": [{'evetType': 'this is the first event'},{'evetType': 'second event is printed here'}],
                "gender": "female",
                "peopleCount": 2,
                "label": "General count for datastructure",
                "description": "Raphael painted school of Athens for POP THE JULIUS SECOND and he was contemprory of michelangelo",
                "severity": 1,
                "color": "#f6e8e4"
            },
            {
                "group": "2016-10-20",
                "count": 169,
                "event": [{'evetType': 'this is the first event'},{'evetType': 'second event is printed here'}],
                "gender": "female",
                "peopleCount": 2,
                "label": "General count for datastructure",
                "description": "Raphael painted school of Athens for POP THE JULIUS SECOND and he was contemprory of michelangelo",
                "severity": 1,
                "color": "#cd0000"
            },
            {
                "group": "2017-10-20",
                "count": 99,
                "event": [{'evetType': 'this is the first event'},{'evetType': 'second event is printed here'}],
                "gender": "female",
                "peopleCount": 2,
                "label": "General count for datastructure",
                "description": "Raphael painted school of Athens for POP THE JULIUS SECOND and he was contemprory of michelangelo",
                "severity": 1,
                "color": "#f6eaba"
            },
            {
                "group": "2018-10-20",
                "count": 15,
                "event": [{'evetType': 'this is the first event'},{'evetType': 'second event is printed here'}],
                "gender": "female",
                "peopleCount": 2,
                "label": "General count for datastructure",
                "description": "Raphael painted school of Athens for POP THE JULIUS SECOND and he was contemprory of michelangelo",
                "severity": 1,
                "color": "#ffcd94"
            },
            {
                "group": "2019-10-20",
                "count": 2169,
                "event": [{'evetType': 'this is the first event'},{'evetType': 'second event is printed here'}],
                "gender": "female",
                "peopleCount": 2,
                "label": "General count for datastructure",
                "description": "Raphael painted school of Athens for POP THE JULIUS SECOND and he was contemprory of michelangelo",
                "severity": 1,
                "color": "#fba34b"
            },
        ];




        function compare(a, b) {
            const bandA = a.count;
            const bandB = b.count;
          
            let comparison = 0;
            if (bandA > bandB) {
              comparison = -1;
            } else if (bandA < bandB) {
              comparison = 1;
            }
            return comparison;
          }
          
        //   console.log(data.sort(compare));



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


        d3.select('#toggleAxis').on('click',function() {
            toggleAxisBoolean = !toggleAxisBoolean
            if(toggleAxisBoolean) {
                d3.select('#xAxisID').style('display', 'block');
            } else {
                d3.select('#xAxisID').style('display', 'none');
            }
        })

        var x = d3.scaleBand()
        .domain(data.map(function (d) { return d.group; }))
            .range([0, width])
            .padding(1);
        var xAxis = svg.append("g")
            .attr("transform", "translate(0," + height + ")")

        var xAxisVar = d3.scaleBand()
            .domain(['01-2010', '04-2012', '08-2018', '12-2020'])
            .range([0, width]);

        var xAxis = d3.axisBottom(x)
  .tickValues(x.domain().filter(function(d,i){ return !(i%5)}));

        svg.append("g")
            .attr('id', 'xAxisID')
            .attr("transform", "translate("+margin.left+"," + (height) + ")")
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "start")
            .attr('x', 10)
            .style('display', 'block' )


        var y = d3.scaleLinear()
            .range([height, 0]);
        var yAxis = svg.append("g")
        .attr('transform', 'translate(' + margin.left + ' , 0)')

        let count_only = [];

        for(var i = 0; i < data.length; i++) {
            count_only.push(data[i].count)
        }

        var max_count = d3.max(d3.values(count_only));
        var radius = d3.scaleSqrt()
            .domain([0, max_count])
            .range([3, 64]);




        var circleGroup = svg.selectAll("circle")
            .data(data)

        circleGroup
            .enter()
            .append('g')
            .append("circle")
            // .attr('fill-opacity', 0.5)
            .attr('class', function (data) { return ('circle-category circle-' + data.count) })
            .attr('id', function (data) {
                return 'circle-' + data.id
            })

            .on('mouseover', function (d, i) {
                d3.select(this)
                .attr("r", function (d) { return radius(d.count) + 20 })
                .attr('fill-opacity', 1)
                
                d3.select(this.parentNode).append('text')                
                .attr("x", function (d) { return x(d.group) })
                .attr("y", function (d) { return y(d['count']) })
                .text(function(d) { return d['count'] });

                d3.select("#xAxisVerticalLine"+i).style("display", "block");

            })

            .on('mouseout', function (d, i) {
                d3.select(this)
                .attr("r", function (d) { return radius(d.count)})
                .attr('fill-opacity', 0.5)

                d3.select(this.parentNode).select('text').remove();

                d3.select("#xAxisVerticalLine"+i).style("display", "none");
            })

            .merge(circleGroup)
            .transition()
            .attr('transform', 'translate('+ margin.left +', -80)')
            .duration(1000)
            .attr("cx", function (d) { return x(d.group) })
            .attr("cy", function (d) { return y(0) })

            .attr("r", function (d) {
                return radius(d.count)
            })

            .style("fill", function (d) {
                return d.color;
            })
            // .style("fill", function (d) {
            //     return d.count ? color(d.count) : undefined;
            // })

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
        .attr("x1", function(d) { console.log(x(d.group)) ; return x(d.group); })
        .attr("x2", function(d) { return x(d.group); })
        .attr("y1", y(0))
        .attr("y2", function(d) { return y(d['count']); })
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