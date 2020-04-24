/* eslint-disable no-unused-expressions */

import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './lineAreaChart.css';
const moment = require('moment');


const BollingerBands = (props) => {
    useEffect(() => {

        console.log(props)
        drawChart();
    });

    function drawChart() {



    var div = d3.select("body").append("div")
    .attr("class", "dnif_timeline-tooltip")				
    .style("opacity", 0);



 var fables = [
	{
		"current": 192,
		"upper": 159,
		"lower": 125,
		"date": "01-02-20",
		"baseline": 143
	},
	{
		"current": 145,
		"upper": 182,
		"lower": 137,
		"date": "01-03-20",
		"baseline": 159
	},
	{
		"current": 147,
		"upper": 179,
		"lower": 125,
		"date": "01-04-20",
		"baseline": 153
	},
	{
		"current": 188,
		"upper": 160,
		"lower": 127,
		"date": "02-02-20",
		"baseline": 144
	},
	{
		"current": 138,
		"upper": 186,
		"lower": 129,
		"date": "02-03-20",
		"baseline": 159
	},
	{
		"current": 131,
		"upper": 178,
		"lower": 130,
		"date": "02-04-20",
		"baseline": 152
	},
	{
		"current": 195,
		"upper": 161,
		"lower": 130,
		"date": "03-02-20",
		"baseline": 146
	},
	{
		"current": 122,
		"upper": 181,
		"lower": 133,
		"date": "03-03-20",
		"baseline": 158
	},
	{
		"current": 115,
		"upper": 177,
		"lower": 131,
		"date": "03-04-20",
		"baseline": 152
	},
	{
		"current": 189,
		"upper": 166,
		"lower": 124,
		"date": "04-02-20",
		"baseline": 147
	},
	{
		"current": 145,
		"upper": 188,
		"lower": 129,
		"date": "04-03-20",
		"baseline": 158
	},
	{
		"current": 123,
		"upper": 179,
		"lower": 131,
		"date": "04-04-20",
		"baseline": 152
	},
	{
		"current": 188,
		"upper": 172,
		"lower": 129,
		"date": "05-02-20",
		"baseline": 148
	},
	{
		"current": 123,
		"upper": 184,
		"lower": 126,
		"date": "05-03-20",
		"baseline": 157
	},
	{
		"current": 152,
		"upper": 173,
		"lower": 130,
		"date": "05-04-20",
		"baseline": 152
	},
	{
		"current": 141,
		"upper": 160,
		"lower": 114,
		"date": "06-01-20",
		"baseline": 137
	},
	{
		"current": 187,
		"upper": 169,
		"lower": 129,
		"date": "06-02-20",
		"baseline": 149
	},
	{
		"current": 153,
		"upper": 181,
		"lower": 126,
		"date": "06-03-20",
		"baseline": 157
	},
	{
		"current": 148,
		"upper": 178,
		"lower": 126,
		"date": "06-04-20",
		"baseline": 152
	},
	{
		"current": 146,
		"upper": 157,
		"lower": 120,
		"date": "07-01-20",
		"baseline": 138
	},
	{
		"current": 189,
		"upper": 169,
		"lower": 129,
		"date": "07-02-20",
		"baseline": 150
	},
	{
		"current": 143,
		"upper": 180,
		"lower": 131,
		"date": "07-03-20",
		"baseline": 157
	},
	{
		"current": 171,
		"upper": 176,
		"lower": 130,
		"date": "07-04-20",
		"baseline": 152
	},
	{
		"current": 159,
		"upper": 162,
		"lower": 118,
		"date": "08-01-20",
		"baseline": 139
	},
	{
		"current": 177,
		"upper": 174,
		"lower": 127,
		"date": "08-02-20",
		"baseline": 151
	},
	{
		"current": 125,
		"upper": 187,
		"lower": 130,
		"date": "08-03-20",
		"baseline": 157
	},
	{
		"current": 129,
		"upper": 172,
		"lower": 129,
		"date": "08-04-20",
		"baseline": 152
	},
	{
		"current": 138,
		"upper": 157,
		"lower": 119,
		"date": "09-01-20",
		"baseline": 139
	},
	{
		"current": 188,
		"upper": 170,
		"lower": 131,
		"date": "09-02-20",
		"baseline": 151
	},
	{
		"current": 120,
		"upper": 188,
		"lower": 130,
		"date": "09-03-20",
		"baseline": 156
	},
	{
		"current": 122,
		"upper": 177,
		"lower": 130,
		"date": "09-04-20",
		"baseline": 151
	},
	{
		"current": 151,
		"upper": 159,
		"lower": 119,
		"date": "10-01-20",
		"baseline": 140
	},
	{
		"current": 184,
		"upper": 175,
		"lower": 126,
		"date": "10-02-20",
		"baseline": 152
	},
	{
		"current": 128,
		"upper": 186,
		"lower": 125,
		"date": "10-03-20",
		"baseline": 156
	},
	{
		"current": 163,
		"upper": 181,
		"lower": 125,
		"date": "10-04-20",
		"baseline": 151
	},
	{
		"current": 141,
		"upper": 157,
		"lower": 120,
		"date": "11-01-20",
		"baseline": 140
	},
	{
		"current": 202,
		"upper": 176,
		"lower": 127,
		"date": "11-02-20",
		"baseline": 153
	},
	{
		"current": 133,
		"upper": 187,
		"lower": 126,
		"date": "11-03-20",
		"baseline": 155
	},
	{
		"current": 142,
		"upper": 171,
		"lower": 125,
		"date": "11-04-20",
		"baseline": 151
	},
	{
		"current": 155,
		"upper": 159,
		"lower": 121,
		"date": "12-01-20",
		"baseline": 141
	},
	{
		"current": 187,
		"upper": 177,
		"lower": 125,
		"date": "12-02-20",
		"baseline": 154
	},
	{
		"current": 154,
		"upper": 181,
		"lower": 128,
		"date": "12-03-20",
		"baseline": 155
	},
	{
		"current": 139,
		"upper": 179,
		"lower": 128,
		"date": "12-04-20",
		"baseline": 151
	},
	{
		"current": 141,
		"upper": 157,
		"lower": 122,
		"date": "13-01-20",
		"baseline": 141
	},
	{
		"current": 187,
		"upper": 177,
		"lower": 133,
		"date": "13-02-20",
		"baseline": 155
	},
	{
		"current": 145,
		"upper": 178,
		"lower": 129,
		"date": "13-03-20",
		"baseline": 155
	},
	{
		"current": 137,
		"upper": 174,
		"lower": 123,
		"date": "13-04-20",
		"baseline": 151
	},
	{
		"current": 144,
		"upper": 155,
		"lower": 124,
		"date": "14-01-20",
		"baseline": 141
	},
	{
		"current": 188,
		"upper": 176,
		"lower": 132,
		"date": "14-02-20",
		"baseline": 155
	},
	{
		"current": 146,
		"upper": 180,
		"lower": 126,
		"date": "14-03-20",
		"baseline": 155
	},
	{
		"current": 141,
		"upper": 154,
		"lower": 126,
		"date": "15-01-20",
		"baseline": 141
	},
	{
		"current": 189,
		"upper": 182,
		"lower": 128,
		"date": "15-02-20",
		"baseline": 156
	},
	{
		"current": 128,
		"upper": 182,
		"lower": 125,
		"date": "15-03-20",
		"baseline": 155
	},
	{
		"current": 150,
		"upper": 155,
		"lower": 127,
		"date": "16-01-20",
		"baseline": 141
	},
	{
		"current": 189,
		"upper": 180,
		"lower": 131,
		"date": "16-02-20",
		"baseline": 157
	},
	{
		"current": 138,
		"upper": 180,
		"lower": 129,
		"date": "16-03-20",
		"baseline": 155
	},
	{
		"current": 135,
		"upper": 155,
		"lower": 126,
		"date": "17-01-20",
		"baseline": 141
	},
	{
		"current": 186,
		"upper": 179,
		"lower": 137,
		"date": "17-02-20",
		"baseline": 157
	},
	{
		"current": 126,
		"upper": 177,
		"lower": 130,
		"date": "17-03-20",
		"baseline": 154
	},
	{
		"current": 158,
		"upper": 158,
		"lower": 125,
		"date": "18-01-20",
		"baseline": 142
	},
	{
		"current": 184,
		"upper": 179,
		"lower": 135,
		"date": "18-02-20",
		"baseline": 158
	},
	{
		"current": 126,
		"upper": 181,
		"lower": 131,
		"date": "18-03-20",
		"baseline": 154
	},
	{
		"current": 124,
		"upper": 159,
		"lower": 128,
		"date": "19-01-20",
		"baseline": 141
	},
	{
		"current": 197,
		"upper": 186,
		"lower": 129,
		"date": "19-02-20",
		"baseline": 159
	},
	{
		"current": 149,
		"upper": 179,
		"lower": 126,
		"date": "19-03-20",
		"baseline": 154
	},
	{
		"current": 129,
		"upper": 154,
		"lower": 125,
		"date": "20-01-20",
		"baseline": 140
	},
	{
		"current": 190,
		"upper": 185,
		"lower": 131,
		"date": "20-02-20",
		"baseline": 159
	},
	{
		"current": 146,
		"upper": 182,
		"lower": 128,
		"date": "20-03-20",
		"baseline": 154
	},
	{
		"current": 144,
		"upper": 156,
		"lower": 127,
		"date": "21-01-20",
		"baseline": 141
	},
	{
		"current": 188,
		"upper": 186,
		"lower": 136,
		"date": "21-02-20",
		"baseline": 160
	},
	{
		"current": 151,
		"upper": 180,
		"lower": 126,
		"date": "21-03-20",
		"baseline": 154
	},
	{
		"current": 158,
		"upper": 155,
		"lower": 125,
		"date": "22-01-20",
		"baseline": 141
	},
	{
		"current": 189,
		"upper": 190,
		"lower": 137,
		"date": "22-02-20",
		"baseline": 160
	},
	{
		"current": 160,
		"upper": 181,
		"lower": 129,
		"date": "22-03-20",
		"baseline": 154
	},
	{
		"current": 150,
		"upper": 159,
		"lower": 129,
		"date": "23-01-20",
		"baseline": 142
	},
	{
		"current": 186,
		"upper": 191,
		"lower": 136,
		"date": "23-02-20",
		"baseline": 161
	},
	{
		"current": 142,
		"upper": 175,
		"lower": 128,
		"date": "23-03-20",
		"baseline": 153
	},
	{
		"current": 155,
		"upper": 166,
		"lower": 112,
		"date": "23-04-20",
		"baseline": 136
	},
	{
		"current": 146,
		"upper": 159,
		"lower": 128,
		"date": "24-01-20",
		"baseline": 142
	},
	{
		"current": 185,
		"upper": 186,
		"lower": 130,
		"date": "24-02-20",
		"baseline": 161
	},
	{
		"current": 148,
		"upper": 182,
		"lower": 126,
		"date": "24-03-20",
		"baseline": 153
	},
	{
		"current": 157,
		"upper": 156,
		"lower": 128,
		"date": "25-01-20",
		"baseline": 142
	},
	{
		"current": 130,
		"upper": 189,
		"lower": 136,
		"date": "25-02-20",
		"baseline": 160
	},
	{
		"current": 160,
		"upper": 174,
		"lower": 129,
		"date": "25-03-20",
		"baseline": 153
	},
	{
		"current": 138,
		"upper": 155,
		"lower": 130,
		"date": "26-01-20",
		"baseline": 142
	},
	{
		"current": 151,
		"upper": 185,
		"lower": 131,
		"date": "26-02-20",
		"baseline": 160
	},
	{
		"current": 155,
		"upper": 174,
		"lower": 131,
		"date": "26-03-20",
		"baseline": 154
	},
	{
		"current": 128,
		"upper": 159,
		"lower": 124,
		"date": "27-01-20",
		"baseline": 142
	},
	{
		"current": 155,
		"upper": 182,
		"lower": 138,
		"date": "27-02-20",
		"baseline": 160
	},
	{
		"current": 165,
		"upper": 179,
		"lower": 124,
		"date": "27-03-20",
		"baseline": 154
	},
	{
		"current": 156,
		"upper": 159,
		"lower": 125,
		"date": "28-01-20",
		"baseline": 142
	},
	{
		"current": 131,
		"upper": 184,
		"lower": 129,
		"date": "28-02-20",
		"baseline": 160
	},
	{
		"current": 158,
		"upper": 176,
		"lower": 134,
		"date": "28-03-20",
		"baseline": 154
	},
	{
		"current": 138,
		"upper": 155,
		"lower": 126,
		"date": "29-01-20",
		"baseline": 142
	},
	{
		"current": 134,
		"upper": 187,
		"lower": 131,
		"date": "29-02-20",
		"baseline": 159
	},
	{
		"current": 112,
		"upper": 182,
		"lower": 130,
		"date": "29-03-20",
		"baseline": 153
	},
	{
		"current": 162,
		"upper": 160,
		"lower": 130,
		"date": "30-01-20",
		"baseline": 142
	},
	{
		"current": 134,
		"upper": 180,
		"lower": 132,
		"date": "30-03-20",
		"baseline": 153
	},
	{
		"current": 121,
		"upper": 157,
		"lower": 128,
		"date": "31-01-20",
		"baseline": 142
	},
	{
		"current": 126,
		"upper": 181,
		"lower": 126,
		"date": "31-03-20",
		"baseline": 153
	}
]


      
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
      
            var legend = svg.append('g')
              .attr('class', 'legend')
              .attr('transform', 'translate(' + (chartWidth - legendWidth) + ', 0)');
      
            legend.append('rect')
              .attr('class', 'legend-bg')
              .attr('width', legendWidth)
              .attr('height', legendHeight);
      
            legend.append('rect')
              .attr('class', 'outer')
              .attr('width', 75)
              .attr('height', 20)
              .attr('x', 10)
              .attr('y', 10);
      
            legend.append('text')
              .attr('x', 115)
              .attr('y', 25)
              .text('5% - 95%');
      
            legend.append('rect')
              .attr('class', 'inner')
              .attr('width', 75)
              .attr('height', 20)
              .attr('x', 10)
              .attr('y', 40);
      
            legend.append('text')
              .attr('x', 115)
              .attr('y', 55)
              .text('25% - 75%');
      
            legend.append('path')
              .attr('class', 'median-line')
              .attr('d', 'M10,80L85,80');
      
            legend.append('text')
              .attr('x', 115)
              .attr('y', 85)
              .text('Median');
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
      
            // svg.append('path')
            //   .attr('class', 'area upper outer')
            //   .attr('d', upperOuterArea)
            //   .attr('clip-path', 'url(#rect-clip)');
      
            svg.append('path')
              .attr('class', 'area lower outer')
              .attr('d', lowerOuterArea)
              .attr('clip-path', 'url(#rect-clip)');
      
            // svg.append('path')
            //   .attr('class', 'area upper inner')
            //   .attr('d', upperInnerArea)
            //   .attr('clip-path', 'url(#rect-clip)');
      
            // svg.append('path')
            //   .attr('class', 'area lower inner')
            //   .attr('d', lowerInnerArea)
            //   .attr('clip-path', 'url(#rect-clip)');
      
            svg.append('path')
              .attr('class', 'median-line')
              .attr('d', medianLine)
              .attr('clip-path', 'url(#rect-clip)');
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
            rectClip.transition()
              .duration(1000 * markers.length)
              .attr('width', chartWidth);
      
            markers.forEach(function (marker, i) {
              setTimeout(function () {
                addMarker(marker, svg, chartHeight, x);
              }, 1000 + 500 * i);
            });



  


            var y = d3.scaleLinear().range([chartHeight, 0])
            .domain([0, d3.max(data, function (d) { return d.upper; })]);



            var parseDate = d3.timeParse("%Y-%m-%d");
      
        


            svg.selectAll("dot")
            .data(data)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("r",5)
            .attr("cx", function(d) { return x(d.date); })
            .attr("cy", function(d) { return y(d.current); })

            .style('fill', function(d) {
                if(d.current > d.pct75) { return "red"}
                else {return "none"}
            })
  
      
            .on("mouseover", function(d) {		
                div.transition()		
                    .duration(200)		
                    .style("opacity", .9);		
                div.html('user count' + "<br/>"  + d.current)	
                    .style("left", (d3.event.pageX) + "px")		
                    .style("top", (d3.event.pageY - 28) + "px");	
                })					
            .on("mouseout", function(d) {		
                div.transition()		
                    .duration(500)		
                    .style("opacity", 0);	
            });



                

            // gridlines in y axis function
            function make_y_gridlines() {		
                return d3.axisLeft(y)
                    // .ticks(5)
            }


            svg.append("g")			
            .attr("class", "grid")
            .call(make_y_gridlines()
                .tickSize(-chartWidth)
                .tickFormat("")
            )


          }
      
          function makeChart(data, markers) {
            var svgWidth = 960,
              svgHeight = 500,
              margin = { top: 20, right: 20, bottom: 40, left: 40 },
              chartWidth = svgWidth - margin.left - margin.right,
              chartHeight = svgHeight - margin.top - margin.bottom;
      
            // var x = d3.time.scale().range([0, chartWidth])
      
            var x = d3.scaleTime().range([0, chartWidth])
              .domain(d3.extent(data, function (d) { return d.date; })),
              y = d3.scaleLinear().range([chartHeight, 0])
                .domain([0, d3.max(data, function (d) { return d.upper; })]);
      
            // var xAxis = d3.svg.axis().scale(x).orient('bottom')
            var xAxis = d3.axisBottom(x);
              // .tickSize(-chartHeight).outerTickSize(0).tickPadding(10),
      
      
              // yAxis = d3.svg.axis().scale(y).orient('left')
      
              var yAxis = d3.axisLeft(y);
                // .innerTickSize(-chartWidth).outerTickSize(0).tickPadding(10);
      
            var svg = d3.select('body').append('svg')
              .attr('width', svgWidth)
              .attr('height', svgHeight)
              .append('g')
              .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
      
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
      
          // var parseDate = d3.time.format('%Y-%m-%d').parse;
          var parseDate = d3.timeParse("%Y-%m-%d");
      
            
      
            var data = fables.map(function (d) {
              return {
                date: parseDate(d.date),
                lower: d.lower / 1,
                pct25: d.pct25 / 1,
                current: d.current / 1,
                pct75: d.pct75 / 1,
                upper: d.upper / 1
              };
            });
      
              
              var markers = markerData.map(function (marker) {
                return {
                  date: parseDate(marker.date),
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