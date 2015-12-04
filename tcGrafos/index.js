var obj=[[' ','0.05','0.1','0.25','0.05','0.1','0.25'],
        ['q0','q1','q2','q0','-','-','0.25'],
        ['q1','q2','q3','q0','-','-','0.30'],
        ['q2','q3','q0','q0','-','0.2','0.35'],
        ['q3','q0','q0','q0','0.2','0.25','0.4']];
var nodos=[];
var datos = [];
var links=[];
var temp;
var repeticion='';
var aumentaRepeticion=0;
var newColumn="<td><input type='text' id='dato'></td>"
var newRow="<tr></tr>"
var li = [
   {source: "q0", target: "q1", type: "000,110"},
   {source: "q0", target: "q2", type: "101"},
   {source: "q2", target: "q3", type: "111"},
   {source: "q2", target: "q1", type: "101,111"}

 ];
// graficar(links)
function makeAfd(obj) {
  var cambio=0;
  var sum=0;
  var temp=0;
  var col=obj[0].length;
  var fil=obj.length;
  var start=obj[0][1];

  //para ver donde se separa la matriz y poder
  //elvaluar solo la mitad que necesitamos para
  //desarrollar el grafo de AFD

  for (var i2 = 2; i2<col; i2++) {
    if(obj[0][i2]==start){
      col=i2;
    }
  }

  //llenamos el array de objetos para poder graficar
  for (var i = 1; i < fil; i++) {
    if (i!=cambio && obj[i-1][col-1]==obj[i-1][col-2]) {
      repeticion='';
      sum++
    }
    cambio =i;
    repeticion='';
    for (var j = 1; j < col; j++) {
      console.log(obj[i][j-1]+'---'+obj[i][j]+'---'+obj[i][j+1]);
      if(obj[i][j]==obj[i][j+1] || obj[i][j]==obj[i][j-1]){
        console.log('es igual el de adelante o el de atras');
        // console.log(obj[i][j]);
        repeticion= repeticion+'**'+obj[0][j]
        // console.log('soy repeticion: '+repeticion);
        links[sum]={
        source:obj[i][j],
        target:obj[i][0],
        type:repeticion}
        // if (temp!=i) {
        //   sum++
        // }
        // temp=i;
      }

      else {
        links[sum]={
        source:obj[i][j],
        target:obj[i][0],
        type:obj[0][j]}
        sum++;
      }
      console.log('valor de i : '+ i);
      console.log('valor de j :'+ j);
      console.log('posicion = ' + sum );
      console.log('inio= '+obj[i][0]+', fin= '+obj[i][j]+', dato= '+obj[0][j] +' *** ' + repeticion);
      //   // console.log('obj1 :'+obj1.target);
    }

  }
  // console.log(links);
  for (var i = 0; i < links.length; i++) {
    links[i]
  }
}
function llenar(obj){
  var rows=$('tr').length;
  console.log('tamaño de filas = '+ rows);
  var columns=$('tr:first td').length;
  console.log('tamaño de columnas = '+ columns);
  var a=$(dato);
  var temp=0;
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
       $(dato).eq(temp).val(obj[i][j]);
       temp++;
    }
  }
}
function makeVec (){
  var rows=$('tr').length;
  console.log('tamaño de filas = '+ rows);
  var columns=$('tr:first td').length;
  console.log('tamaño de columnas = '+ columns);
  for (var i = 0;i < rows; i++) {
    datos[i]=[];
  }
  var temp=0;
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
       datos[i][j]=$(dato).eq(temp).val();
       temp++;
    }
  }
}
  function estados(obj) {
    // var rows=$('tr').length;
    // console.log('tamaño de filas = '+ rows);
    // var columns=$('tr:first td').length;
    // console.log('tamaño de columnas = '+ columns);
    // var a=$(dato);
    for (var i = 1; i < obj.length; i++) {
      nodos[i-1]=obj[i][0];
    }

    console.log('cantidad de estados: '+ nodos.length);
    console.log(nodos);
    // for (var i = 0;i < obj.length; i++) {
    //   datos[i]=[];
    // }
    // datos[0][0]=1
    // datos[0][2]=2
    // datos[0][3]=3
    // datos[1][1]=1

    // var temp=0;
    // for (var i = 0; i < rows; i++) {
    //   for (var j = 0; j < columns; j++) {
    //      datos[i][j]=$(dato).eq(temp).val();
    //      temp++;
    //   }
    // }
    // console.log(datos);
  }

