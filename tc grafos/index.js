
var obj=[[' ',0.05,0.1,0.25,0.05,0.1,0.25],
        ['q0','q1','q2','q0','-','-',0.25],
        ['q1','q2','q3','q0','-','-',0.30],
        ['q2','q3','q0','q0','-',0.2,0.35],
        ['q3','q0','q0','q0',0.2,0.25,0.4]];
var nodos=[];
var datos = [];
var links=[];
var obj1=[{source:0,
          target:0,
          type:0}];
var col;
var newColumn="<td><input type='text' id='dato'></td>"
var newRow="<tr></tr>"
function makeObj(obj) {

  col=obj[0].length;
  var fil=obj.length;
  var separacion=0;
  var start=obj[0][1];
  var recorreLinks=0;
  for (var i2 = 2; i2<col; i2++) {
    if(obj[0][i2]==start){
      col=i2;
    }
  }
  //llenamos el array de objetos para poder graficar
  for (var i = 1; i < fil; i++) {
    for (var j = 1; j < col; j++) {
        obj1.target=[i][0];
        obj1.source=obj[i][j];
        obj1.type=obj[0][j];
        links[recorreLinks++]=obj1;
        // console.log('obj1 :'+obj1.target);
    }

  }
  console.log(links);
}
function estados(obj) {
  var rows=$('tr').length;
  console.log('tamaño de filas = '+ rows);
  var columns=$('tr:first td').length;
  console.log('tamaño de columnas = '+ columns);
  var a=$(dato);
  for (var i = 1; i < obj.length; i++) {
    nodos[i-1]=obj[i][0];
  }

  console.log('cantidad de estados: '+ nodos.length);
  console.log(nodos);
  for (var i = 0;i < columns; i++) {
    datos[i]=[];
  }
  // datos[0][0]=1
  // datos[0][2]=2
  // datos[0][3]=3
  // datos[1][1]=1

  var temp=0;
  for (var i = 0; i < columns; i++) {
    for (var j = 0; j < rows; j++) {
       datos[i][j]=$(dato).eq(temp).val();
       temp++;
    }
  }
  console.log(datos);
}

$(convertir).on('click',function(evento){
  estados(obj);
  makeObj(obj);
});
$('#addCol').on('click',function(){
  $('tr').append(newColumn)
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
