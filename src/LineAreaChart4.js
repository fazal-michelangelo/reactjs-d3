/* eslint-disable no-unused-expressions */

import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './lineAreaChart.css';
const moment = require('moment');


const BollingerBands = (props) => {
    useEffect(() => {
        drawChart();
    });

    function drawChart() {



    var div = d3.select("body").append("div")
    .attr("class", "dnif_timeline-tooltip")				
    .style("opacity", 0);

    var fables = props.getData;

      
      var markerData = 
      [
        {
          "date": "2014-08-06",
          "type": "Client",
          "version": "2.0"
        },
        {
          "date": "2014-08-20",
          "type": "Client",
          "version": "2.1"
        },
        {
          "date": "2014-08-27",
          "type": "Server",
          "version": "3.5"
        },
        {
          "date": "2014-09-03",
          "type": "Client",
          "version": "2.2"
        }
      ]
      
      
          function addAxesAndLegend(svg, xAxis, yAxis, margin, chartWidth, chartHeight) {
            var legendWidth = 200,
              legendHeight = 100;
      
            // clipping to make sure nothing appears behind legend
            svg.append('clipPath')
              .attr('id', 'axes-clip')
              .append('polygon')
              .attr('points', (-margin.left) + ',' + (-margin.top) + ' ' +
                (chartWidth - legendWidth - 1) + ',' + (-margin.top) + ' ' +
                (chartWidth - legendWidth - 1) + ',' + legendHeight + ' ' +
                (chartWidth + margin.right) + ',' + legendHeight + ' ' +
                (chartWidth + margin.right) + ',' + (chartHeight + margin.bottom) + ' ' +
                (-margin.left) + ',' + (chartHeight + margin.bottom));
      







            // var y = d3.scaleLinear()
            // .range([chartHeight, 0])
            // .domain([0, d3.max(data, function (d) { return d.upper; })]);
            
    


                

            // // gridlines in y axis function
            // function make_y_gridlines() {		
            //     return d3.axisLeft(y)
            //         // .ticks(5)
            // }


            // svg.append("g")			
            // .attr("class", "grid")
            // .call(make_y_gridlines()
            //     .tickSize(-chartWidth)
            //     .tickFormat("")
            // )





            var axes = svg.append('g')
              .attr('clip-path', 'url(#axes-clip)');
      
            axes.append('g')
              .attr('class', 'x axis')
              .attr('transform', 'translate(0,' + chartHeight + ')')
              .call(xAxis);
      
            axes.append('g')
              .attr('class', 'y axis')
              .call(yAxis)
              .append('text')
              .attr('transform', 'rotate(-90)')
              .attr('y', 6)
              .attr('dy', '.71em')
              .style('text-anchor', 'end')
              // .text('Time (s)');


              svg.append("text")             
      .attr("transform",
            "translate(" + (chartWidth/2) + " ," + 
                           (chartHeight + margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .text("Time");


      svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left*1.5)
      .attr("x",0 - (chartHeight / 2))
      .attr("dy", "1em")
      .style('font-size', '12px')
      .style("text-anchor", "middle")
      .text("Response-Time");      



      
            var legend = svg.append('g')
              .attr('class', 'legend')
              .attr('transform', 'translate(' + (chartWidth - legendWidth) + ', 0)');
      
            legend.append('rect')
              .attr('class', 'legend-bg')
              .attr('width', legendWidth)
              .style('border-radius', '4px')
              .attr('height', 65);
      
            legend.append('rect')
              .attr('class', 'outer')
              .attr('width', 75)
              .attr('height', 10)
              .attr('x', 10)
              .attr('y', 16);
      
            legend.append('text')
              .attr('x', 115)
              .attr('y', 25)
              .text('bound');
      
            // legend.append('rect')
            //   .attr('class', 'inner')
            //   .attr('width', 75)
            //   .attr('height', 20)
            //   .attr('x', 10)
            //   .attr('y', 40);


            legend.append('path')
              .attr('class', 'chart-baseline')
              .attr('d', 'M10,37L85,37');
      
            legend.append('text')
              .attr('x', 115)
              .attr('y', 40)
              .text('baseline');
      
            legend.append('path')
              .attr('class', 'median-line')
              .attr('d', 'M10,52L85,52');
      
            legend.append('text')
              .attr('x', 115)
              .attr('y', 55)
              .text('current');
          }
      
          function drawPaths(svg, data, x, y) {
            var upperOuterArea = d3.area()
              .curve(d3.curveBasis)
              // .interpolate('basis')
              .x(function (d) { return x(d.date) || 1; })
              .y0(function (d) { return y(d.upper); })
              .y1(function (d) { return y(d.pct75); });
      
            var upperInnerArea = d3.area()
              .curve(d3.curveBasis)
              // .interpolate('basis')
              .x(function (d) { return x(d.date) || 1; })
              .y0(function (d) { return y(d.pct75); })
              .y1(function (d) { return y(d.current); });
      
            var medianLine = d3.line()
              .curve(d3.curveLinear)
              // .interpolate('basis')
              .x(function (d) { return x(d.date); })
              .y(function (d) { return y(d.current); });


            var chartBaseline = d3.line()
            .curve(d3.curveLinear)
            // .interpolate('basis')
            .x(function (d) { return x(d.date); })
            .y(function (d) { return y(d.baseline); });
      
            var lowerInnerArea = d3.area()
              .curve(d3.curveBasis)
              // .interpolate('basis')
              .x(function (d) { return x(d.date) || 1; })
              .y0(function (d) { return y(d.current); })
              .y1(function (d) { return y(d.pct25); });
      
            var lowerOuterArea = d3.area()
              .curve(d3.curveLinear)
              // .interpolate('basis')
              .x(function (d) { return x(d.date) || 1; })
              .y0(function (d) { return y(d.upper); })
              .y1(function (d) { return y(d.lower); });
      
            svg.datum(data);
    
            svg.append('path')
              .attr('class', 'area lower outer')
              .attr('d', lowerOuterArea)
              .attr('clip-path', 'url(#rect-clip)');
      

            svg.append('path')
              .attr('class', 'median-line')
              .attr('d', medianLine)
              .attr('clip-path', 'url(#rect-clip)');

            svg.append('path')
            .attr('class', 'chart-baseline')
            .attr('d', chartBaseline)
            .attr('clip-path', 'url(#rect-clip)');

              


              svg.selectAll("dot")
              .data(data)
              .enter().append("circle")
              .attr("class", "dot")
              .attr("r",3.5)
              .attr("cx", function(d) { return x(d.date); })
              .attr("cy", function(d) { return y(d.current); })
  
              .style('fill', function(d) {
                  if(d.current > d.upper) { return "red"}
                  else {return "none"}
              })
            
              .on("mouseover", function(d) {		
                  div.transition()		
                      .duration(200)		
                      .style("opacity", .9);		
                  div.html('Time' + "<br/>"  + d.current + ' ms')	
                      .style("left", (d3.event.pageX) + "px")		
                      .style("top", (d3.event.pageY - 28) + "px");	
                  })					
              .on("mouseout", function(d) {		
                  div.transition()		
                      .duration(500)		
                      .style("opacity", 0);	
              });


          }
      
          function addMarker(marker, svg, chartHeight, x) {
            var radius = 32,
              xPos = x(marker.date) - radius - 3,
              yPosStart = chartHeight - radius - 3,
              yPosEnd = (marker.type === 'Client' ? 80 : 160) + radius - 3;
      
            var markerG = svg.append('g')
              .attr('class', 'marker ' + marker.type.toLowerCase())
              .attr('transform', 'translate(' + xPos + ', ' + yPosStart + ')')
              .attr('opacity', 0);
      
            markerG.transition()
              .duration(1000)
              .attr('transform', 'translate(' + xPos + ', ' + yPosEnd + ')')
              .attr('opacity', 1);
      
            markerG.append('path')
              .attr('d', 'M' + radius + ',' + (chartHeight - yPosStart) + 'L' + radius + ',' + (chartHeight - yPosStart))
              .transition()
              .duration(1000)
              .attr('d', 'M' + radius + ',' + (chartHeight - yPosEnd) + 'L' + radius + ',' + (radius * 2));
      
            markerG.append('circle')
              .attr('class', 'marker-bg')
              .attr('cx', radius)
              .attr('cy', radius)
              .attr('r', radius);
      
            markerG.append('text')
              .attr('x', radius)
              .attr('y', radius * 0.9)
              .text(marker.type);
      
            markerG.append('text')
              .attr('x', radius)
              .attr('y', radius * 1.5)
              .text(marker.version);
          }
      
          function startTransitions(svg, chartWidth, chartHeight, rectClip, markers, x) {
            rectClip
            // .transition()
            //   .duration(1000 * markers.length)
              .attr('width', chartWidth);
      
            markers.forEach(function (marker, i) {
              setTimeout(function () {
                addMarker(marker, svg, chartHeight, x);
              }, 1000 + 500 * i);
            });



  


            var y = d3.scaleLinear()
            .range([chartHeight, 0])
            .domain([0, d3.max(data, function (d) { return d.upper; })]);



            var parseDate = d3.timeParse("%Y-%m-%d");
            
    


                

            // // gridlines in y axis function
            // function make_y_gridlines() {		
            //     return d3.axisLeft(y)
            //         // .ticks(5)
            // }


            // svg.append("g")			
            // .attr("class", "grid")
            // .call(make_y_gridlines()
            //     .tickSize(-chartWidth)
            //     .tickFormat("")
            // )


          }
      
          function makeChart(data, markers) {
            var svgWidth = 960,
              svgHeight = 500,
              margin = { top: 20, right: 20, bottom: 40, left: 40 },
              chartWidth = svgWidth - margin.left - margin.right,
              chartHeight = svgHeight - margin.top - margin.bottom;
      
            // var x = d3.time.scale().range([0, chartWidth])
      
            var x = d3.scaleTime()
            .domain([new Date('2020-04-15T19:00:00.000Z'), new Date('2020-04-24T12:15:00.000Z')])
              .range([0, svgWidth]);
          
          

            // var x = d3.scaleTime().range([0, chartWidth])
            //   .domain(d3.extent(data, function (d) { return d.date; })),

              var y = d3.scaleLinear().range([chartHeight, 0])
                .domain([0, d3.max(data, function (d) { return d.current; })]);
      
            // var xAxis = d3.svg.axis().scale(x).orient('bottom')
            var xAxis = d3.axisBottom(x);
              // .tickSize(-chartHeight).outerTickSize(0).tickPadding(10),
      
      
              // yAxis = d3.svg.axis().scale(y).orient('left')
      
              var yAxis = d3.axisLeft(y)
                .ticks(20)
                .tickFormat(d3.format(".1s"))
                // .tickFormat(d3.formatPrefix(".1", 2e5));
              
                // .innerTickSize(-chartWidth).outerTickSize(0).tickPadding(10);
      
            var svg = d3.select('body').append('svg')
              .attr('width', svgWidth)
              .attr('height', svgHeight)
              .append('g')
              .attr('transform', 'translate(' + margin.left*2 + ',' + margin.top + ')');
      
            // clipping to start chart hidden and slide it in later
            var rectClip = svg.append('clipPath')
              .attr('id', 'rect-clip')
              .append('rect')
              .attr('width', 0)
              .attr('height', chartHeight);
      
            addAxesAndLegend(svg, xAxis, yAxis, margin, chartWidth, chartHeight);
            drawPaths(svg, data, x, y);
            startTransitions(svg, chartWidth, chartHeight, rectClip, markers, x);
          }
      
          var parseDate = d3.timeParse("%Y-%m-%d");
      
            
      



            var data = fables.map(function (d) {
                return {
                  date: new Date(d.date),
                  lower: d.lower / 1,
                  pct25: d.pct25 / 1,
                  current: d.current / 1,
                  baseline: d.baseline / 1,
                  upper: d.upper / 1
                };
              });

              console.log(data);
      
              
              var markers = markerData.map(function (marker) {
                return {
                  date: new Date(marker.date),
                  type: marker.type,
                  version: marker.version
                };
              });
              makeChart(data, markers);
    
    }  

    const d3Container = useRef(null);

    return (
        <div
            className="dnif_line_area-chart"
            width={996}
            height={444}
            ref={d3Container}
        ></div>
    );
}

export default BollingerBands;