// $(convertir).on('click',function(evento){
//   estados(obj);
//   makeAfd(obj);
// });


var inputMatriz="<table id='tabla'><tr><td><p id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td></tr><tr><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td></tr><tr><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td></tr><tr><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td></tr><tr><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td><td><input type='text' id='dato'></td></tr></table>"
var buttonsPlusDel="<div class='buttonsPlusDel'>"+
  "<button  id='addCol' type='button' class='btn btn-primary'> +col </button>"+
  "<button  id='delCol' type='button' class='btn btn-info'> -col </button>"+
  "<button  id='addRow' type='button' class='btn btn-primary'> +fil </button>"+
"  <button  id='delRow' type='button' class='btn btn-info'> -fil </button>"+
"</div>"
var buttonsPlusDelGlc="<div class='buttonsPlusDel'>"+
  "<button  id='addGlc' type='button' class='btn btn-primary'> + input </button>"+
  "<button  id='delGlc' type='button' class='btn btn-info'> - input </button>"+
"</div>"
function nuevo (){
  $('.buttonAccion').empty();
  $('.inp').empty();
  $('svg').remove();
}
var inputLinea="<input type='text' id='inLinea' >"

//botones para decidir de donde se convertira.

$('#buttonGlc').on('click',function(){
  nuevo();
  $('.buttonAccion').append(buttonsPlusDelGlc)
  $('.inp').append(inputLinea);
  $('#titulo1').text('GLC');
  $('#addGlc').on('click',function(){
    $('.inp').append(inputLinea);
  });
  $('#delGlc').on('click',function(){
    $('#inLinea:last').remove();
  });
});
$('#buttonAfd').on('click',function(){
  nuevo()
  $('.buttonAccion').append(buttonsPlusDel)
  $('.inp').append(inputMatriz)
  $('#titulo1').text('AFD')
});
$('#buttonMoore').on('click',function(){
  nuevo()
  $('.buttonAccion').append(buttonsPlusDel)
  $('.inp').append(inputMatriz)
  $('#titulo1').text('MOORE')
});
$('#buttonMealy').on('click',function(){
  nuevo()
  $('.buttonAccion').append(buttonsPlusDel)
  $('.inp').append(inputMatriz)
  $('#titulo1').text('MEALY')
});
$('#buttonEr').on('click',function(){
  nuevo();
  $('.inp').append(inputLinea);
  $('#titulo1').text('ER')
});

//botones para convertir =======

$('#moore').on('click',function(){
  $('svg').remove();
  links=[];
  $('#titulo2').text('MOORE')
  makeVec();
  makeAfd(datos);
  console.log('graficando.......');
  graficar(links);
});
$('#mealy').on('click',function(){
  $('svg').remove();
  links=[];
  $('#titulo2').text('MEALY')
});
$('#glc').on('click',function(){
  $('svg').remove();
  links=[];
  $('#titulo2').text('GLC')
});
$('#er').on('click',function(){
  $('svg').remove();
  links=[];
  $('#titulo2').text('ER')
});
$('#afd').on('click',function(){
  $('svg').remove();
  links=[];
  $('#titulo2').text('AFD')
});

//botones de llenado de filas columnas y relleno



$('#addCol').on('click',function(){
  estados(obj);
  $('tr').append(newColumn)
});

$('#llena').on('click',function(){
  console.log('llenando');
  llenar(obj);
});

$('#delCol').on('click',function(){
  var rows=$('tr').length;
  console.log('tamaño de filas = '+ rows);
  var columns=$('tr:first td').length;
  console.log('tamaño de columnas = '+ columns);
  for (var i = 0; i < rows; i++) {
    $('tr:eq('+i+') td:last').remove();
  }
  console.log('entre');
});
$('#addRow').on('click',function(){
  var rows=$('tr').length;
  console.log('tamaño de filas = '+ rows);
  var columns=$('tr:first td').length;
  console.log('tamaño de columnas = '+ columns);
  $('table').append(newRow)
  for (var i = 0; i < columns; i++) {
    $('tr:last').append("<td><input type='text' id='dato'></td>");
  }

});
$('#delRow').on('click',function(){
  $('tr:last').remove();
});

//funcion graficar.... recibe el array de objetos ya diseñado

function graficar(links){
  var nodes = {};

  // Compute the distinct nodes from the links.
  links.forEach(function(link) {
    link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
    link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
  });

  var w = 375,
      h = 375;

  var force = d3.layout.force()
      .nodes(d3.values(nodes))
      .links(links)
      .size([w, h])
      .linkDistance(200)
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
