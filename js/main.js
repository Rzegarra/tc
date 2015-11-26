$('#button').click(function(){
  var links = [
     {source: "q0", target: "q1", type: "000,110"},
     {source: "q0", target: "q2", type: "101"},
     {source: "q2", target: "q3", type: "111"},
     {source: "q2", target: "q1", type: "101,111"}

   ];
console.log("ya estoy listo qcsm :)");
graficar(links);
console.log('grafique :) .I.');
var prueba='((000|101)(000|010|101|111)|(010|111)(001|011|100))';
var salidas=[];
estadosIntermedios(prueba);
var salidasTotales=[];//para revisar las salidas de cada nodo [i][j] nodo i, nodo j
separacion(prueba);
limpiar(salidasTotales);
var exp,inicioDato,finDato,dato,parentesis;//exp=expresion regular.
console.log('primera separacion saltos= '+salidasTotales[0][0]+'-->'+salidasTotales[0][1]);
console.log('segunda separacion saltos= '+salidasTotales[1][0]+'-->'+salidasTotales[1][1]);

//$('#button').click(function(){
//  exp=$('#datos').val();
//  separacion(exp);
//  console.log(exp);

function estadosIntermedios(texto)
{
  console.log('funcion separacion');
  console.log(texto);
  var texoTemporal=texto;
  if(texoTemporal.indexOf(')|(')==texoTemporal.lastIndexOf(')|('))
  {
    salidas[0]=texoTemporal.slice(0,texoTemporal.indexOf(')|(')+1);
    salidas[1]=texoTemporal.slice(texoTemporal.indexOf(')|(')+2,texoTemporal.length);
    console.log('2 estados intermedios');
  }
  else {
    var timp=0;
    for (var i = 0; texoTemporal.indexOf(')|(')!=-1; i++) {
      var ini=texoTemporal.indexOf(')|(');
      var fin=texoTemporal.length;
      salidas[i]=texoTemporal.slice(timp,ini+1);
      timp=ini+2;
      texoTemporal=texoTemporal.slice(ini+2,fin);
    }
    console.log(i+1+' estados intermedios');
  }
  //inicioDato=texto.slice()
}
function separacion(texto)
{
  var cantNode;
  var cantArist;
  for (var i = 0;i < salidas.length ; i++) {
    var texoTemporal=salidas[i];
    salidasTotales[i]=[];
    if(texoTemporal.indexOf(')(')==texoTemporal.lastIndexOf(')('))
    {
      salidasTotales[i][0]=texoTemporal.slice(0,texoTemporal.indexOf(')(')+1);
      salidasTotales[i][1]=texoTemporal.slice(texoTemporal.indexOf(')(')+1,texoTemporal.length);
      console.log('numero de saltos = 2');
    }
    else {
      var timp=0;
      for (var j = 0; texoTemporal.indexOf(')(')!=-1; j++) {
        var ini=texoTemporal.indexOf(')(');
        var fin=texoTemporal.length;
        salidasTotales[i][j]=texoTemporal.slice(timp,ini+1);
        console.log('salidasTotales posicion' +'['+i+']'+'['+j+']= '+ texoTemporal.slice(timp,ini+1));
        timp=ini+1;
        texoTemporal=texoTemporal.slice(ini+1,fin);
      }
    }
  }
}
function limpiar(a)
{
  for (var i = 0; i < (salidasTotales.length); i++) {
    for (var j = 0; j < salidasTotales[i].length; j++) {
      salidasTotales[i][j]=salidasTotales[i][j].split('|').join(',');
      salidasTotales[i][j]=salidasTotales[i][j].split('(').join('');
      salidasTotales[i][j]=salidasTotales[i][j].split(')').join('');
    }
  }
}
function graficar(links){


  var nodes = {};

  // Compute the distinct nodes from the links.
  links.forEach(function(link) {
    link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
    link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
  });

  var w = 500,
      h = 500;

  var force = d3.layout.force()
      .nodes(d3.values(nodes))
      .links(links)
      .size([w, h])
      .linkDistance(90)
      .charge(-300)
      .on("tick", tick)
      .start();

  var svg = d3.select("body").append("svg:svg")
      .attr("width", w)
      .attr("height", h)
      //crearemos los enlaces que se aceptaran y se
      //mandan a data :)
var enlaces=[]
for (var i = 0; i < links.length; i++) {
   enlaces[i]=links[i].type
}
  // Per-type markers, as they don't inherit styles.
  svg.append("defs").selectAll("marker")
      .data(enlaces)
    .enter().append("marker")
      .attr("id", function(d) { return d; })
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 21)
      .attr("refY", -1.5)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
    .append("path")
      .attr("d", "M0,-5L10,0L0,5");

      var link = svg.append("svg:g").selectAll("g.link")
          .data(force.links())
          .enter().append('g')
          .attr('class', 'link');

      var linkPath = link.append("svg:path")
          .attr("class", function(d) { return "link " + d.type; })
          .attr("marker-end", function(d) { return "url(#" + d.type + ")"; });

      var textPath = link.append("svg:path")
          .attr("id", function(d) { return d.source.index + "_" + d.target.index; })
          .attr("class", "textpath");

  var circle = svg.append("svg:g").selectAll("circle")
      .data(force.nodes())
    .enter().append("svg:circle")
      .attr("r", 10)
      .call(force.drag);

  var text = svg.append("svg:g").selectAll("g")
      .data(force.nodes())
    .enter().append("svg:g");

  // A copy of the text with a thick white stroke for legibility.
  text.append("svg:text")
      .attr("x",-6)
      .attr("y", ".31em")
      .text(function(d) { return d.name; });



  var path_label = svg.append("svg:g").selectAll(".path_label")
      .data(force.links())
    .enter().append("svg:text")
      .attr("class", "path_label")
      .append("svg:textPath")
        .attr("startOffset", "50%")
        .attr("text-anchor", "middle")
        .attr("xlink:href", function(d) { return "#" + d.source.index + "_" + d.target.index; })
        .style("fill", "#000")
        .style("font-family", "Arial")
        .text(function(d) { return d.type; });

      function arcPath(leftHand, d) {
          var start = leftHand ? d.source : d.target,
              end = leftHand ? d.target : d.source,
              dx = end.x - start.x,
              dy = end.y - start.y,
              dr = Math.sqrt(dx * dx + dy * dy),
              sweep = leftHand ? 0 : 1;
          return "M" + start.x + "," + start.y + "A" + dr + "," + dr + " 0 0," + sweep + " " + end.x + "," + end.y;
      }

  // Use elliptical arc path segments to doubly-encode directionality.
  function tick() {
    linkPath.attr("d", function(d) {
      return arcPath(false, d);
    });

    textPath.attr("d", function(d) {
      return arcPath(d.source.x < d.target.x, d);
    });

    circle.attr("transform", function(d) {
      return "translate(" + d.x + "," + d.y + ")";
    });

    text.attr("transform", function(d) {
      return "translate(" + d.x + "," + d.y + ")";
    });
  }
}
})
