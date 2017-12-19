import { Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import {
  D3Service,
  D3,
  Axis,
  BrushBehavior,
  BrushSelection,
  D3BrushEvent,
  ScaleLinear,
  ScaleOrdinal,
  Selection,
  Transition
} from 'd3-ng2-service';
import { ViewEncapsulation } from '@angular/core/src/metadata/view';
import { style } from '@angular/core/src/animation/dsl';
import { MessageService } from '../../shared/message.service';
@Component({
  selector: 'app-d3graph',
  templateUrl: './d3graph.component.html',
  styleUrls: ['./d3graph.component.css']
})
export class D3graphComponent implements OnInit {

  private d3: D3;
  constructor(element: ElementRef, private ngZone: NgZone, d3Service: D3Service, private message: MessageService) {
    this.d3 = d3Service.getD3();
    this.message.changeMessage("D3 Graph Sample");
  }

  ngOnInit() {

    let d3 = this.d3;


    // var circle = d3.selectAll("circle");
    // circle.style("fill", "steelblue");
    // circle.attr("r", 20);
    // circle.attr("cx", function() { return Math.random() * 720; });

    // var data2 = [30, 86, 168, 281, 303, 365];
    // var x = d3.scaleLinear()
    //   .domain([0, d3.max(data2)])
    //   .range([0, 420]);

    // d3.select(".chart")
    //   .selectAll("div")
    //   .data(data2)
    //   .enter()
    //   .append("div")
    //   .style("width", function (d) { return x(d) + "px"; })
    //   .text(function (d) { return '$' + d; });


    var data = [
      {
        "name": "A",
        "value": 0.08167
      },
      {
        "name": "B",
        "value": 0.01492
      },
      {
        "name": "C",
        "value": 0.02782
      },
      {
        "name": "D",
        "value": 0.04253
      },
      {
        "name": "E",
        "value": 0.12702
      },
      {
        "name": "F",
        "value": 0.02288
      },
      {
        "name": "G",
        "value": 0.02015
      },
      {
        "name": "H",
        "value": 0.06094
      },
      {
        "name": "I",
        "value": 0.06966
      },
      {
        "name": "J",
        "value": 0.00153
      },
      {
        "name": "K",
        "value": 0.00772
      },
      {
        "name": "L",
        "value": 0.04025
      },
      {
        "name": "M",
        "value": 0.02406
      },
      {
        "name": "N",
        "value": 0.06749
      },
      {
        "name": "O",
        "value": 0.07507
      },
      {
        "name": "P",
        "value": 0.01929
      },
      {
        "name": "Q",
        "value": 0.00095
      },
      {
        "name": "R",
        "value": 0.05987
      },
      {
        "name": "S",
        "value": 0.06327
      },
      {
        "name": "T",
        "value": 0.09056
      },
      {
        "name": "U",
        "value": 0.02758
      },
      {
        "name": "V",
        "value": 0.00978
      },
      {
        "name": "W",
        "value": 0.0236
      },
      {
        "name": "X",
        "value": 0.0015
      },
      {
        "name": "Y",
        "value": 0.01974
      },
      {
        "name": "Z",
        "value": 0.00074
      }
    ];

    var svg = d3.select("svg"),
      margin = { top: 80, right: 75, bottom: 30, left: 50 },
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom;

    var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
      y = d3.scaleLinear().range([height, 0]);

    var g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    x.domain(data.map(function (d) { return d.name; }));
    y.domain([0, d3.max(data, function (d) { return d.value; })]);

    g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .append("text")
      .attr("x", width + 30)
      .attr("y", 10)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Companies")
      .style("font", "20px bold sans-serif");

    g.append("g")
       .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10, "%").tickPadding(11))
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Profit Percentage")
      .style("font", "20px bold sans-serif");

    g.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function (d) { return x(d.name); })
      .attr("y", function (d) { return y(d.value); })
      .attr("width", x.bandwidth())
      .attr("height", function (d) { return height - y(d.value); });





  }



}
// function type(d) {
//   d.value = +d.value; // coerce to number
//   return d;
// }
