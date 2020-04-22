/* eslint-disable no-unused-expressions */

import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { lab } from 'd3';
const moment = require('moment');


const BollingerBands = (props) => {
    useEffect(() => {
        drawChart();
    });

    function drawChart() {

        var margin = { top: 20, right: 20, bottom: 30, left: 50 },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
  
    var n = 20; // n-period of moving average
    var k = 2;  // k times n-period standard deviation above/below moving average
  
    var parseDate = d3.timeParse("%m/%d/%Y");

    var x = d3.scaleTime()
            .range([0, width]);


    var y = d3.scaleLinear()
            .range([height, 0]);


            // var xAxis = d3.axisBottom(x).tickSize(0),
            // xAxis2 = d3.axisBottom(x2).tickSize(0),
            // yAxis = d3.axisLeft(y).tickSize(0);

            
    var xAxis = d3.axisBottom(x);

    // var xAxis = d3.svg.axis()
    //         .scale(x)
    //         .orient("bottom");

    // var yAxis = d3.svg.axis()
    //         .scale(y)
    //         .orient("left")
    //         .tickSize(3, 0);

    var yAxis = d3.axisLeft(y).tickSize(3);
    var line = d3.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.close); });
    var ma = d3.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.ma); });
    var lowBand = d3.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.low); });
    var highBand = d3.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.high); });
    var bandsArea = d3.area()
            .x(function(d) { return x(d.date); })
            .y0(function(d) { return y(d.low); })
            .y1(function(d) { return y(d.high); });
  
    var svg = d3.select("body").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
    // d3.csv("data.csv", function(error, data) {

