// URL: https://beta.observablehq.com/@mbostock/d3-stacked-to-grouped-bars
// Title: D3 Stacked-to-Grouped Bars
// Author: Mike Bostock (@mbostock)
// Version: 212
// Runtime version: 1

const m0 = {
  id: "208ac4d6c3f58ab1@212",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# D3 Stacked-to-Grouped Bars

Animations can preserve object constancy, allowing the reader to follow the data across views. See [Heer and Robertson](http://vis.berkeley.edu/papers/animated_transitions/) for more.`
)})
    },
    {
      name: "viewof layout",
      inputs: ["html"],
      value: (function(html)
{
  const form = html`<form>
  <label style="margin-right:0.5em;"><input type=radio name=radio value="stacked" checked> Stacked</label>
  <label style="margin-right:0.5em;"><input type=radio name=radio value="grouped"> Grouped</label>
</form>`;
  form.oninput = () => form.value = form.radio.value;
  form.onchange = () => { // Safari…
    form.value = form.radio.value;
    form.dispatchEvent(new CustomEvent("input"));
  };
  form.value = form.radio.value;
  setTimeout(() => {
    form.value = form.radio.value = "grouped";
    form.dispatchEvent(new CustomEvent("input"));
  }, 3000);
  return form;
}
)
    },
    {
      name: "layout",
      inputs: ["Generators","viewof layout"],
      value: (G, _) => G.input(_)
    },
    {
      name: "chart",
      inputs: ["d3","DOM","width","height","y01z","z","x","margin","xAxis","y","yMax","n","y1Max"],
      value: (function(d3,DOM,width,height,y01z,z,x,margin,xAxis,y,yMax,n,y1Max)
{
  const svg = d3.select(DOM.svg(width, height));

  const rect = svg.selectAll("g")
    .data(y01z)
    .enter().append("g")
      .attr("fill", (d, i) => z(i))
    .selectAll("rect")
    .data(d => d)
    .enter().append("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", height - margin.bottom)
      .attr("width", x.bandwidth())
      .attr("height", 0);

  svg.append("g")
      .call(xAxis);

  function transitionGrouped() {
    y.domain([0, yMax]);

    rect.transition()
        .duration(500)
        .delay((d, i) => i * 20)
        .attr("x", (d, i) => x(i) + x.bandwidth() / n * d[2])
        .attr("width", x.bandwidth() / n)
      .transition()
        .attr("y", d => y(d[1] - d[0]))
        .attr("height", d => y(0) - y(d[1] - d[0]));
  }

  function transitionStacked() {
    y.domain([0, y1Max]);

    rect.transition()
        .duration(500)
        .delay((d, i) => i * 20)
        .attr("y", d => y(d[1]))
        .attr("height", d => y(d[0]) - y(d[1]))
      .transition()
        .attr("x", (d, i) => x(i))
        .attr("width", x.bandwidth());
  }

  function update(layout) {
    if (layout === "stacked") transitionStacked();
    else transitionGrouped();
  }

  return Object.assign(svg.node(), {update});
}
)
    },
    {
      inputs: ["chart","layout"],
      value: (function(chart,layout){return(
chart.update(layout)
)})
    },
    {
      name: "xz",
      inputs: ["d3","m"],
      value: (function(d3,m){return(
d3.range(m)
)})
    },
    {
      name: "yz",
      inputs: ["d3","n","bumps","m"],
      value: (function(d3,n,bumps,m){return(
d3.range(n).map(() => bumps(m))
)})
    },
    {
      name: "y01z",
      inputs: ["d3","n","yz"],
      value: (function(d3,n,yz){return(
d3.stack()
    .keys(d3.range(n))
  (d3.transpose(yz)) // stacked yz
  .map((data, i) => data.map(([y0, y1]) => [y0, y1, i]))
)})
    },
    {
      name: "yMax",
      inputs: ["d3","yz"],
      value: (function(d3,yz){return(
d3.max(yz, y => d3.max(y))
)})
    },
    {
      name: "y1Max",
      inputs: ["d3","y01z"],
      value: (function(d3,y01z){return(
d3.max(y01z, y => d3.max(y, d => d[1]))
)})
    },
    {
      name: "x",
      inputs: ["d3","xz","margin","width"],
      value: (function(d3,xz,margin,width){return(
d3.scaleBand()
    .domain(xz)
    .rangeRound([margin.left, width - margin.right])
    .padding(0.08)
)})
    },
    {
      name: "y",
      inputs: ["d3","y1Max","height","margin"],
      value: (function(d3,y1Max,height,margin){return(
d3.scaleLinear()
    .domain([0, y1Max])
    .range([height - margin.bottom, margin.top])
)})
    },
    {
      name: "z",
      inputs: ["d3","n"],
      value: (function(d3,n){return(
d3.scaleSequential(d3.interpolateBlues)
    .domain([-0.5 * n, 1.5 * n])
)})
    },
    {
      name: "xAxis",
      inputs: ["height","margin","d3","x"],
      value: (function(height,margin,d3,x){return(
svg => svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickSizeOuter(0).tickFormat(() => ""))
)})
    },
    {
      name: "n",
      value: (function(){return(
5
)})
    },
    {
      name: "m",
      value: (function(){return(
58
)})
    },
    {
      name: "height",
      value: (function(){return(
500
)})
    },
    {
      name: "margin",
      value: (function(){return(
{top: 0, right: 0, bottom: 10, left: 0}
)})
    },
    {
      name: "bumps",
      value: (function(){return(
function bumps(m) {
  const values = [];

  // Initialize with uniform random values in [0.1, 0.2).
  for (let i = 0; i < m; ++i) {
    values[i] = 0.1 + 0.1 * Math.random();
  }

  // Add five random bumps.
  for (let j = 0; j < 5; ++j) {
    const x = 1 / (0.1 + Math.random());
    const y = 2 * Math.random() - 0.5;
    const z = 10 / (0.1 + Math.random());
    for (let i = 0; i < m; i++) {
      const w = (i / m - y) * z;
      values[i] += x * Math.exp(-w * w);
    }
  }

  // Ensure all values are positive.
  for (let i = 0; i < m; ++i) {
    values[i] = Math.max(0, values[i]);
  }

  return values;
}
)})
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("d3@5")
)})
    }
  ]
};

const notebook = {
  id: "208ac4d6c3f58ab1@212",
  modules: [m0]
};

export default notebook;
