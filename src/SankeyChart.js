import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import * as sankeychart from 'd3-sankey';
const moment = require('moment');


const SankeyChart = (props) => {
    useEffect(() => {
        drawChart();
    });

    function drawChart() {
  
        const width = 975;
        const height = 720;

        const svg = d3.select(d3Container.current).append('svg')
            .attr("viewBox", `0 0 ${width} ${height}`)
            .style("width", width)
            .style("height", height);


        // const color = d3.scaleOrdinal(["CONFIG_CHNGD"], ["#da4f81"]).unknown("#ccc")

        const color = d3.scaleOrdinal()
            .domain(["New York", "San Francisco", "Austin"])
            .range(["#feebd1ff", "#3979daff" , "#b8f4f8ff", "#7ac3f1ff", "#fae5a2ff"]);

        const sankey = sankeychart.sankey()
            .nodeSort(null)
            .linkSort(null)
            .nodeWidth(4)
            .nodePadding(20)
            .extent([[0, 5], [width, height - 5]])

        // d3.json("https://raw.githubusercontent.com/fazal-michelangelo/geojson/master/titanic.json").then(data => {
        d3.json("https://raw.githubusercontent.com/fazal-michelangelo/geojson/master/Daemon").then(data => {

            function chart() {

                const { nodes, links } = sankey({
                    nodes: data.nodes.map(d => Object.assign({}, d)),
                    links: data.links.map(d => Object.assign({}, d))
                });

                console.log(nodes);
                svg.append("g")
                    .selectAll("rect")
                    .data(nodes)
                    .join("rect")
                    .attr("x", d => d.x0)
                    .attr("y", d => d.y0)
                    .attr("height", d => d.y1 - d.y0)
                    .attr("width", d => d.x1 - d.x0)
                    .append("title")
                    .text(d => `${d.name}\n${d.value.toLocaleString()}`);

                svg.append("g")
                    .attr("fill", "none")
                    .selectAll("g")
                    .data(links)
                    .join("path")
                    .attr("d", sankeychart.sankeyLinkHorizontal())
                    .attr("stroke", d => color(d.names[0]))
                    .attr("stroke-width", d => d.width)
                    .style("mix-blend-mode", "multiply")
                    .append("title")
                    .text(d => `${d.names.join(" → ")}\n${d.value.toLocaleString()}`);

                svg.append("g")
                    .style("font", "10px sans-serif")
                    .selectAll("text")
                    .data(nodes)
                    .join("text")
                    .attr("x", d => d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6)
                    .attr("y", d => (d.y1 + d.y0) / 2)
                    .attr("dy", "0.35em")
                    .attr("text-anchor", d => d.x0 < width / 2 ? "start" : "end")
                    .text(d => d.name)
                    .append("tspan")
                    .attr("fill-opacity", 0.7)
                    .text(d => ` ${d.value.toLocaleString()}`);

                return svg.node();
            }

            chart();

        });

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

export default SankeyChart;