var testData = 

        [
            {
              "date": "9/13/2012",
              "close": 177.35
            },
            {
              "date": "9/14/2012",
              "close": 175.85
            },
            {
              "date": "9/17/2012",
              "close": 173.65
            },
            {
              "date": "9/18/2012",
              "close": 175.4
            },
            {
              "date": "9/19/2012",
              "close": 174.45
            },
            {
              "date": "9/20/2012",
              "close": 175
            },
            {
              "date": "9/21/2012",
              "close": 178.45
            },
            {
              "date": "9/24/2012",
              "close": 178
            },
            {
              "date": "9/25/2012",
              "close": 178.85
            },
            {
              "date": "9/26/2012",
              "close": 177.4
            },
            {
              "date": "9/27/2012",
              "close": 176.9
            },
            {
              "date": "9/28/2012",
              "close": 175.75
            },
            {
              "date": "10/1/2012",
              "close": 176.35
            },
            {
              "date": "10/2/2012",
              "close": 176
            },
            {
              "date": "10/3/2012",
              "close": 177.5
            },
            {
              "date": "10/4/2012",
              "close": 178
            },
            {
              "date": "10/5/2012",
              "close": 180.65
            },
            {
              "date": "10/8/2012",
              "close": 180.35
            },
            {
              "date": "10/9/2012",
              "close": 179.35
            },
            {
              "date": "10/10/2012",
              "close": 178.05
            },
            {
              "date": "10/11/2012",
              "close": 178.35
            },
            {
              "date": "10/12/2012",
              "close": 174.8
            },
            {
              "date": "10/15/2012",
              "close": 173.3
            },
            {
              "date": "10/16/2012",
              "close": 173
            },
            {
              "date": "10/17/2012",
              "close": 174.75
            },
            {
              "date": "10/18/2012",
              "close": 176.8
            },
            {
              "date": "10/19/2012",
              "close": 177.5
            },
            {
              "date": "10/22/2012",
              "close": 177.05
            },
            {
              "date": "10/23/2012",
              "close": 175
            },
            {
              "date": "10/24/2012",
              "close": 172.45
            },
            {
              "date": "10/25/2012",
              "close": 170.65
            },
            {
              "date": "10/26/2012",
              "close": 169.7
            },
            {
              "date": "10/29/2012",
              "close": 169.55
            },
            {
              "date": "10/30/2012",
              "close": 171.05
            },
            {
              "date": "10/31/2012",
              "close": 168.25
            },
            {
              "date": "11/1/2012",
              "close": 170
            },
            {
              "date": "11/2/2012",
              "close": 168.2
            },
            {
              "date": "11/5/2012",
              "close": 167.45
            },
            {
              "date": "11/6/2012",
              "close": 169
            },
            {
              "date": "11/7/2012",
              "close": 167.7
            },
            {
              "date": "11/8/2012",
              "close": 167.6
            },
            {
              "date": "11/9/2012",
              "close": 167.6
            },
            {
              "date": "11/12/2012",
              "close": 166.6
            },
            {
              "date": "11/13/2012",
              "close": 162.5
            },
            {
              "date": "11/14/2012",
              "close": 160.9
            },
            {
              "date": "11/15/2012",
              "close": 159.15
            },
            {
              "date": "11/16/2012",
              "close": 157.8
            },
            {
              "date": "11/19/2012",
              "close": 160.5
            },
            {
              "date": "11/20/2012",
              "close": 162.3
            },
            {
              "date": "11/21/2012",
              "close": 159.15
            },
            {
              "date": "11/22/2012",
              "close": 158.3
            },
            {
              "date": "11/23/2012",
              "close": 158.7
            },
            {
              "date": "11/26/2012",
              "close": 157.65
            },
            {
              "date": "11/27/2012",
              "close": 156.9
            },
            {
              "date": "11/28/2012",
              "close": 158.25
            },
            {
              "date": "11/29/2012",
              "close": 160.3
            },
            {
              "date": "11/30/2012",
              "close": 161.15
            },
            {
              "date": "12/3/2012",
              "close": 160.9
            },
            {
              "date": "12/4/2012",
              "close": 159.55
            },
            {
              "date": "12/5/2012",
              "close": 159.35
            },
            {
              "date": "12/6/2012",
              "close": 161.45
            },
            {
              "date": "12/7/2012",
              "close": 161.85
            },
            {
              "date": "12/10/2012",
              "close": 161.55
            },
            {
              "date": "12/11/2012",
              "close": 161.3
            },
            {
              "date": "12/12/2012",
              "close": 161.55
            },
            {
              "date": "12/13/2012",
              "close": 162.5
            },
            {
              "date": "12/14/2012",
              "close": 160.95
            },
            {
              "date": "12/17/2012",
              "close": 158.2
            },
            {
              "date": "12/18/2012",
              "close": 156.25
            },
            {
              "date": "12/19/2012",
              "close": 156.65
            },
            {
              "date": "12/20/2012",
              "close": 155.8
            },
            {
              "date": "12/21/2012",
              "close": 155.6
            },
            {
              "date": "12/24/2012",
              "close": 156.3
            },
            {
              "date": "12/25/2012",
              "close": 156.3
            },
            {
              "date": "12/26/2012",
              "close": 156.3
            },
            {
              "date": "12/27/2012",
              "close": 156.05
            },
            {
              "date": "12/28/2012",
              "close": 155.4
            },
            {
              "date": "12/31/2012",
              "close": 154.45
            },
            {
              "date": "1/1/2013",
              "close": 154.45
            },
            {
              "date": "1/2/2013",
              "close": 157.45
            },
            {
              "date": "1/3/2013",
              "close": 157.4
            },
            {
              "date": "1/4/2013",
              "close": 160.05
            },
            {
              "date": "1/7/2013",
              "close": 159.65
            },
            {
              "date": "1/8/2013",
              "close": 162.4
            },
            {
              "date": "1/9/2013",
              "close": 165.5
            },
            {
              "date": "1/10/2013",
              "close": 164.5
            },
            {
              "date": "1/11/2013",
              "close": 165.2
            },
            {
              "date": "1/14/2013",
              "close": 163.85
            },
            {
              "date": "1/15/2013",
              "close": 163
            },
            {
              "date": "1/16/2013",
              "close": 160
            },
            {
              "date": "1/17/2013",
              "close": 160.65
            },
            {
              "date": "1/18/2013",
              "close": 161.85
            },
            {
              "date": "1/21/2013",
              "close": 162.25
            },
            {
              "date": "1/22/2013",
              "close": 162.4
            },
            {
              "date": "1/23/2013",
              "close": 163.45
            },
            {
              "date": "1/24/2013",
              "close": 168.65
            },
            {
              "date": "1/25/2013",
              "close": 170.25
            },
            {
              "date": "1/28/2013",
              "close": 171.1
            },
            {
              "date": "1/29/2013",
              "close": 172.9
            },
            {
              "date": "1/30/2013",
              "close": 173.5
            },
            {
              "date": "1/31/2013",
              "close": 172.1
            },
            {
              "date": "2/1/2013",
              "close": 173.45
            },
            {
              "date": "2/4/2013",
              "close": 170.5
            },
            {
              "date": "2/5/2013",
              "close": 171.25
            },
            {
              "date": "2/6/2013",
              "close": 170.35
            },
            {
              "date": "2/7/2013",
              "close": 171.85
            },
            {
              "date": "2/8/2013",
              "close": 173.9
            },
            {
              "date": "2/11/2013",
              "close": 173.65
            },
            {
              "date": "2/12/2013",
              "close": 173.5
            },
            {
              "date": "2/13/2013",
              "close": 171.65
            },
            {
              "date": "2/14/2013",
              "close": 167.55
            },
            {
              "date": "2/15/2013",
              "close": 167.8
            },
            {
              "date": "2/18/2013",
              "close": 166.8
            },
            {
              "date": "2/19/2013",
              "close": 163.5
            },
            {
              "date": "2/20/2013",
              "close": 162.5
            },
            {
              "date": "2/21/2013",
              "close": 160
            },
            {
              "date": "2/22/2013",
              "close": 163.05
            },
            {
              "date": "2/25/2013",
              "close": 164.1
            },
            {
              "date": "2/26/2013",
              "close": 161.9
            },
            {
              "date": "2/27/2013",
              "close": 165.1
            },
            {
              "date": "2/28/2013",
              "close": 165.55
            },
            {
              "date": "3/1/2013",
              "close": 168.3
            },
            {
              "date": "3/4/2013",
              "close": 167.7
            },
            {
              "date": "3/5/2013",
              "close": 168.6
            },
            {
              "date": "3/6/2013",
              "close": 180
            },
            {
              "date": "3/7/2013",
              "close": 178.6
            },
            {
              "date": "3/8/2013",
              "close": 184.35
            },
            {
              "date": "3/11/2013",
              "close": 185.75
            },
            {
              "date": "3/12/2013",
              "close": 185
            },
            {
              "date": "3/13/2013",
              "close": 182.25
            },
            {
              "date": "3/14/2013",
              "close": 184.55
            },
            {
              "date": "3/15/2013",
              "close": 183.25
            },
            {
              "date": "3/18/2013",
              "close": 184.95
            },
            {
              "date": "3/19/2013",
              "close": 187.6
            },
            {
              "date": "3/20/2013",
              "close": 185.8
            },
            {
              "date": "3/21/2013",
              "close": 183.55
            },
            {
              "date": "3/22/2013",
              "close": 183.45
            },
            {
              "date": "3/25/2013",
              "close": 187.2
            },
            {
              "date": "3/26/2013",
              "close": 187.75
            },
            {
              "date": "3/27/2013",
              "close": 186
            },
            {
              "date": "3/28/2013",
              "close": 186.6
            },
            {
              "date": "3/29/2013",
              "close": 186.6
            },
            {
              "date": "4/1/2013",
              "close": 186.6
            },
            {
              "date": "4/2/2013",
              "close": 192
            },
            {
              "date": "4/3/2013",
              "close": 186.15
            },
            {
              "date": "4/4/2013",
              "close": 184.8
            },
            {
              "date": "4/5/2013",
              "close": 182.6
            },
            {
              "date": "4/8/2013",
              "close": 184.8
            },
            {
              "date": "4/9/2013",
              "close": 187.5
            },
            {
              "date": "4/10/2013",
              "close": 189.2
            },
            {
              "date": "4/11/2013",
              "close": 189.8
            },
            {
              "date": "4/12/2013",
              "close": 190.55
            },
            {
              "date": "4/15/2013",
              "close": 191
            },
            {
              "date": "4/16/2013",
              "close": 189.9
            },
            {
              "date": "4/17/2013",
              "close": 189.25
            },
            {
              "date": "4/18/2013",
              "close": 192.5
            },
            {
              "date": "4/19/2013",
              "close": 193.25
            },
            {
              "date": "4/22/2013",
              "close": 194.8
            },
            {
              "date": "4/23/2013",
              "close": 195.05
            },
            {
              "date": "4/24/2013",
              "close": 193.2
            },
            {
              "date": "4/25/2013",
              "close": 196.4
            },
            {
              "date": "4/26/2013",
              "close": 197.2
            },
            {
              "date": "4/29/2013",
              "close": 196.85
            },
            {
              "date": "4/30/2013",
              "close": 196.2
            },
            {
              "date": "5/1/2013",
              "close": 196.05
            },
            {
              "date": "5/2/2013",
              "close": 193.95
            },
            {
              "date": "5/3/2013",
              "close": 193.8
            },
            {
              "date": "5/6/2013",
              "close": 193.8
            },
            {
              "date": "5/7/2013",
              "close": 194.35
            },
            {
              "date": "5/8/2013",
              "close": 193.05
            },
            {
              "date": "5/9/2013",
              "close": 192.4
            },
            {
              "date": "5/10/2013",
              "close": 194.35
            },
            {
              "date": "5/13/2013",
              "close": 193.5
            },
            {
              "date": "5/14/2013",
              "close": 193.5
            },
            {
              "date": "5/15/2013",
              "close": 195.2
            },
            {
              "date": "5/16/2013",
              "close": 197.05
            },
            {
              "date": "5/17/2013",
              "close": 197.7
            },
            {
              "date": "5/20/2013",
              "close": 197.6
            },
            {
              "date": "5/21/2013",
              "close": 199.9
            },
            {
              "date": "5/22/2013",
              "close": 196.8
            },
            {
              "date": "5/23/2013",
              "close": 193.55
            },
            {
              "date": "5/24/2013",
              "close": 194.55
            },
            {
              "date": "5/27/2013",
              "close": 194.55
            },
            {
              "date": "5/28/2013",
              "close": 197.7
            },
            {
              "date": "5/29/2013",
              "close": 192.95
            },
            {
              "date": "5/30/2013",
              "close": 193
            },
            {
              "date": "5/31/2013",
              "close": 191.95
            },
            {
              "date": "6/3/2013",
              "close": 188.6
            },
            {
              "date": "6/4/2013",
              "close": 192.05
            },
            {
              "date": "6/5/2013",
              "close": 187.5
            },
            {
              "date": "6/6/2013",
              "close": 188.15
            },
            {
              "date": "6/7/2013",
              "close": 191.85
            },
            {
              "date": "6/10/2013",
              "close": 191.75
            },
            {
              "date": "6/11/2013",
              "close": 192
            },
            {
              "date": "6/12/2013",
              "close": 181
            },
            {
              "date": "6/13/2013",
              "close": 178.7
            },
            {
              "date": "6/14/2013",
              "close": 180.05
            },
            {
              "date": "6/17/2013",
              "close": 182.7
            },
            {
              "date": "6/18/2013",
              "close": 184.35
            },
            {
              "date": "6/19/2013",
              "close": 181.45
            },
            {
              "date": "6/20/2013",
              "close": 177.75
            },
            {
              "date": "6/21/2013",
              "close": 175.85
            },
            {
              "date": "6/24/2013",
              "close": 175.9
            },
            {
              "date": "6/25/2013",
              "close": 180.2
            },
            {
              "date": "6/26/2013",
              "close": 183.35
            },
            {
              "date": "6/27/2013",
              "close": 186.35
            },
            {
              "date": "6/28/2013",
              "close": 187.85
            },
            {
              "date": "7/1/2013",
              "close": 188.6
            },
            {
              "date": "7/2/2013",
              "close": 189.9
            },
            {
              "date": "7/3/2013",
              "close": 187.35
            },
            {
              "date": "7/4/2013",
              "close": 193.9
            },
            {
              "date": "7/5/2013",
              "close": 191.75
            },
            {
              "date": "7/8/2013",
              "close": 191.9
            },
            {
              "date": "7/9/2013",
              "close": 193.95
            },
            {
              "date": "7/10/2013",
              "close": 192.5
            },
            {
              "date": "7/11/2013",
              "close": 191.55
            },
            {
              "date": "7/12/2013",
              "close": 193.8
            },
            {
              "date": "7/15/2013",
              "close": 195.5
            },
            {
              "date": "7/16/2013",
              "close": 193.45
            },
            {
              "date": "7/17/2013",
              "close": 192.3
            },
            {
              "date": "7/18/2013",
              "close": 191.35
            },
            {
              "date": "7/19/2013",
              "close": 193.85
            },
            {
              "date": "7/22/2013",
              "close": 194
            },
            {
              "date": "7/23/2013",
              "close": 192.9
            },
            {
              "date": "7/24/2013",
              "close": 193.6
            },
            {
              "date": "7/25/2013",
              "close": 193.5
            },
            {
              "date": "7/26/2013",
              "close": 192.55
            },
            {
              "date": "7/29/2013",
              "close": 194.4
            },
            {
              "date": "7/30/2013",
              "close": 195.1
            },
            {
              "date": "7/31/2013",
              "close": 197.5
            },
            {
              "date": "8/1/2013",
              "close": 200.2
            },
            {
              "date": "8/2/2013",
              "close": 199.35
            },
            {
              "date": "8/5/2013",
              "close": 198
            },
            {
              "date": "8/6/2013",
              "close": 198.15
            },
            {
              "date": "8/7/2013",
              "close": 197.7
            },
            {
              "date": "8/8/2013",
              "close": 196.8
            },
            {
              "date": "8/9/2013",
              "close": 196.7
            },
            {
              "date": "8/12/2013",
              "close": 196.2
            },
            {
              "date": "8/13/2013",
              "close": 197.7
            },
            {
              "date": "8/14/2013",
              "close": 195.3
            },
            {
              "date": "8/15/2013",
              "close": 192.85
            },
            {
              "date": "8/16/2013",
              "close": 192.3
            },
            {
              "date": "8/19/2013",
              "close": 189.85
            },
            {
              "date": "8/20/2013",
              "close": 190.2
            },
            {
              "date": "8/21/2013",
              "close": 190
            },
            {
              "date": "8/22/2013",
              "close": 190.05
            },
            {
              "date": "8/23/2013",
              "close": 191.75
            },
            {
              "date": "8/26/2013",
              "close": 191.75
            },
            {
              "date": "8/27/2013",
              "close": 190.1
            },
            {
              "date": "8/28/2013",
              "close": 189.3
            },
            {
              "date": "8/29/2013",
              "close": 204.75
            },
            {
              "date": "8/30/2013",
              "close": 206.25
            },
            {
              "date": "9/2/2013",
              "close": 213.2
            },
            {
              "date": "9/3/2013",
              "close": 202.5
            },
            {
              "date": "9/4/2013",
              "close": 207
            },
            {
              "date": "9/5/2013",
              "close": 210.55
            },
            {
              "date": "9/6/2013",
              "close": 210.75
            },
            {
              "date": "9/9/2013",
              "close": 210.4
            },
            {
              "date": "9/10/2013",
              "close": 207.9
            },
            {
              "date": "9/11/2013",
              "close": 210.15
            },
            {
              "date": "9/12/2013",
              "close": 210.1
            }
          ]

          var data = []

        testData.forEach(function(d) {
            data.push({"date": parseDate(d.date), "close": d.close});
            // d.date = parseDate(d.date);
            // d.close = +d.close;
        });
  
        var bandsData = getBollingerBands(n, k, data);
  
        x.domain(d3.extent(data, function(d) { return d.date; }));
        y.domain([ d3.min(bandsData, function(d) { return d.low; }),
                   d3.max(bandsData, function(d) { return d.high; }) ]);
  
        svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);
        svg.append("g")
                .attr("class", "y axis")
                .call(yAxis);
  
        svg.append("path")
                .datum(bandsData)
                .attr("class", "area bands")
                .attr("d", bandsArea);
        svg.append("path")
                .datum(bandsData)
                .attr("class", "line bands")
                .attr("d", lowBand);
        svg.append("path")
                .datum(bandsData)
                .attr("class", "line bands")
                .attr("d", highBand);
        svg.append("path")
                .datum(bandsData)
                .attr("class", "line ma bands")
                .attr("d", ma);
  
        svg.append("path")
                .datum(data)
                .attr("class", "line")
                .attr("d", line);
    // });
  
      function getBollingerBands(n, k, data) {
          var bands = []; //{ ma: 0, low: 0, high: 0 }
          for (var i = n - 1, len = data.length; i < len; i++) {
              var slice = data.slice(i + 1 - n , i);
              var mean = d3.mean(slice, function(d) { return d.close; });
              var stdDev = Math.sqrt(d3.mean(slice.map(function(d) {
                  return Math.pow(d.close - mean, 2);
              })));
              bands.push({ date: data[i].date,
                           ma: mean,
                           low: mean - (k * stdDev),
                           high: mean + (k * stdDev) });
          }
          return bands;
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

export default BollingerBands;