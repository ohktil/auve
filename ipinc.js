// Example in D3.js showing ordinal scale usage by default for nominal data
const colors = d3.scaleOrdinal()
  .domain(["red", "green", "blue"]) // Nominal categories
  .range(["#FF0000", "#00FF00", "#0000FF"]); // Colors mapped to these categories
