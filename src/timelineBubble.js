import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
const moment = require('moment');


const TimelineBubble = (props) => {
    useEffect(() => {
        drawChart();
    });
    
    function drawChart() {
        var data = [
            {
                "id": 0,
                "name": "Bachelor degree in Japanese and English languages",
                "category": "Education",
                "placeName": "Université de Grenoble (Stendhal)",
                "country": "France",
                "startDate": "2010-09",
                "endDate": "2013-07",
                "description": ["Japanese (Kanji, Grammar, History, Language practise)",
                    "English (British and American history, Grammar, Language practise)",
                    "Economy, Accounting, Law, International law",
                    "Introduction to computer Science (Javascript, Adobe Flash Player, Microsoft Access, CMS)"],
                "skills": [
                    "english",
                    "japanese",
                    "law",
                    "economics"
                ]
            },
            {
                "id": 1,
                "name": "Exchange Student",
                "category": "Education",
                "placeName": "Nagoya University of Foreign Studies",
                "country": "Japan",
                "startDate": "2012-09",
                "endDate": "2013-07",
                "description": ["Japanese language classes JLPT N3, JLPT N2",
                    "Tourism & Hospitality",
                    "Economy",
                    "British law",
                    "Sociology"],
                "skills": [
                    "english",
                    "japanese",
                    "law",
                    "economics",
                    "sociology",
                    "tourism industry"
                ]
            },
            {
                "id": 2,
                "name": "Master degree in Computer Science",
                "category": "Education",
                "placeName": "Université de Grenoble",
                "country": "France",
                "startDate": "2016-09",
                "endDate": "2018-07",
                "description": ["Algorithms",
                    "Java",
                    "Web Dev",
                    "Systems & Networks",
                    "DB (SQL)",
                    "HCI",
                    "AI"],
                "skills": [
                    "java",
                    "algorithms",
                    "javascript",
                    "php",
                    ".NET",
                    "SQL"
                ]
            },
            {
                "id": 3,
                "name": "Project Manager and Front-End Engineer",
                "category": "Work",
                "placeName": "Studio Umi",
                "country": "Japan",
                "startDate": "2015-02",
                "endDate": "2016-07",
                "description": ["Web project planning",
                    "Budget prevision",
                    "Team and deadlines management",
                    "HTML",
                    "CSS",
                    "SCSS",
                    "Sass",
                    "Gulp",
                    "jQuery",
                    "GitLab",
                    "Drupal(7)",
                    "Events & Talks : CMS Summer Festival Osaka, Start Up Week End Nagahama Shiga, Drupal Cafe, Code for Shiga"],
                "skills": [
                    "html",
                    "css",
                    "scss",
                    "javascript",
                    "jQuery",
                    "php",
                    "Drupal"
                ]
            },
            {
                "id": 4,
                "name": "Data Vizualisation Internship",
                "category": "Work",
                "placeName": "Atos Bull",
                "country": "France",
                "startDate": "2018-01",
                "endDate": "2018-07",
                "description": "Design and development of graphical solutions for HPC data analysis (D3.js)",
                "skills": [
                    "html",
                    "css",
                    "sass",
                    "javascript",
                    "d3.js",
                    "Symfony"
                ]
            },
            {
                "id": 5,
                "name": "Software Engineer at Schneider Electric",
                "category": "Work",
                "placeName": "Thales Services",
                "country": "France",
                "startDate": "2018-09",
                "endDate": "2019-01",
                "description": "Development of an application for electrical pannels (Spring, Angular, MongoDB)",
                "skills": [
                    "java",
                    "angular",
                    "mongoDB",
                    "mongoshell"
                ]
            },
            {
                "id": 6,
                "name": "Research for version upgrade at Richemont",
                "category": "Work",
                "placeName": "Thales Services",
                "country": "France",
                "startDate": "2019-01",
                "endDate": "2019-02",
                "description": "Study to evaluate the impact of an application upgrade (SQL)",
                "skills": [
                    "SQL"
                ]
            },
            {
                "id": 7,
                "name": "Introduction to Data Science in Python",
                "category": "Education",
                "placeName": "Coursera",
                "country": "France",
                "startDate": "2018-10",
                "endDate": "2018-11-29",
                "description": "Courses : What is Data Science, Open tools for Data Science, Data Science Methodology, Databases and SQL for Data Science",
                "skills": [
                    "Python",
                    "Jupyter Notebooks",
                    "SQL"
                ]
            },
            {
                "id": 8,
                "name": "IBM Data Science Courses",
                "category": "Education",
                "placeName": "Coursera",
                "country": "France",
                "startDate": "2018-11-20",
                "endDate": "2019-01-25",
                "description": "Python for Data Science, Data Analysis with Python, Data Visualization with Python",
                "skills": [
                    "Python",
                    "Jupyter Notebooks",
                    "Matplotlib",
                    "Numpy",
                    "Seaborn"
                ]
            },
            {
                "id": 9,
                "name": "Managing Data Analysis",
                "category": "Education",
                "placeName": "Coursera",
                "country": "France",
                "startDate": "2018-12-23",
                "endDate": "2019-01-08",
                "description": "Course about the process of managing data analysis and EDA",
                "skills": [
                    "Data Analysis"
                ]
            },
            {
                "id": 10,
                "name": "Interactivity with JavaScript",
                "category": "Education",
                "placeName": "Coursera",
                "country": "France",
                "startDate": "2016-01-24",
                "endDate": "2016-02-17",
                "description": "Basics of Javascript language",
                "skills": [
                    "Javascript"
                ]
            }
        ];

        const svg = d3.select(d3Container.current).append("svg").attr('id', 'Chart').attr("width", '100%').attr("height", 500);
        svg.append('line').attr('class', 'timeline-base')
            .attr("x1", 0)
            .attr("y1", 100)
            .attr("x2", '90%')
            .attr("y2", 100);
        // Get the value of the svg to for scaleLinear
        function getLineVal(val) {
            if (val === 'max') {
                let el = document.getElementById('Chart');
                return el.getBoundingClientRect().width;
            }
            else {
                return 0;
            }
        }
        // Convert to UNIX timestamp
        function convertToTimeStamp(date) {
            let parts = date.match(/(\d{4})-(\d{2})/);
            return new Date(parts[1] + '-' + parts[2] + '-01').getTime();
        }

        let scaleLine = d3.scaleLinear()
            .domain([1285891200000, Date.now()])
            .range([getLineVal('min') + 20, getLineVal('max') - 100]); // OFFSET = 20

        let scaleCircle = d3.scaleLinear()
            .domain([moment.duration(3, 'd').asMilliseconds(), moment.duration(10, 'y').asMilliseconds()])
            .range([10, 200]);

        let allGroups = svg.selectAll('g').data(data);
        let group = allGroups.enter().append('g').attr('id', function (data) { return 'group-' + data.id });

        group.append('circle')
            .attr('cx', function (data) { return scaleLine(convertToTimeStamp(data.startDate)); })
            .attr('cy', 100)
            .attr('r', function (data) { return scaleCircle(convertToTimeStamp(data.endDate) - convertToTimeStamp(data.startDate)); })
            .attr('fill-opacity', 0.5)
            .attr('class', function (data) { return ('circle-category circle-' + data.category.toLowerCase()) })
            .attr('id', function (data) {
                return 'circle-' + data.id
            })
            // When hover a circle
            .on('mouseover', function (d, i) {
                d3.select(this).attr('r', function (data) { return scaleCircle(convertToTimeStamp(data.endDate) - convertToTimeStamp(data.startDate)) + 20; });
                d3.select(this).classed('circle-hovered', true);
                d3.select(this.parentNode).selectAll('text').style('opacity', 1);
                d3.select(this.parentNode).selectAll('.text-place').classed('hovered', true).style('opacity', 0);
                d3.select(this.parentNode).selectAll('.text-desc').classed('hovered', true).style('opacity', 0);
                d3.select(this.parentNode).selectAll('.text-date-end').classed('hovered', true).style('opacity', 0);
            })
            // When click a circle

            // onclick functionality has been muted as per required data-layout
            // .on('click', function (d, i) {
            //     d3.select(this).attr('r', 2000);
            //     d3.selectAll('line').style('opacity', 0);
            //     d3.selectAll('circle').filter(function () {
            //         return !this.classList.contains('circle-hovered');
            //     }).style('opacity', 0);
            //     d3.select(this).classed('circle-clicked', true);
            //     d3.select(this.parentNode).selectAll('.text-position').style('opacity', 0);
            //     d3.select(this.parentNode).selectAll('.text-date').style('opacity', 0);
            //     d3.selectAll('.details').style('display', 'none');
            //     setTimeout(function () {
            //         svg.attr('height', 0);
            //     }, 450)
            //     let currId = this.getAttribute('id').split('-')[1];
            //     let details = d3.select('#details-' + currId);
            //     details.style('display', 'block');
            //     details.style('opacity', 1);
            // })
            // When un-hover a circle
            .on('mouseout', function (d, i) {
                d3.select(this).attr('r', function (data) { return scaleCircle(convertToTimeStamp(data.endDate) - convertToTimeStamp(data.startDate)); });
                d3.select(this).classed('circle-hovered', false);
                d3.select(this.parentNode).selectAll('text').style('opacity', 0);
            });

        group.append('text')
            .style('opacity', 0)
            .text(function (data) { return (data.name); })
            .attr('x', function (data) {
                let elementWitdh = this.getBoundingClientRect().width;
                // Avoid overflow
                if (scaleLine(convertToTimeStamp(data.startDate)) + elementWitdh >= getLineVal('max')) {
                    return scaleLine(convertToTimeStamp(data.startDate)) - elementWitdh;
                }
                else {
                    return scaleLine(convertToTimeStamp(data.startDate));
                }
            })
            .attr('y', 150)
            .attr('class', 'text-position');

        // group.append('text')
        //     .text(function (data) {
        //         // Get only YYYY-MM
        //         if (data.startDate.length > 7) {
        //             return (data.startDate.slice(0, 7))
        //         }
        //         else {
        //             return (data.startDate)
        //         }
        //     })
        //     .attr('x', function (data) {
        //         // Get sibling to have the len and align the date
        //         let elementWitdh = this.getBoundingClientRect().width;
        //         let positionWidth = this.parentNode.querySelector('text.text-position').getBoundingClientRect().width;
        //         if (scaleLine(convertToTimeStamp(data.startDate)) + positionWidth >= getLineVal('max')) {
        //             return scaleLine(convertToTimeStamp(data.startDate)) - elementWitdh;
        //         }
        //         else {
        //             return scaleLine(convertToTimeStamp(data.startDate));
        //         }
        //     })
        //     .attr('y', 130)
        //     .attr('class', 'text-date')
        //     .style('opacity', 0);

        // data.map(d => {
        //     let details = d3.select('#timelineChart').append('div').classed('details', true).classed('details-' + d.category.toLowerCase(), true).attr('id', 'details-' + d.id);
        //     details.append('i').classed('material-icons close-icon', true).text('close');
        //     details.append('div').classed('title', true).append('span').classed('date text-date date-title', true).text(d.startDate + '-' + d.endDate);
        //     details.select(' .title').append('span').classed('position-title text-position', true).text(d.name);
        //     details.append('div').classed('place-name text-place hovered', true).text(d.placeName);
        //     details.append('div')
        //         .attr('class', 'text-desc')
        //         .attr('id', 'descriptionId-' + d.id)
        //         .text(function () {
        //             if (typeof (d.description) === 'string') {
        //                 return d.description;
        //             }
        //             else {
        //                 return d.description.toString()
        //             }
        //         });
        //     details.style('opacity', 0);
        // });

        // Hide the details div (once opened by clicking on circle)

        // close-icon onclick functionality has been muted as per required data-layout
        // d3.selectAll('.close-icon').on('click', function () {
        //     d3.select(this.parentNode).style('opacity', 0);
        //     setTimeout(function () {
        //         svg.attr('height', 500);
        //         d3.select('.timeline-base').style('opacity', 1)
        //         d3.selectAll('circle').classed('circle-clicked', false);
        //         d3.selectAll('circle').style('opacity', 1);
        //         d3.selectAll('.details').style('display', 'block');
        //     }, 1000)
        // })
    }

    const d3Container = useRef(null);

    return (
        <svg
            className="d3-timeline-bubble"
            width={996}
            height={444}
            ref={d3Container}
        />
    );
}

export default TimelineBubble;