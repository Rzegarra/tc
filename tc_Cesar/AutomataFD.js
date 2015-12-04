var M_afd=[[' ', 0  ,  1 ,'E'],
        ['q0','q1','q0','-'],
        ['q1','q2','-' ,'-'],
        ['q2','q3','-' ,'-'],
        ['q3', '-','q0', '1' ]];

var A_abcdario = ['A','B','C','D','E','F','G','H','I','J','K','L','M'
                    ,'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var vG_tamaño = M_afd[0].length ;
var M_GLC = [  ];
 
var links= [];

var obj={source:'q1',
          target:'q1',
          type:0}
//-----------------------------------------------
//-----------------------------------------------
function f_get_ (M_afd) {

  
	var t_obj={source:'q1',
          target:'q1',
          type:0}

     var t_cont = 0;      
	for (var r_col = 0 ; r_col<M_afd[0].length-2 ; r_col++ ){

            		

		for(var r_fil = 1 ; r_fil<M_afd.length ; r_fil++ ){

			t_obj = obj;
      
      if ( M_afd[ r_fil ][ r_col ] != '-' || M_afd[ r_fil ][ 0 ] != '-'  ){
        console.log('diferente de - ');
 //      M_GLC[r_fil][0] = A_abcdario[r_fil];

              links.push({
                  target : M_afd[ r_fil ][ r_col ],
                  source : M_afd[ r_fil ][ 0 ],
                  type :   M_afd[ 0 ][ r_col +1]
                }) ;

      }
      else { 
            if ( M_afd[ r_fil ][ r_col ] == '1' ){
              console.log('estado de aceptacion: '+M_afd[ r_fil ][ r_col ])
              }


      /*
			links.push({
                  target : M_afd[ r_fil ][ r_col ],
            			source : M_afd[ r_fil ][ 0 ],
			            type :   M_afd[ 0 ][ r_col +1]
                }) ;*/
      }
  			console.log('----------------');
        console.log(t_obj);
        console.log('contador: '+t_cont);
        console.log(links[t_cont]);
        console.log(links[t_cont-1]);
        console.log('----------------');
			t_cont++;
//			console.log('columuna: '+r_col+' fila: '+r_fil);
//			console.log(obj);
//			console.log('objeto: '+obj[0]+' <-target ' obj[1]+' <-source '+ obj[2]+' <-type');
/*
			if ( M_afd[ r_fil ][ r_col ] == 1) {

			}	*/
		}

		console.log('numero r_col '+r_col);

	}
	graficar(links);
	// body...
}
/*
function f_addEntry (source,target,type){


}*/

function F_chagueToGLC( M_afd ){
  
  var t_M_change = [];
  var t_substrin_Mafd = [];
  var t_substrin_abc = [];
//slice
    for(var run = 0 ; run < M_afd.length ; run++){
        t_substrin_Mafd [ run ] = M_afd[run][0];
        t_substrin_abc [run] = A_abcdario[run]; 
    }
        
    for (var r_fil = 0 ; r_fil < M_afd.length-1 ; r_fil++ ){

        var t_abc = A_abcdario[r_fil];
        M_GLC [r_fil] = [];
        M_GLC [r_fil][0] = t_abc;


        for (var r_col = 1 ; r_col < M_afd[0].length-1 ; r_col++){

    //        if ( M_afd[r_fil+1][r_col] == '-' ){}

//            else{
                var t_souce = t_substrin_Mafd.indexOf(M_afd[r_fil+1][r_col]); 
                var t_data_source = M_afd[0][r_col]+t_substrin_abc[t_souce]; 
                M_GLC[r_fil][r_col]=t_data_source;
  //             }
        }

    }
    console.log(M_GLC[0]);

}

$(convertir).on('click',function(evento){
  f_get_(M_afd);
});

$(convertir).on('click',function(evento){
  F_chagueToGLC(M_afd);
});

$(addCol).on('click',function(event){
  alert('agregando col')
})


///////////// aqui graficamos CSM///////

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
