var matrizMoore=[[' ',  '0.05',  '0.1',   '0.25',  'salida'],
        ['q0.1','q1',  'q2',  'q0.2',  '20'],
        ['q0.2','q1',  'q2',  'q0.2',  '25'],
        ['q0.3','q1',  'q2',  'q0.2',  '30'],
        ['q0.4','q1',  'q2',  'q0.2',  '35'],
        ['q0.5','q1',  'q2',  'q0.2',  '40'],
        //----------------------------------------
        ['q0.*','q1',  'q2',  'q0.2','-'],
        ['q1',  'q2',  'q3',  'q0.3','-'],
        ['q2',  'q3',  'q0.1','q0.4','-'],
        ['q3',  'q0.1','q0.2','q0.5','-']];

var nodos=[];
var q0Primas=[];
var entradas=[];
var abecedario=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','S','U','V','W','X','Y','Z'];
var matrizABC=[];
var salidas=[]
var moore=[];
var obj1={source:'q1',
          target:'q1',
          type:0};
var links=[];
var m_cambio=[];
var m_mealy=[];
function convertirAmealy(matrizMoore){
  //estados(matrizMoore);
  var help=0;
  for (var i = 1; matrizMoore[i][0]!='q0.*'; i++) {
    help++;
  }
  for(var i=0;i<nodos.length+1;i++){
    m_mealy[i]=[]; 
  }
  m_mealy[0][0]=" ";
  for(var i=1;i<nodos.length+1; i++){
    m_mealy[i][0]=nodos[i-1];  
  }
  for(var j=1;j<entradas.length+1;j++){
    m_mealy[0][j]=entradas[j-1];
  }

  for(var j=m_mealy[0].length,i=0;i<entradas.length;i++,j++){
    m_mealy[0][j]=entradas[i];
  }
  m_mealy[1][0]='q0';
  for(var i=1; i<nodos.length+1;i++){
    for(var j=1;j<entradas.length+1;j++){
      if(matrizMoore[i+5][j]=='q0.*'){
        m_mealy[i][j]='q0';
      }
      else{
        m_mealy[i][j]=matrizMoore[i+help][j];
      }
    }
  }
  // for (var i=m_mealy[1].length,k=0;i<m_mealy[0].length;i++,k++){
  //   for(var j=m_mealy[1].length,h=0;h<entradas.length;h++,j++){
  //     m_mealy[i][j]=m_cambio[k][h];
  //   }
  // }
  //console.log(matrizMoore);
}
function copiarMatriz(matrizMoore){
  var help=1;
  for (var i = 1; matrizMoore[i][0]!='q0.*'; i++) {
    help++;
  }
  console.log("esto es el asdafasfass "+help);
  for(var i=0;i<nodos.length;i++){
    m_cambio[i]=[];
    
  }
  for(var i=help;i<matrizMoore.length;i++){
    for(var j=1;j<entradas.length+1;j++){
      m_cambio[i-help][j-1]=matrizMoore[i][j];    }
  }
}

function estados(matrizMoore) {
  var help=1;
  var help2=1;
  for (var i = 1; matrizMoore[i][0]!='q0.*'; i++) {
    help++;
  }
  console.log(help);
  for (var i=1;help<matrizMoore.length;help++){
    nodos[i-1]=matrizMoore[help][0];
    i++;
  }
  for (var i = 1; matrizMoore[i][0]!='q0.*'; i++) {
    help2++;
  }
  for (var i=1;i<help2;i++){
    q0Primas[i-1]=matrizMoore[i][0];
  }
  for(var i=1; i<matrizMoore[0].length-1;i++){
    entradas[i-1]=matrizMoore[0][i];
  }
  for(var i=1; i<help2; i++){
    salidas[i-1]=matrizMoore[i][4];
  }
  copiarMatriz(matrizMoore);
  for (var i=help2; i<matrizMoore.length; i++){
    for(var j=0; j<matrizMoore[0].length-2;j++){
      for(var k=0; k<q0Primas.length; k++){
         if (matrizMoore[i][j+1]==q0Primas[k]) {
           matrizMoore[i][j+1]='q0.*';
         }
        }
        links.push({target:matrizMoore[i][0],
                  source:matrizMoore[i][j+1],
                  type:matrizMoore[0][j+1]
                  });
      //temp++;
      //console.log(temp);
    }
  }
  graficar(links);
  console.log(links);
  console.log(matrizMoore);
  convertirAmealy(matrizMoore);
  console.log(m_mealy);

}

$(convertir).on('click',function(evento){
  //copiarMatriz(matrizMoore);
  console.log('esta es la matrizABC'+matrizABC);
  estados(matrizMoore);
  //crearMatrizABC();
  //cambiarMatriz(matrizABC);
  console.log(q0Primas);
  console.log(abecedario);
  console.log(nodos);
  console.log(entradas);
  //console.log(matrizABC);
  console.log(salidas);
  console.log(moore);

  alert('csm profe y la asdasdsa')
});

$(addCol).on('click',function(event){
  alert('agregando col')
})


/////////////////// graficando/////
function graficar(links){
  var nodes = {};
  // Compute the distinct nodes from the links.
  links.forEach(function(link) {
    link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
    link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
  });

  var w = 700,
      h = 700;

  var force = d3.layout.force()
      .nodes(d3.values(nodes))
      .links(links)
      .size([w, h])
      .linkDistance(210)
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



