var helloWorld = d3.select("p").text("Hello world!");

// A simple chart
var lilChart =  d3.select("#chart")
                  .selectAll("div")
                  .data([4, 8, 15, 16, 23, 42])
                  .enter()
                  .append("div")
                  .style("height", (d)=> d + "px");



var appDiv =  d3.select("#app")
                .append("a")
                .text("Testing adding a link with a href attribute")
                .attr("href", "http://google.com");

var canvas =  d3.select("body")
                .append("svg")
                .attr("width", 500)
                .attr("height", 500);

var circle = canvas.append("circle")
                    .attr("cx", 250) //center x
                    .attr("cy", 250) //center y
                    .attr("r", 50)     //raduis
                    .attr("fill", "red");

var rect = canvas.append("rect")
                  .attr("width", 200)
                  .attr("height", 70)
                  .attr("fill", "blue");



// var appendElmToBody = d3.select("body")
//                         .append("h3")
//                         .text("Testing apending element y'all!")
//                         .style("color", "red");
