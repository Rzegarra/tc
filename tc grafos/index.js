var obj=[[' ',0.05,0.1,0.25,0.05,0.1,0.25],
        ['q0','q1','q2','q0','-','-',0.25],
        ['q1','q2','q3','q0','-','-',0.30],
        ['q2','q3','q0','q0','-',0.2,0.35],
        ['q3','q0','q0','q0',0.2,0.25,0.4]];
var nodos=[];
var datos = [];
var rows=$('tr').length;
console.log('tamaño de filas = '+ rows);
var columns=$('tr:first td').length;
console.log('tamaño de columnas = '+ columns);
var newColumn="<td><input type='text' id='dato'></td>"
var newRow="<tr></tr>"
function estados(obj) {
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
  var rows=$('tr').length;
  console.log('tamaño de filas = '+ rows);
  var columns=$('tr:first td').length;
  console.log('tamaño de columnas = '+ columns);
  ///////
  var a=$(dato);
  var temp=0;
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
      datos[i][j]=$(dato).eq(temp).val();
      temp++;
    }
  }
  console.log(datos[0][0]);
}

$(convertir).on('click',function(evento){
  estados(obj);
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
