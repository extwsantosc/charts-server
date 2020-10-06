import { getFromVDOM } from "../../libraries/d3";
import { translation } from "../../libraries/d3/tanslate";
import { addXmlDocumentation } from "../svg";

export function generate(/* should receive props */): string {

    const margin = {top: 10, right: 30, bottom: 30, left: 60};
    const width = 700 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    const d3 = getFromVDOM();

    // Feel free to change or delete any of the code you see in this editor!
    const svg = d3.select('body').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .attr('xmlns', 'http://www.w3.org/2000/svg')
        .attr('xmlns:xlink', 'http://www.w3.org/1999/xlink')
        .append('g')
        .attr('transform', translation(margin.left, margin.top));

    const xAxis = d3.scaleLinear()
        .domain([0, 4000])
        .range([0, width]);

    svg.append('g')
        .attr('transform', translation(0, height))
        .call(d3.axisBottom(xAxis));

    const yAxis = d3.scaleLinear()
        .domain([0, 500000])
        .range([height, 0]);
    svg.append('g')
        .call(d3.axisLeft(yAxis));

    svg.append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('fill', '#ffdd00')
        .attr('width', 305)
        .attr('opacity', 0.45)
        .attr('height', 180);

    svg.append('rect')
        .attr('x', 0)
        .attr('y', 180)
        .attr('fill', '#f74134')
        .attr('width', 305)
        .attr('opacity', 0.45)
        .attr('height', 180);

    svg.append('rect')
        .attr('x', 305)
        .attr('y', 180)
        .attr('fill', '#f79640')
        .attr('width', 305)
        .attr('opacity', 0.45)
        .attr('height', 180);

    svg.append('rect')
        .attr('x', 305)
        .attr('y', 0)
        .attr('fill', '#40f77a')
        .attr('width', 305)
        .attr('opacity', 0.45)
        .attr('height', 180);

    svg.append('text')
        .text('MONITOREO')
        .attr('dy', 100)
        .attr('dx', 155)
        .attr('fill', '#8f8f8f')
        .attr("font-family", "sans-serif")
        .attr('text-anchor', 'middle');

    svg.append('text')
        .text('EXCELENTE')
        .attr('dy', 100)
        .attr('dx', 455)
        .attr('fill', '#8f8f8f')
        .attr("font-family", "sans-serif")
        .attr('text-anchor', 'middle');

    svg.append('text')
        .text('MALO')
        .attr('dy', 280)
        .attr('dx', 155)
        .attr('fill', '#8f8f8f')
        .attr("font-family", "sans-serif")
        .attr('text-anchor', 'middle');

    svg.append('text')
        .text('EN REMISIÓN')
        .attr('dy', 280)
        .attr('dx', 455)
        .attr('fill', '#8f8f8f')
        .attr("font-family", "sans-serif")
        .attr('text-anchor', 'middle');

    svg.append('g')
        .selectAll('dot')
        .data([
            {x: 1710, y: 208500},
        ])
        .enter()
        .append('circle')
        .attr('cx', (d) => (xAxis(d.x) as any))
        .attr('cy', (d) => (yAxis(d.y) as any))
        .attr('r', 10)
        .style('fill', '#0c4d66');
    return addXmlDocumentation(d3.select("body").html());
}
