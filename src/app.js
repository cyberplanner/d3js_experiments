var dataArray   =  [4, 10, 50, 13, 20, 60];
var width       = 500;
var height      = 500;

var widthScale  = d3.scaleLinear()
                      .domain([0, 60])
                      .range([0, width]);

var colorScale  = d3.scaleLinear()
                      .domain([0, 60])
                      .range(["red", "blue"])

var axis        = d3.svg.axis()
                  .scale(widthScale);

var canvas      =  d3.select("body")
                      .append("svg")
                      .attr("width", width)
                      .attr("height", height)
                      .append("g")
                      .attr("transform", "translate(20, 0)")
                      // .call(axis)
                      ;

var bars        =  canvas.selectAll("rect")
                        .data(dataArray)
                        .enter()
                          .append("rect")
                          .attr("width", function(d) { return widthScale(d);})
                          .attr("height", 30)
                          .attr("fill", function(d) { return colorScale(d);})
                          .attr("y", function(d, i) { return i * 50; });



// var testCircle =  canvas.append("circle")
//                         .attr("cy", 250)
//                         .attr("cx", 250)
//                         .attr("r", 50)
//                         .attr("fill", "blue")
