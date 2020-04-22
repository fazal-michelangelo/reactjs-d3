import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { lab } from 'd3';
const moment = require('moment');


const PerfectTimeline = (props) => {
    useEffect(() => {
        drawChart();
    });

    function drawChart() {

        var margin = {top: 20, right: 20, bottom: 90, left: 50},
        margin2 = {top: 230, right: 20, bottom: 30, left: 50},
        width = 960 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom,
        height2 = 300 - margin2.top - margin2.bottom;
    
    var parseTime = d3.timeParse("%Y-%m-%d");
    
    var x = d3.scaleTime().range([0, width]),
        x2 = d3.scaleTime().range([0, width]),
        y = d3.scaleLinear().range([height, 0]),
        y2 = d3.scaleLinear().range([height2, 0]);
    
    var xAxis = d3.axisBottom(x).tickSize(0),
        xAxis2 = d3.axisBottom(x2).tickSize(0),
        yAxis = d3.axisLeft(y).tickSize(0);
    
    var brush = d3.brushX()
        .extent([[0, 0], [width, height]])
        .on("brush", brushed);
    
    var zoom = d3.zoom()
        .scaleExtent([1, Infinity])
        .translateExtent([[0, 0], [width, height]])
        .extent([[0, 0], [width, height]])
        .on("zoom", zoomed);
    
    var svg = d3.select(d3Container.current).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

        
    var div = d3.select("body").append("div")
        .attr("class", "dnif_timeline-tooltip")				
        .style("opacity", 0);
    
    svg.append("defs").append("clipPath")
        .attr("id", "clip")
      .append("rect")
        .attr("width", width)
        .attr("height", height);
    
    var focus = svg.append("g")
        .attr("class", "focus")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    var context = svg.append("g")
        .attr("class", "context")
        .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");


        var count = 'messages_sent_in_day';
        var xLable = 'sent_time';
        var textVal = 'message_id';


        
        var count = 'count';
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

        data.forEach(function(d) {
            d[xLable] = parseTime(d[xLable]);
          });
        
          var xMin = d3.min(data, function(d) { return d[xLable]; });
          var yMax = Math.max(20, d3.max(data, function(d) { return d[count]; }));
        
          x.domain([xMin, new Date()]);
          y.domain([0, yMax]);
          x2.domain(x.domain());
          y2.domain(y.domain());
        
          var num_messages = function(dataArray, domainRange) { return d3.sum(dataArray, function(d) {
            return d[xLable] >= domainRange.domain()[0] && d[xLable] <= domainRange.domain()[1];
            })
          }
        
          // append scatter plot to main chart area
          var messages = focus.selectAll('g').data(data).enter().append("g");

            messages.attr("clip-path", "url(#clip)");


            messages.append("circle")
                .attr('class', 'message')
                .attr('fill-opacity', '0.6')
                .attr("r", 4)
                .attr("cx", function(d) { return x(d[xLable]); })
                .attr("cy", function(d) { return y(d[count]); })


                .on("mouseover", function(d) {		
                    div.transition()		
                        .duration(200)		
                        .style("opacity", .9);		
                    div.html(d['gender'] + "<br/>"  + d[count])	
                        .style("left", (d3.event.pageX) + "px")		
                        .style("top", (d3.event.pageY - 28) + "px");	
                    })					
                .on("mouseout", function(d) {		
                    div.transition()		
                        .duration(500)		
                        .style("opacity", 0);	
                });


        
                messages.append('text')
                .attr('class', 'node-text')
                .text(function(d) {return d[textVal]})
                .attr("x", function (d) { return x(d[xLable])+10 })
                .attr("y", function (d) { return y(d[count]); })
                .style('font-size', '10px')

                
                
                focus.append("g")
                .attr("class", "axis x-axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis2);
        

          focus.append("g")
          .attr("class", "brush")
          .call(brush)




        //   var j = svg.selectAll(".circle-vertical-line")
        //   .data(data)
        // j
        //   .enter()
        //   .append("line")
        //   .attr("class", "circle-vertical-line")
        //   .merge(j)
        //   .attr('transform', 'translate('+margin.left+', '+margin.top+')')
        //     .attr("x1", function(d) { return x(d[xLable]); })
        //     .attr("x2", function(d) { return x(d[xLable]); })
        //     .attr("y1", y(0))
        //     .attr("y2", function(d) { return y(d[count]); })
        //     .attr("stroke", "#000000")
  



        //     .attr("width", width)
        //     .attr("height", height)
                
        //   svg.append("rect")
        //     .attr('fill-opacity', 0)
        //     .attr("class", "zoom")
        //     .attr("width", width)
        //     .attr("height", height)
        //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        //     .call(zoom);
        
          // append scatter plot to brush chart area
        //    var messages = context.append("g");
        //        messages.attr("clip-path", "url(#clip)");
        //        messages.selectAll("message")
        //           .data(data)
        //           .enter().append("circle")
        //           .attr('class', 'messageContext')
        //           .attr("r",3)
        //           .style("opacity", .6)
        //           .attr("cx", function(d) { return x2(d[xLable]); })
        //           .attr("cy", function(d) { return y2(d[count]); })
        
        //   context.append("g")
        //         .attr("class", "axis x-axis")
        //         .attr("transform", "translate(0," + height2 + ")")
        //         .call(xAxis2);
        
        
          
        
        //create brush function redraw scatterplot with selection
        function brushed() {
          if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
          var s = d3.event.selection || x2.range();
          x.domain(s.map(x2.invert, x2));


          focus.selectAll('.node-text')
          .attr("x", function (d) { return x(d[xLable])+10 })
          .attr("y", function (d) { return y(d[count]); })


          svg.selectAll(".circle-vertical-line")
          .attr("x1", function(d) { return x(d[xLable]); })
          .attr("x2", function(d) { return x(d[xLable]); })
          .attr("y1", y(0))
          .attr("y2", function(d) { return y(d[count]); })


          focus.selectAll(".message")
                .attr("cx", function(d) { return x(d[xLable]); })
                .attr("cy", function(d) { return y(d[count]); });
          focus.select(".x-axis").call(xAxis);
          svg.select(".zoom").call(zoom.transform, d3.zoomIdentity
              .scale(width / (s[1] - s[0]))
              .translate(-s[0], 0));
        }
        
        function zoomed() {
          if (d3.event.sourceEvent && d3.event.sourceEvent.type === "brush") return; // ignore zoom-by-brush
          var t = d3.event.transform;
          x.domain(t.rescaleX(x2).domain());



          
          focus.selectAll(".message")
                .attr("cx", function(d) { return x(d[xLable]); })
                .attr("cy", function(d) { return y(d[count]); });
          focus.select(".x-axis").call(xAxis);
          context.select(".brush").call(brush.move, x.range().map(t.invertX, t));
        }

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

export default PerfectTimeline;